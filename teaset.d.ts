import * as React from 'react';
import { TouchableOpacityProps, View, ViewProperties, TextStyle, ViewProps, ViewStyle } from 'react-native';
import { any } from 'prop-types';

declare namespace Theme {
  function set (param: any): void;
}

export interface ButtonProps extends TouchableOpacityProps {
  type?: 'default' | 'primary' | 'secondary' | 'danger' | 'link';
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  title?: string | number | React.ReactNode | JSX.Element;
  titleStyle?: any;
}
/**
 * @param {Button}
 */
declare class Button extends React.Component<ButtonProps, {}> { }

/**
 * @param {Overlay}
 */
export interface OverlayPullViewProps extends OverlayViewProps {
  side?: any;
  containerStyle?: any;
  rootTransform?: any;
}

export class OverlayPullView extends React.Component<OverlayPullViewProps, {}> { }

export interface OverlayViewProps {
  style?: any;
  modal?: any;
  animated?: any;
  overlayOpacity?: any;
  overlayPointerEvents?: any;
  autoKeyboardInsets?: any;
  onAppearCompleted?: any;
  onDisappearCompleted?: any;
  onCloseRequest?: any;
}

export class OverlayView extends React.Component<any, any> { }

declare class Overlay extends View {
  static hide: (key: any) => void;
  static show: (params1?: any, params2?: any, params3?: any) => void;
  static View: typeof OverlayView;
  static PullView: typeof OverlayPullView;
  static PopView: typeof OverlayView;
}

/**
 * @param {Action}
 */
export class ActionSheetView extends OverlayPullView { 
  items: any;
  cancelItem: any;
}

declare class ActionSheet extends Overlay implements Overlay {
  static ActionSheetView: typeof ActionSheetView;
  
  static show: (
    items: any,
    cancelItem: any,
    options?: any,
  ) => void;
}

export interface SelectProps extends TouchableOpacityProps {
  size?: string;
  value: any;
  valueStyle?: any;
  items: any[];
  getItemValue?: any;
  getItemText?: any;
  pickerType?: string;
  pickerTitle?: string;
  editable?: boolean;
  icon?: string;
  iconTintColor?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  onSelected?: (params?: any, options?: any) => void;
}

declare class Select extends React.Component<SelectProps, {}> {

}

export type ToastDuration = 'short' | 'long';

export interface ToastFunctionInterface {
  text: string;
  duration?: ToastDuration;
  position?: ToastPosition;
}

export type ToastPosition = 'center';


export class ToastView extends View {

}

export class Toast extends Overlay {
  static message: (text: string, duration?: ToastDuration, position?: ToastPosition) => void;
  static success: (text: string, duration?: ToastDuration, position?: ToastPosition) => void;
  static fail: (text: string, duration?: ToastDuration, position?: ToastPosition) => void;
  static smile: (text: string, duration?: ToastDuration, position?: ToastPosition) => void;
  static sad: (text: string, duration?: ToastDuration, position?: ToastPosition) => void;
  static info: (text: string, duration?: ToastDuration, position?: ToastPosition) => void;
  static stop: (text: string, duration?: ToastDuration, position?: ToastPosition) => void;

  static ToastView: ToastView;
  static defaultDuration: ToastDuration;
  static defaultPosition: ToastPosition;
  static messageDefaultDuration: ToastDuration;
  static messageDefaultPosition: ToastPosition;
}

export class TopView extends React.Component { }

interface BadgePropsI {
  type?: 'capsule' | 'square' | 'dot';
  count?: string | number;
  countStyle?: TextStyle;
  maxCount?: number;
}

type BadgeProps = BadgePropsI & ViewProperties;

export class Badge extends React.Component<BadgeProps, any> { }

export class ModalIndicator extends Overlay {
  static show: (text: string) => void;
  static hide: () => void;
}

type ListRowProps = {
  title?: any;
  detail?: any;
  titleStyle?: any;
  detailStyle?: any;
  detailMultiLine?: any;
  icon?: any;
  accessory?: any;
  topSeparator?: any;
  bottomSeparator?: any;
  titlePlace?: any;
  swipeActions?: any;
  activeOpacity?: any;
} & TouchableOpacityProps

export type SwipeActionButtonProps = {
  type: any;
  title: any;
  titleStyle?: any;
} & TouchableOpacityProps;

export class SwipeActionButton extends React.Component<SwipeActionButtonProps, any> {}

export class ListRow extends React.Component<ListRowProps, any> {
  static SwipeActionButton: typeof SwipeActionButton;
} 

export type CheckboxProps = {
  checked: any;
  defaultChecked?: any;
  size?: any;
  title:	any;
  titleStyle?: any;
  checkedIcon?: any;
  checkedIconStyle?: any;
  uncheckedIcon?: any;
  uncheckedIconStyle?: any;
  disabled?: any;
  hitSlo?: any;
  onChange: (checked: boolean) => void;
} & TouchableOpacityProps;
export class Checkbox extends React.Component<CheckboxProps, any> {

}

export interface StepperProps extends ViewProps {
  defaultValue?: number;
  value?: number;
  step?: number;
  max?: number;
  min?: number;
  valueStyle?:	TextStyle;
  valueFormat?: (params: any) => any;
  subButton?: any;
  addButton?: any;
  showSeparator?: boolean;
  disabled?:	boolean;
  editable?: boolean;
}

export class Stepper extends React.Component<StepperProps> { }

export interface PullPickerProps {
  
}

export class PullPicker extends React.Component<PullPickerProps> { 
  static show: (params1: any, params2: any, params3: any, params4: any, params5?: any) => any;
}

interface WheelProps extends ViewProps {
  items: any[];
  itemStyle?: TextStyle;
  holeStyle?: ViewStyle;
  maskStyle?: ViewStyle;
  holeLine?: any;
  index?: number;
  defaultIndex?: number;
  onChange?: (params?: any) => void;
}

export class Wheel extends React.Component <WheelProps> {}

export interface ActionPopoverProps {

}
export class ActionPopover extends React.Component<ActionPopoverProps> {
  static show: (params1: any, params2: any, params3?: any) => any;
}

export { 
  Button,
  Overlay,
  ActionSheet,
  Theme,
  Select,
};