/*
 * @Author: Ghan 
 * @Date: 2019-10-28 16:53:25 
 * @Last Modified by: Ghan
 * @Last Modified time: 2019-10-28 16:54:06
 */
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { routeMap, StackRouteKeyMap } from '../../route';
import { defaultNavigationOptions } from '../../../../common/navigation/navigation.build';

export const StackNavigator = createStackNavigator(
  {...routeMap},
  {
    initialRouteName: StackRouteKeyMap.test.initialRouteName,
    defaultNavigationOptions: defaultNavigationOptions(),
  }
);

/**
 * @param {TestContainer} 测试页面群的主container
 * @param {tabBarVisible} 如果不是在测试主页面的话就隐藏底部tab栏
 */
const TestContainer = createAppContainer(StackNavigator);

TestContainer.navigationOptions = ({ navigation }: any) => {
  return {
    tabBarVisible: navigation.state.index > 0 ? false : true
  };
};

export default TestContainer;