/*
 * @Author: Ghan 
 * @Date: 2019-10-28 16:19:29 
 * @Last Modified by: Ghan
 * @Last Modified time: 2019-10-28 17:49:14
 */
import TestMain from '../../container/test/test.main';
import HomeMain from '../../container/home/home.main';
import CentermSdk from '../../container/test/test.centerm.sdk';
import TestDeviceInfo from '../../container/test/test.device.info';
import Web from '../../container/web/web';
import TestWeb from '../../container/test/test.web';

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