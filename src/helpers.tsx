import {TextInput as NativeTextInput, ImageSourcePropType, ViewProps} from 'react-native';

type IconSourceBase = string | ImageSourcePropType;

type IconProps = {
  color: string;
  size: number;
  allowFontScaling?: boolean;
};

export type IconSource =
  | IconSourceBase
  | Readonly<{ source: IconSourceBase; direction: 'rtl' | 'ltr' | 'auto' }>
  | ((props: IconProps) => React.ReactNode);

export type TextInputProps = React.ComponentProps<
  typeof NativeTextInput
> & {
  /**
   * If true, user won't be able to interact with the component.
   */
  disabled?: boolean;
  /**
   * The text to use for the floating label.
   */
  label?: string | React.ReactNode;
  /**
   * Placeholder for the input.
   */
  placeholder?: string;
  /**
   * Whether to style the TextInput with error style.
   */
  error?: boolean;
  /**
   * Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.
   */
  onChangeText?: Function;
  /**
   * Selection color of the input
   */
  selectionColor?: string;
  /**
   * Underline color of the input.
   */
  underlineColor?: string;
  /**
   * Whether to apply padding to label and input.
   */
  padding?: 'none' | 'normal';
  /**
   * Sets min height with densed layout. For `TextInput` in `flat` mode
   * height is `64dp` or in dense layout - `52dp` with label or `40dp` without label.
   * For `TextInput` in `outlined` mode
   * height is `56dp` or in dense layout - `40dp` regardless of label.
   * When you apply `heigh` prop in style the `dense` prop affects only `paddingVertical` inside `TextInput`
   */
  dense?: boolean;
  /**
   * Whether the input can have multiple lines.
   */
  multiline?: boolean;
  /**
   * The number of lines to show in the input (Android only).
   */
  numberOfLines?: number;
  /**
   * Callback that is called when the text input is focused.
   */
  onFocus?: (args: any) => void;
  /**
   * Callback that is called when the text input is blurred.
   */
  onBlur?: (args: any) => void;
  /**
   * Value of the text input.
   */
  value?: string;
  /**
   * Pass `fontSize` prop to modify the font size inside `TextInput`.
   * Pass `height` prop to set `TextInput` height. When `height` is passed,
   * `dense` prop will affect only input's `paddingVertical`.
   */
  style?: any;
  helperText?: string;
  required?: boolean;
  optional?: boolean | string;
  icon?: IconSource;
  leftIcon?: IconSource;
  iconColor?: string;
  fullWidth?: boolean;
  isPhoneNumber?: boolean;
  countryPicker?: (borderColor: string, borderWidth: number) => React.ReactNode;
  onIconPress?: () => void;
  onLeftIconPress?: () => void;
  rows?: number;
  sizeAdjustable?: boolean;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  maxResizableWidth?: number;
  onResizeHandlerIn?: () => void;
  onResizeHandlerOut?: () => void;
  /**
   * A size of control
   * */
  size?: 'small' | 'medium';
  /**
   * Whether the input is editable.
   * */
  editable?: boolean;
  /**
   * Whether the input is readonly.
   * */
  readonly?: boolean;
  /**
   * What should be rendered after leftIcon before NativeTextInput
   * */
  left?: React.ReactNode;
  /**
   * @optional
   */

  adjustableHandlerProps?: ViewProps;

  /**
   * Determine the position of asterisk icon for the required prop
   * */

  asteriskPosition?: 'before' | 'after';

  innerRef?: React.ForwardedRef<NativeTextInput>;
};
