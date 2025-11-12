import {
  ColorSwatch, Group, Stack, Textarea, Text,
} from '@mantine/core';
import { useState, useEffect } from 'react';
import { ColorTextResponseD } from '../../parser/types';
import { generateErrorMessage } from './utils';
import classes from './css/Input.module.css';
import { InputLabel } from './InputLabel';

const hexRegex = /^#(?:[0-9A-Fa-f]{3,4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;

const REQUIRED_HEX_VALUES = ['#00A67E', '#7356BF'];

export function ColorAreaInputD({
  response,
  disabled,
  answer,
  index,
  enumerateQuestions,
}: {
  response: ColorTextResponseD;
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
    if (colors.length === 0) {
      setErrorMsg('');
      return;
    }

    const validColors = colors.filter((c) => hexRegex.test(c.trim()));
    if (validColors.length < colors.length) {
      setErrorMsg('please enter valid hex values only');
      return;
    }

    if (colors.length < 6) {
      setErrorMsg(`please enter ${6 - colors.length} more hex`);
      return;
    }

    if (colors.length > 6) {
      setErrorMsg(`please remove ${colors.length - 6} hex (only 6 allowed)`);
      return;
    }

    const normalizedColors = colors.map((c) => c.trim().toUpperCase());
    const normalizedRequired = REQUIRED_HEX_VALUES.map((h) => h.toUpperCase());
    const missingRequired = normalizedRequired.filter(
      (reqHex) => !normalizedColors.includes(reqHex),
    );

    if (missingRequired.length > 0) {
      setErrorMsg(
        `missing required colors: ${missingRequired.join(', ')}`,
      );
      return;
    }

    setErrorMsg('');
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
