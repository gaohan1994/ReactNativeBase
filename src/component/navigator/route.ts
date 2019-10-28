/*
 * @Author: Ghan 
 * @Date: 2019-10-28 16:19:29 
 * @Last Modified by: Ghan
 * @Last Modified time: 2019-10-28 19:46:59
 */
import TestMain from '../../container/test/test.main';
import HomeMain from '../../container/home/home.main';
import CentermSdk from '../../container/test/test.centerm.sdk';
import TestDeviceInfo from '../../container/test/test.device.info';
import Web from '../../container/web/web';
import TestWeb from '../../container/test/test.web';
import TestDatePicker from '../../container/test/test.date.picker';
import TestImageViewer from '../../container/test/test.image.viewer';
import TestImagePicker from '../../container/test/test.image.picker';
import TestQRCode from '../../container/test/test.qrcode';

export const StackRouteKeyMap = {
  test: {
    containerName: 'testContainer',
    initialRouteName: 'Test'
  },
  home: {
    containerName: 'homeContainer',
    initialRouteName: 'Home'
  }
};

export const routeMap = {
  /**
   * @param {Test} 测试页面
   */
  Test: {
    screen: TestMain,
    path: "Test"
  },
  CentermSdk: {
    screen: CentermSdk,
    path: "CentermSdk",
  },
  TestDeviceInfo: {
    screen: TestDeviceInfo,
    path: "TestDeviceInfo"
  },
  TestWeb: {
    screen: TestWeb,
    path: "TestWeb"
  },
  TestDatePicker: {
    screen: TestDatePicker,
    path: "TestDatePicker"
  },
  TestImageViewer: {
    screen: TestImageViewer,
    path: "TestImageViewer"
  },
  TestImagePicker: {
    screen: TestImagePicker,
    path: "TestImagePicker"
  },
  TestQRCode: {
    screen: TestQRCode,
    path: "TestQRCode"
  },
  /**
   * @param {Home} 主页
   */
  Home: {
    screen: HomeMain,
    path: "Home"
  },
  Web: {
    screen: Web,
    path: "Web/:url/:title"
  },
};