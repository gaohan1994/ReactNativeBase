import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ScreenUtil } from 'react-native-centerm-sdk';
import ShadowCard from '../../component/shadow/shadow.card';

export interface Props { }

export default class TestShadowCard extends React.Component<Props> {

  static navigationOptions = () => {
    return { headerTitle: 'RN阴影组件' };
  }

  public render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <ShadowCard style={{width: ScreenUtil.autoWidth(300), marginTop: ScreenUtil.autoWidth(20)}}>
          <View style={styles.card}>
            <Text>shadowCard</Text>
          </View>
        </ShadowCard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: ScreenUtil.autoWidth(300),
    height: ScreenUtil.autoWidth(50),
    alignItems: 'center',
    justifyContent: 'center'
  }
});