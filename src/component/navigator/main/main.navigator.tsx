/*
 * @Author: Ghan 
 * @Date: 2019-10-28 13:41:17 
 * @Last Modified by: Ghan
 * @Last Modified time: 2019-10-28 13:46:11
 */

import * as React from 'react';
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import TabNavigator from '../tab/tab.navigator';
import { NavigationContainerProps } from 'react-navigation';

const SwitchContainer = createSwitchNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
      path: "TabNavigator"
    }
  },
  {
    initialRouteName: 'TabNavigator'
  }
);
const SwitchNavigator = createAppContainer(SwitchContainer);

interface Props extends NavigationContainerProps {

}

class MainNavigator extends React.Component<Props> {
  public render() {
    const { ...rest } = this.props;
    return (
      <View style={{flex: 1}}>
        <SwitchNavigator {...rest} />
      </View>
    );
  }
}

export default MainNavigator;