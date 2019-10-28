/*
 * @Author: Ghan 
 * @Date: 2019-10-28 16:19:29 
 * @Last Modified by: Ghan
 * @Last Modified time: 2019-10-28 16:43:29
 */
import TestMain from '../../container/test/test.main';
import HomeMain from '../../container/home/home.main';
import CentermSdk from '../../container/test/test.centerm.sdk';

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
  /**
   * @param {Home} 主页
   */
  Home: {
    screen: HomeMain,
    path: "Home"
  }
};