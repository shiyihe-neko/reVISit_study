import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as monaco from 'monaco-editor';
import { Box, Select } from '@mantine/core';
import * as yaml from 'js-yaml';
import JSON5 from 'json5';
import * as jsonc from 'jsonc-parser';

type SupportedFormat = 'json' | 'jsonc' | 'json5' | 'yaml' | 'xml' | 'csv';

const parseCSV = (csvText: string) => {
  const lines = csvText.trim().split('\n');
  if (lines.length === 0) throw new Error('Empty CSV');

  const headers = lines[0].split(',').map((h) => h.trim());
  if (headers.length === 0) throw new Error('No headers found');

  const rows = lines.slice(1).map((line) => {
    const values = line.split(',').map((v) => v.trim());
    if (values.length !== headers.length) {
      throw new Error('Row length does not match headers');
    }
    return Object.fromEntries(headers.map((h, i) => [h, values[i]]));
  });

  return { headers, rows };
};

const validateXML = (xmlText: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, 'text/xml');
  const parserError = doc.querySelector('parsererror');
  if (parserError) {
    throw new Error(parserError.textContent || 'Invalid XML');
  }
  return doc;
};

const CodeEditorTest: React.FC = () => {
  const [code, setCode] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [format, setFormat] = useState<SupportedFormat>('json');
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);

  const containerRef = useCallback((node: HTMLDivElement) => {
    if (node && !editor) {
      const instance = monaco.editor.create(node, {
        value: code,
        language: 'json',
        theme: 'vs-dark',
        automaticLayout: true,
      });
      setEditor(instance);

      instance.onDidChangeModelContent(() => {
        setCode(instance.getValue());
      });
    }
  }, [editor]);

  const handleFormatChange = useCallback((newFormat: SupportedFormat) => {
    setFormat(newFormat);
    if (editor) {
      monaco.editor.setModelLanguage(editor.getModel()!, newFormat === 'jsonc' ? 'json' : newFormat);
    }
  }, [editor]);

  const validateCode = useCallback(() => {
    try {
      let parsed;
      switch (format) {
        case 'json':
          parsed = JSON.parse(code);
          setErrors(['JSON is valid!', 'Parsed content:', JSON.stringify(parsed, null, 2)]);
          break;

        case 'jsonc':
          const jsonErrors: jsonc.ParseError[] = [];
          parsed = jsonc.parse(code, jsonErrors);
          if (jsonErrors.length > 0) {
            throw new Error(
              jsonErrors
                .map(
                  (err) =>
                    `Error at offset ${err.offset}: ${jsonc.getParseErrorMessage(err.error)}`
                )
                .join('; ')
            );
          }
          setErrors(['JSONC is valid!', 'Parsed content:', JSON.stringify(parsed, null, 2)]);
          break;

        case 'json5':
          parsed = JSON5.parse(code);
          setErrors(['JSON5 is valid!', 'Parsed content:', JSON.stringify(parsed, null, 2)]);
          break;

        case 'yaml':
          parsed = yaml.load(code);
          setErrors(['YAML is valid!', 'Parsed content:', JSON.stringify(parsed, null, 2)]);
          break;

        case 'xml':
          validateXML(code);
          setErrors(['XML is valid!']);
          break;

        case 'csv':
          parsed = parseCSV(code);
          setErrors(['CSV is valid!', 'Parsed content:', JSON.stringify(parsed, null, 2)]);
          break;

        default:
          throw new Error('Unsupported format');
      }
    } catch (e: any) {
      setErrors([`${format.toUpperCase()} Validation Error: ${e.message}`]);
    }
  }, [code, format]);

  useEffect(() => {
    return () => {
      editor?.dispose();
    };
  }, [editor]);

  return (
    <div>
      <Box mb="md">
        <Select
          label="Select Format"
          value={format}
          onChange={(value: SupportedFormat) => handleFormatChange(value)}
          data={[
            { value: 'json', label: 'JSON' },
            { value: 'jsonc', label: 'JSONC (JSON with Comments)' },
            { value: 'json5', label: 'JSON5' },
            { value: 'yaml', label: 'YAML' },
            { value: 'xml', label: 'XML' },
            { value: 'csv', label: 'CSV' },
          ]}
        />
      </Box>
      <Box
        style={{
          height: '500px',
          border: '1px solid #ccc',
          borderRadius: '8px',
        }}
        ref={containerRef}
      />
      <Box mt="md">
        <button onClick={validateCode}>Validate {format.toUpperCase()}</button>
      </Box>
      <Box mt="md">
        <h3>Validation Results:</h3>
        <pre
          style={{
            whiteSpace: 'pre-wrap',
            background: '#f5f5f5',
            padding: '10px',
            borderRadius: '4px',
          }}
        >
          {errors.join('\n')}
        </pre>
      </Box>
    </div>
  );
};

export default CodeEditorTest;
