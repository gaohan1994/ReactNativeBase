import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-centerm-sdk';
import { ContainerNavigation } from '../../type/navigation/navigation.build.param';

interface Props extends ContainerNavigation {}

export default class TestMain extends React.Component<Props> {

  static navigationOptions = () => {
    return { headerLeft: null, headerTitle: '测试主页' };
  }

  public render() {
    const commonListItemProps: any = {
      icon: { uri: 'http://net.huanmusic.com/react.png' },
      bottomBorder: true
    };
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <ListItem
            {...commonListItemProps}
            title="CentermSdk" 
            detailSubTitle="Design by Ghan Centerm Componens"
            onPress={() => this.props.navigation.navigate({routeName: 'CentermSdk'})} 
          />
          <ListItem
            {...commonListItemProps}
            title="TestDeviceInfo" 
            detailSubTitle="查看设备信息"
            onPress={() => this.props.navigation.navigate({routeName: 'TestDeviceInfo'})} 
          />
          <ListItem
            {...commonListItemProps}
            title="Web" 
            detailSubTitle="webview"
            onPress={() => this.props.navigation.navigate({routeName: 'TestWeb'})} 
          />
          <ListItem
            {...commonListItemProps}
            title="TestDatePicker" 
            detailSubTitle="时间选择器"
            onPress={() => this.props.navigation.navigate({routeName: 'TestDatePicker'})} 
          />
          <ListItem
            {...commonListItemProps}
            title="TestImageViewer" 
            detailSubTitle="大图查看"
            onPress={() => this.props.navigation.navigate({routeName: 'TestImageViewer'})} 
          />
          <ListItem
            {...commonListItemProps}
            title="TestImagePicker" 
            detailSubTitle="调用相册和摄像头"
            onPress={() => this.props.navigation.navigate({routeName: 'TestImagePicker'})} 
          />
          <ListItem
            {...commonListItemProps}
            title="TestQRCode" 
            detailSubTitle="二维码组件"
            onPress={() => this.props.navigation.navigate({routeName: 'TestQRCode'})} 
          />
          
        </ScrollView>
      </View>
    );
  }
}
