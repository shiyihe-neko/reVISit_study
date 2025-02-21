import React, {
  useState, useCallback,
  useRef,
  useEffect,
} from 'react';

import AceEditor from 'react-ace';
import { Box, Group } from '@mantine/core';
import githubLight from 'ace-builds/src-noconflict/theme-github';
import githubDark from 'ace-builds/src-noconflict/theme-github_dark';

import { startingStringsMap } from './startingStrings';

import 'ace-builds/src-noconflict/mode-hjson';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-xml';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/mode-toml';
import 'ace-builds/src-noconflict/mode-json5';
import 'ace-builds/src-noconflict/ext-language_tools';
import { StimulusParams } from '../../../store/types';
import { PREFIX } from '../../../utils/Prefix';
import { useIsDarkMode } from '../../../store/hooks/useIsDarkMode';
// adding worker
function CodeEditorTest({ setAnswer, parameters }: StimulusParams<{language: string, imagePath: string | null, type: 'modifying' | 'writing' | 'reading', tabular: boolean}, Record<string, never>>): React.ReactElement {
  const [code, setCode] = useState<string>(startingStringsMap[parameters.type + (parameters.tabular ? 'tabular' : 'config') + parameters.language]);

  const isDarkMode = useIsDarkMode();

  const editorOnChange = useCallback((rawCode: string) => {
    setAnswer({
      status: true,
      answers: {
        code: rawCode,
        error: rawCode,
      },
    });

    setCode(rawCode);
  }, [setAnswer]);

  const editorRef = useRef<AceEditor>(null);

  useEffect(() => {
    if (isDarkMode) {
      editorRef.current?.editor.setTheme(githubDark);
    } else {
      editorRef.current?.editor.setTheme(githubLight);
    }
  }, [isDarkMode]);

  return (
    <Box>
      {/*  */}
      <Group gap={20} wrap="nowrap">
        {parameters.imagePath ? (
          <div style={{ flex: '0 0 50%' }}>
            <img
              src={PREFIX + parameters.imagePath}
              alt="Example"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
        ) : null }

        <AceEditor
          ref={editorRef}
          mode={parameters.language !== 'jsonc' ? parameters.language : 'json'}
          width="100%"
          height="1000px"
          value={code}
          wrapEnabled
          onChange={editorOnChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
        />

      </Group>

      {/* validation */}
    </Box>

  );
}

export default CodeEditorTest;
