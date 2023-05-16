import { TextInputProps } from '../helpers';
import { StyleProp, ViewStyle } from 'react-native';
/**
 * @T - it is a generic type of File Response.
 * For Web - File.
 * For Mobile - DocumentPickerResponse.
 */

export type SelectedFile<T> = T & {
  name: string;
};

export type FileInputProps<T> = TextInputProps & {
  /**
   * Custom text for "Browse" button
   */
  buttonText?: string;
  /**
   * A callback that will triggers, when user have picked file
   */
  onChange: (res: T) => void;
  /**
   * A styles for container
   */
  containerStyles?: StyleProp<ViewStyle>;
  /**
   * A styles for "Browse" button
   */
  buttonStyles?: StyleProp<IButtonStyles>;
  /**
   * A styles for input
   */
  inputStyles?: StyleProp<ViewStyle>;

  /**
   * Determines the allowed file types
   */
  accept?: Array<'images' | 'plainText' | 'audio' | 'pdf' | 'zip' | 'csv' | 'doc' | 'docx' | 'ppt' | 'pptx' | 'xls' | 'xlsx'>

};


export type IButtonStyles = ViewStyle & {
  style?: ViewStyle;
  contentStyle?: ViewStyle;
};
