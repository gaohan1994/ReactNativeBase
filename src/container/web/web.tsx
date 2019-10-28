import * as React from 'react';
import { View, Text } from 'react-native';
import WebView from 'react-native-webview';
import { ContainerNavigation } from '../../type/navigation/navigation.build.param';

interface Props extends ContainerNavigation {}

class Web extends React.Component<Props> {

  static navigationOptions = ({navigation}: any) => {
    return {
      headerTitle: navigation.getParam("title") || ''
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const url: string = navigation.getParam('url');
    if (!url) {
      console.error(`
        请传入要显示页面的地址链接url!
      `);
    }

    if (url.indexOf('http') === -1) {
      console.error(`
        请传入正确的网页地址链接！
      `);
    }
  }

  public render() {

    return (
      <View style={{flex: 1}}>
        <WebView 
          style={{flex: 1}}
          source={{uri: this.props.navigation.getParam('url')}}
          mixedContentMode={"always"}
          allowsInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction={false}
          javaScriptEnabled={true}
          allowsFullscreenVideo={true}
        />
      </View>
    );
  }
}

export default Web;