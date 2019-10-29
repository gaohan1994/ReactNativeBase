import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ScreenUtil } from 'react-native-centerm-sdk';

interface Props { }

export default class TestDp extends React.Component<Props> {
  static navigationOptions = () => {
    return { headerTitle: "屏幕像素比" };
  }
  public render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={styles.card}>
          <Text style={styles.text}>未使用适配工具</Text>
        </View>
        <View style={styles.utilCard}>
          <Text style={styles.utilText}>使用适配工具</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9DD6EB'
  },
  utilCard: {
    marginTop: 10,
    width: ScreenUtil.autoWidth(200),
    height: ScreenUtil.autoWidth(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#97CAE5',
  },
  text: {
    color: '#ffffff',
    fontSize: 16
  },
  utilText: {
    color: '#ffffff',
    fontSize: ScreenUtil.setSpText(16)
  }
});