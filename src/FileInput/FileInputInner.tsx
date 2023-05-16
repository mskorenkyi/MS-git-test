import * as React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, Button, TextInput, Text } from 'react-native';
import { FileInputProps, SelectedFile, IButtonStyles } from './types';
import { DEFAULT_BUTTON_TEXT } from './constants';

const isIphone = true;

type Props<T> = FileInputProps<T> & {
  handlePress: () => void;
  RenderInput?: () => JSX.Element;
  selectedFile?: SelectedFile<T>;
};

export const FileInputInner = <T extends unknown>({
  containerStyles,
  inputStyles,
  buttonStyles = {},
  buttonText,
  handlePress,
  RenderInput,
  selectedFile,
  disabled,
  label = null,
  helperText,
  required,
  optional,
  error,
  asteriskPosition,
  ...rest
}: Props<T>) => {
  const onPress = async () => {
    handlePress();
  };

  let {
    style: buttonOuterStyles,
    contentStyle: buttonInnerStyles,
    ...otherButtonStyles
  } = buttonStyles as IButtonStyles

  return (
    <View style={[styles.container, containerStyles]}>
      {Boolean(label) && typeof label === 'string' && (
        <Text
        >{label}</Text>
      )}
      <View style={styles.row}>
        <View style={isIphone ? styles.inputWrapperIphone : styles.inputWrapper}>
          <TextInput
            {...rest}
            editable={false}
            value={selectedFile && selectedFile.name}
            style={inputStyles}
          />
          {typeof RenderInput === 'function' && <RenderInput />}
        </View>
        <Button
          title={helperText}
        />
      </View>
      {helperText ? (
        <Text
        >{helperText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    marginRight: 20,
  },
  inputWrapperIphone: {
    width: '50%',
    flex: 1,
    marginRight: 20,
  }
});
