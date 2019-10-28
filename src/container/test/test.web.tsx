import * as React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button, ScreenUtil } from 'react-native-centerm-sdk';
import LinearGradient from 'react-native-linear-gradient';
import { ContainerNavigation } from '../../type/navigation/navigation.build.param';

interface Props extends ContainerNavigation {}
interface State {
  url: string;
}

export default class TestWeb extends React.Component<Props, State> {
  state = {
    url: 'http://www.baidu.com'
  };
  static navigationOptions = () => {
    return { 
      headerTitle: 'webview'
    };
  }

  public changeUrl = (value: string) => {
    this.setState({ url: value });
  }

  public render() {
    const buttonLinearProps = {
      ViewComponent: LinearGradient,
      linearGradientProps: {
        colors: ['#F05065', '#FDA75C'],
        start: {x: 0, y: 0},
        end: {x: 1, y: 0}
      }
    };
    return (
      <View style={{flex: 1, alignItems: 'center' }}>
        <View 
          style={{
            padding: 12, 
            height: 50, 
            width: ScreenUtil.autoWidth(ScreenUtil.uiWidth), 
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop: ScreenUtil.autoWidth(20),
          }}
        >
          <TextInput
            value={this.state.url}
            style={{flex: 1, }}
            onChangeText={this.changeUrl}
            placeholder="https://xxx or http://xxx"
          />
        </View>
        
        <Button
          {...buttonLinearProps}
          activeOpacity={0.8}
          title="打开"
          style={{marginTop: ScreenUtil.autoWidth(10)}}
          onPress={() => { this.props.navigation.navigate({routeName: 'Web', params: {url: this.state.url}}); }}
        />
      </View>
    );
  }
}
