/*
 * @Author: Ghan 
 * @Date: 2019-10-28 16:19:29 
 * @Last Modified by: Ghan
 * @Last Modified time: 2019-10-28 16:36:01
 */
import TestMain from '../../container/test/test.main';
import HomeMain from '../../container/home/home.main';

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
  Test: {
    screen: TestMain,
    path: "Test"
  },
  Home: {
    screen: HomeMain,
    path: "Home"
  }
};