import * as React from 'react';
import { View, Text } from 'react-native';

export interface Props {}

export default class TestMain extends React.Component<Props> {

  static navigationOptions = () => {
    return { headerLeft: null, headerTitle: '测试主页' };
  }

  public render() {
    return (
      <View style={{flex: 1}}>
        <Text> text </Text>
      </View>
    );
  }
}
