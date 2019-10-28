import * as React from 'react';
import { View } from 'react-native';
import QRcode from 'react-native-qrcode';

interface Props {}

export default class TestQRCode extends React.Component<Props> {
  public render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <QRcode value="testQrCode" />
      </View>
    );
  }
}
