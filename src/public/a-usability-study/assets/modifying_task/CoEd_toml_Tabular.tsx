import React, { useState, useEffect, useCallback } from 'react';
import * as monaco from 'monaco-editor';
import { Box } from '@mantine/core';
import * as toml from 'toml';

// 初始 TOML 代码 (保持不变)
const initialCode = `name = "student-data"
version = "1.0.0"
description = "Student information with grades and extracurricular activities."
homepage = "https://example.com/student-data"
comments = "Student data including grades and extracurricular activities. AB stands for absent."

[repository]
type = "git"
url = "https://github.com/example/student-data.git"

keywords = [
  "student",
  "grades",
  "courses",
  "extracurricular",
  "attendance"
]

[[students]]
name = "Bob"
age = 12

[[students.contact]]
email = "bob@example.com"
phone = "+123456789"
address = "123 Bob St, Some City"

[[students.courses]]
course_name = "Math 101"

[[students.courses.quizzes]]
quiz = 1
grade = 8
weight = 0.1

[[students.courses.quizzes]]
quiz = 2
grade = 9
weight = 0.1

[students.courses.midterm]
grade = 77
weight = 0.3

[students.courses.final]
grade = 87
weight = 0.5

[students.courses.total_score]
value = 82.3

[students.courses.attendance]
total_classes = 30
attended_classes = 28
absent_classes = 2

[[students.courses]]
course_name = "History 101"

[[students.courses.quizzes]]
quiz = 1
grade = 7
weight = 0.2

[[students.courses.quizzes]]
quiz = 2
grade = 8
weight = 0.2

[students.courses.midterm]
grade = 80
weight = 0.4

[students.courses.final]
grade = 85
weight = 0.3

[students.courses.total_score]
value = 81.3

[students.courses.attendance]
total_classes = 30
attended_classes = 30
absent_classes = 0

[[students.extra_curricular.sports]]
sport_name = "Soccer"
position = "Forward"
team = "The Tigers"

[[students.extra_curricular.sports]]
sport_name = "Basketball"
position = "Guard"
team = "The Eagles"

[[students.extra_curricular.clubs]]
club_name = "Science Club"
role = "President"

[[students.extra_curricular.clubs]]
club_name = "Drama Club"
role = "Member"

[[students]]
name = "Eve"
age = 13

[[students.contact]]
email = "eve@example.com"
phone = "+987654321"
address = "456 Eve St, Other City"

[[students.courses]]
course_name = "Math 101"

[[students.courses.quizzes]]
quiz = 1
grade = 9
weight = 0.15

[[students.courses.quizzes]]
quiz = 2
grade = 10
weight = 0.15

[students.courses.midterm]
grade = "AB"
weight = 0.3

[students.courses.final]
grade = 77
weight = 0.4

[students.courses.total_score]
value = 78.3

[students.courses.attendance]
total_classes = 30
attended_classes = 27
absent_classes = 3

[[students.extra_curricular.sports]]
sport_name = "Tennis"
position = "Singles"
team = "The Champions"

[[students.extra_curricular.clubs]]
club_name = "Art Club"
role = "Vice President"

[[students]]
name = "Alice"
age = 17

[[students.contact]]
email = "alice@example.com"
phone = "+112233445"
address = "789 Alice St, Another City"

[[students.courses]]
course_name = "Math 101"

[[students.courses.quizzes]]
quiz = 1
grade = 6
weight = 0.2

[students.courses.midterm]
grade = 88
weight = 0.4

[students.courses.final]
grade = "AB"
weight = 0.4

[students.courses.total_score]
value = 83.2

[students.courses.attendance]
total_classes = 30
attended_classes = 25
absent_classes = 5

[[students.extra_curricular.clubs]]
club_name = "Music Club"
role = "Member"
`;

// 注册 TOML 语言
monaco.languages.register({ id: 'toml' });

// 改进的 TOML 语法高亮规则，添加注释支持
monaco.languages.setMonarchTokensProvider('toml', {
  tokenizer: {
    root: [
      [/#.*$/, 'comment'], // 添加注释支持
      [/".*?"/, 'string'], // 字符串
      [/[-+]?[0-9]+(\.[0-9]+)?/, 'number'], // 数字
      [/(true|false)/, 'keyword'], // 布尔值
      [/\[.*?\]/, 'namespace'], // 表格头
      [/^[a-zA-Z0-9_-]+(?=\s*=)/, 'key'], // 键名
    ],
  },
});

// 自定义 hc-black 主题，添加注释样式
monaco.editor.defineTheme('hc-black', {
  base: 'hc-black',
  inherit: true,
  rules: [
    { token: 'comment', foreground: '6A9955' }, // 添加注释样式
    { token: 'string', foreground: 'ce9178' },
    { token: 'number', foreground: 'b5cea8' },
    { token: 'keyword', foreground: '569cd6', fontStyle: 'bold' },
    { token: 'namespace', foreground: '4ec9b0', fontStyle: 'bold' },
    { token: 'key', foreground: 'dcdcaa', fontStyle: 'italic' },
  ],
  colors: {
    'editor.foreground': '#ffffff',
    'editor.background': '#000000',
    'editor.lineHighlightBackground': '#333333',
    'editorCursor.foreground': '#ffffff',
    'editor.selectionBackground': '#264f78',
    'editorLineNumber.foreground': '#858585',
  },
});

interface EditorAnswer {
  status: boolean;
  answers: {
    code: string;
    error: string;
  };
}

interface StimulusParamsTyped {
  setAnswer: (answer: EditorAnswer) => void;
}

function useTomlEditor(initialTomlCode: string) {
  const [code, setCode] = useState(initialTomlCode);
  const [currentErrors, setCurrentErrors] = useState<string[]>([]);
  const [editorInstance, setEditorInstance] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);

  const validateToml = useCallback((currentCode: string) => {
    let validationErrors: string[] = [];
    if (!editorInstance) return currentErrors;

    try {
      toml.parse(currentCode);
      validationErrors = ['No errors found. TOML is valid!'];
      monaco.editor.setModelMarkers(editorInstance.getModel()!, 'toml', []);
    } catch (e) {
      if (e instanceof Error && e.message) {
        const match = /at line (\\d+), column (\\d+)/.exec(e.message);
        if (match) {
          const lineNumber = parseInt(match[1], 10);
          const startColumn = parseInt(match[2], 10);

          validationErrors = [`Syntax error at line ${lineNumber}, column ${startColumn}: ${e.message}`];

          monaco.editor.setModelMarkers(editorInstance.getModel()!, 'toml', [{
            startLineNumber: lineNumber,
            startColumn,
            endLineNumber: lineNumber,
            endColumn: startColumn + 1,
            message: e.message,
            severity: monaco.MarkerSeverity.Error,
          }]);
        } else {
          validationErrors = [e.message];
        }
      }
    }

    setCurrentErrors(validationErrors);
    return validationErrors;
  }, [editorInstance, currentErrors]);

  return {
    code,
    setCode,
    currentErrors,
    validateToml,
    setEditorInstance,
  };
}

function CodeEditorTest({ setAnswer }: StimulusParamsTyped): React.ReactElement {
  const {
    code,
    setCode,
    currentErrors,
    validateToml,
    setEditorInstance,
  } = useTomlEditor(initialCode);

  useEffect(() => {
    const latestErrors = validateToml(code);

    setAnswer({
      status: true,
      answers: {
        code,
        error: latestErrors.join('\n'),
      },
    });
  }, [code, validateToml, setAnswer]);

  const containerRef = useCallback((node: HTMLDivElement) => {
    if (node) {
      const editor = monaco.editor.create(node, {
        value: code,
        language: 'toml',
        theme: 'hc-black',
        automaticLayout: true,
        minimap: { enabled: false },
        formatOnPaste: true,
        formatOnType: true,
        scrollBeyondLastLine: false,
        lineNumbers: 'on',
        roundedSelection: false,
        wordWrap: 'on',
      });

      setEditorInstance(editor);

      editor.onDidChangeModelContent(() => {
        const rawCode = editor.getValue();
        setCode(rawCode);
      });

      return () => {
        editor.dispose();
      };
    }
    return undefined;
  }, [setCode, setEditorInstance]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px',
    }}
    >
      {/* 代码编辑器部分 */}
      <Box
        style={{
          height: '500px',
          border: '1px solid #ccc',
          borderRadius: '8px',
        }}
        ref={containerRef}
      />
      {/* 验证状态显示 */}
      <Box
        style={{
          background: '#f5f5f5',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          whiteSpace: 'pre-wrap',
          overflow: 'auto',
        }}
      >
        <h3>Validation Status:</h3>
        <ul>
          {currentErrors.map((error, index) => (
            <li key={index} style={{ color: error.includes('valid') ? 'green' : 'red' }}>
              {error}
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
}

export default CodeEditorTest;
