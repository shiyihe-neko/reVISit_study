// import { Textarea } from '@mantine/core';
// import { LongTextResponse } from '../../parser/types';
// import { generateErrorMessage } from './utils';
// import classes from './css/Input.module.css';
// import { InputLabel } from './InputLabel';

// export function TextAreaInput({
//   response,
//   disabled,
//   answer,
//   index,
//   enumerateQuestions,
// }: {
//   response: LongTextResponse;
//   disabled: boolean;
//   answer: { value?: string };
//   index: number;
//   enumerateQuestions: boolean;
// }) {
//   const {
//     placeholder,
//     prompt,
//     required,
//     secondaryText,
//   } = response;

//   return (
//     <Textarea
//       disabled={disabled}
//       placeholder={placeholder}
//       label={prompt.length > 0 && <InputLabel prompt={prompt} required={required} index={index} enumerateQuestions={enumerateQuestions} />}
//       description={secondaryText}
//       radius="md"
//       size="md"
//       {...answer}
//         // This is necessary so the component doesnt switch from uncontrolled to controlled, which can cause issues.
//       value={answer.value || ''}
//       error={generateErrorMessage(response, answer)}
//       classNames={{ input: classes.fixDisabled }}
//     />
//   );
// }
// import {
//   ColorSwatch, Group, Stack, Textarea,
// } from '@mantine/core';
// import { useState } from 'react';
// import { LongTextResponse } from '../../parser/types';
// import { generateErrorMessage } from './utils';
// import classes from './css/Input.module.css';
// import { InputLabel } from './InputLabel';

// export function ColorAreaInput({
//   response,
//   disabled,
//   answer,
//   index,
//   enumerateQuestions,
// }: {
//   response: LongTextResponse;
//   disabled: boolean;
//   answer: { value?: string };
//   index: number;
//   enumerateQuestions: boolean;
// }) {
//   const {
//     placeholder,
//     prompt,
//     required,
//     secondaryText,
//     infoText,
//   } = response;

//   const [colors, setColors] = useState<string[]>([]);

//   return (
//     <Stack gap="xs">
//       <Textarea
//         disabled={disabled}
//         placeholder={placeholder}
//         label={prompt.length > 0 && <InputLabel prompt={prompt} required={required} index={index} enumerateQuestions={enumerateQuestions} infoText={infoText} />}
//         description={secondaryText}
//         radius="md"
//         size="md"
//         {...answer}
//         onChangeCapture={(event) => setColors(event.currentTarget.value.split(','))}
//         // This is necessary so the component doesnt switch from uncontrolled to controlled, which can cause issues.
//         value={answer.value || ''}
//         error={generateErrorMessage(response, answer)}
//         classNames={{ input: classes.fixDisabled }}
//       />

//       <Group gap="xs">
//         {colors.map((c) => <ColorSwatch key={c} color={c} />)}
//       </Group>
//     </Stack>
//   );
// }
// import {
//   ColorSwatch, Group, Stack, Textarea, Text,
// } from '@mantine/core';
// import { useState, useEffect } from 'react';
// import { LongTextResponse } from '../../parser/types';
// import { generateErrorMessage } from './utils';
// import classes from './css/Input.module.css';
// import { InputLabel } from './InputLabel';

// const hexRegex = /^#([0-9A-Fa-f]{6})$/;

// export function TextAreaInput({
//   response,
//   disabled,
//   answer,
//   index,
//   enumerateQuestions,
// }: {
//   response: LongTextResponse;
//   disabled: boolean;
//   answer: { value?: string };
//   index: number;
//   enumerateQuestions: boolean;
// }) {
//   const {
//     placeholder,
//     prompt,
//     required,
//     secondaryText,
//     infoText,
//   } = response;

//   const [colors, setColors] = useState<string[]>([]);
//   const [errorMsg, setErrorMsg] = useState<string>('');

//   useEffect(() => {
//     const validColors = colors.filter((c) => hexRegex.test(c.trim()));

//     if (colors.length === 0) {
//       setErrorMsg('');
//     } else if (validColors.length < colors.length) {
//       setErrorMsg('please enter a valid hex');
//     } else if (validColors.length < 6) {
//       setErrorMsg(`please enter ${6 - validColors.length} more hex`);
//     } else {
//       setErrorMsg('');
//     }
//   }, [colors]);

//   return (
//     <Stack gap="xs">
//       <Textarea
//         disabled={disabled}
//         placeholder={placeholder}
//         label={
//           prompt.length > 0 && (
//             <InputLabel
//               prompt={prompt}
//               required={required}
//               index={index}
//               enumerateQuestions={enumerateQuestions}
//               infoText={infoText}
//             />
//           )
//         }
//         description={secondaryText}
//         radius="md"
//         size="md"
//         {...answer}
//         onChangeCapture={(event) => {
//           const rawInput = event.currentTarget.value;
//           const splitColors = rawInput
//             .split(',')
//             .map((c) => c.trim())
//             .filter((c) => c !== '');
//           setColors(splitColors);
//         }}
//         value={answer.value || ''}
//         error={generateErrorMessage(response, answer)}
//         classNames={{ input: classes.fixDisabled }}
//       />

//       <Group gap="xs">
//         {colors.map((c, i) => (
//           <ColorSwatch key={`${c}-${i}`} color={hexRegex.test(c) ? c : 'transparent'} />
//         ))}
//       </Group>

//       {errorMsg && (
//         <Text c="red" size="sm">
//           {errorMsg}
//         </Text>
//       )}
//     </Stack>
//   );
// }

import {
  ColorSwatch, Group, Stack, Textarea, Text,
} from '@mantine/core';
import { useState, useEffect } from 'react';
import { LongTextResponse } from '../../parser/types';
import { generateErrorMessage } from './utils';
import classes from './css/Input.module.css';
import { InputLabel } from './InputLabel';

const hexRegex = /^#([0-9A-Fa-f]{6})$/;

export function TextAreaInput({
  response,
  disabled,
  answer,
  index,
  enumerateQuestions,
}: {
  response: LongTextResponse;
  disabled: boolean;
  answer: { value?: string };
  index: number;
  enumerateQuestions: boolean;
}) {
  const {
    placeholder,
    prompt,
    required,
    secondaryText,
    infoText,
  } = response;

  const [colors, setColors] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    const validColors = colors.filter((c) => hexRegex.test(c.trim()));
    if (colors.length === 0) {
      setErrorMsg('');
    } else if (validColors.length < colors.length) {
      setErrorMsg('please enter a valid hex');
    } else if (validColors.length < 6) {
      setErrorMsg(`please enter ${6 - validColors.length} more hex`);
    } else {
      setErrorMsg('');
    }
  }, [colors]);

  return (
    <Stack gap="xs">
      <Textarea
        disabled={disabled}
        placeholder={placeholder}
        label={
          prompt.length > 0 && (
            <>
              <InputLabel
                prompt={prompt}
                required={required}
                index={index}
                enumerateQuestions={enumerateQuestions}
              />
              {infoText && (
                <Text c="dimmed" size="sm" mt={-4}>
                  {infoText}
                </Text>
              )}
            </>
          )
        }
        description={secondaryText}
        radius="md"
        size="md"
        {...answer}
        onChangeCapture={(event) => {
          const rawInput = event.currentTarget.value;
          const splitColors = rawInput
            .split(',')
            .map((c) => c.trim())
            .filter((c) => c !== '');
          setColors(splitColors);
        }}
        value={answer.value || ''}
        error={generateErrorMessage(response, answer)}
        classNames={{ input: classes.fixDisabled }}
      />
      <Group gap="xs">
        {colors.map((c, i) => (
          <ColorSwatch key={`${c}-${i}`} color={hexRegex.test(c) ? c : 'transparent'} />
        ))}
      </Group>
      {errorMsg && (
        <Text c="red" size="sm">
          {errorMsg}
        </Text>
      )}
    </Stack>
  );
}
