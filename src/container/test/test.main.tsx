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
        <ScrollView 
          style={{flex: 1}}
          contentContainerStyle={{paddingBottom: 20}}
        >
          <ListItem
            {...commonListItemProps}
            title="TestInternation" 
            detailSubTitle="多语言"
            onPress={() => this.props.navigation.navigate({routeName: 'TestInternation'})} 
          />
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
          <ListItem
            {...commonListItemProps}
            title="TestPDF" 
            detailSubTitle="查看PDF组件"
            onPress={() => this.props.navigation.navigate({routeName: 'TestPDF'})} 
          />
          <ListItem
            {...commonListItemProps}
            title="TestSwiper" 
            detailSubTitle="滑动swiper"
            onPress={() => this.props.navigation.navigate({routeName: 'TestSwiper'})} 
          />
          <ListItem
            {...commonListItemProps}
            title="TestShadowCard" 
            detailSubTitle="阴影组件"
            onPress={() => this.props.navigation.navigate({routeName: 'TestShadowCard'})} 
          />
          <ListItem
            {...commonListItemProps}
            title="TestSlider" 
            detailSubTitle="可拖动的进度条"
            onPress={() => this.props.navigation.navigate({routeName: 'TestSlider'})} 
          />
          <ListItem
            {...commonListItemProps}
            title="TestToast" 
            detailSubTitle="Toast"
            onPress={() => this.props.navigation.navigate({routeName: 'TestToast'})} 
          />
          <ListItem
            {...commonListItemProps}
            title="TestTabs" 
            detailSubTitle="Tabs组件"
            onPress={() => this.props.navigation.navigate({routeName: 'TestTabs'})} 
          />
          <ListItem
            {...commonListItemProps}
            title="TestStepper" 
            detailSubTitle="Stepper组件"
            onPress={() => this.props.navigation.navigate({routeName: 'TestStepper'})} 
          />
          <ListItem
            {...commonListItemProps}
            title="TestPullPikcer" 
            detailSubTitle="PullPicker组件"
            onPress={() => this.props.navigation.navigate({routeName: 'TestPullPikcer'})} 
          />
          <ListItem
            {...commonListItemProps}
            title="TestWheel" 
            detailSubTitle="Wheel滚轮组件"
            onPress={() => this.props.navigation.navigate({routeName: 'TestWheel'})} 
          />
          <ListItem
            {...commonListItemProps}
            title="TestDp" 
            detailSubTitle="屏幕像素比"
            onPress={() => this.props.navigation.navigate({routeName: 'TestDp'})} 
          />
          <ListItem
            {...commonListItemProps}
            title="TestBadge" 
            detailSubTitle="小角标"
            onPress={() => this.props.navigation.navigate({routeName: 'TestBadge'})} 
          />
          <ListItem
            {...commonListItemProps}
            title="TestActionPopover" 
            detailSubTitle="ActionPopover组件"
            onPress={() => this.props.navigation.navigate({routeName: 'TestActionPopover'})} 
          />
          
        </ScrollView>
      </View>
    );
  }
}
