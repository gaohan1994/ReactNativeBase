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

const TestContainer = createAppContainer(StackNavigator);

export default TestContainer;