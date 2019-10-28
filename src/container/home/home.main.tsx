import * as React from 'react';
import { View, Text } from 'react-native';

interface Props {}

export default class HomeMain extends React.Component<Props> {
  public render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home</Text>
      </View>
    );
  }
}
