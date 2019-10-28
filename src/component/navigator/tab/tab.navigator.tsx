/*
 * @Author: Ghan 
 * @Date: 2019-10-28 13:47:09 
 * @Last Modified by: Ghan
 * @Last Modified time: 2019-10-28 13:47:53
 */
import * as React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { createTabNavigator } from '../../../common/navigation/navigation.build';
import tabNavigatorConfigMap from './tab.navigator.map';
import { createAppContainer } from 'react-navigation';

/**
 * @param {BottomTabNavigator} 根据tabNavigatorConfigMap生成的底部tab导航器
 * @param {TabNavigatorContainer} tab页的container
 */
const BottomTabNavigator = createTabNavigator(tabNavigatorConfigMap);
const TabNavigatorContainer = createAppContainer(BottomTabNavigator);

interface Props extends ViewProps { 

}

export default class TabNavigator extends React.Component<Props> {
  public render() {
    const { style, ...rest } = this.props;
    return (
      <View {...rest} style={StyleSheet.flatten([{flex: 1}, style])}>
        <TabNavigatorContainer />
      </View>
    );
  }
}
