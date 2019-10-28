import * as React from 'react';

declare module "react-native-qrcode" {
  export interface QRcodeProps {
    value: string;
    size?: number;
    bgColor?: string;
    fgColor?: string;
    style?: any;
  }

  export default class QRcode extends React.Component<QRcodeProps, {}> {}
}