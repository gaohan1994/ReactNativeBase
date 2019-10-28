/*
 * @Author: Ghan 
 * @Date: 2019-10-28 16:45:17 
 * @Last Modified by: Ghan
 * @Last Modified time: 2019-10-28 16:46:09
 */

import { NavigationScreenConfig, NavigationScreenProp } from 'react-navigation';

export type NavigatorConfigBase = {
  focusedImage?: any;
  unfocusedImage?: any;
  navigationOptions?: NavigationScreenConfig<any>;
  path?: string;
  screen: any;
};

export interface NavigatorConfig extends NavigatorConfigBase {

}

export type NavigatorConfigMap = {
  [routeName: string]: NavigatorConfig
};

export type TabNavigatorConfig = NavigatorConfig;

export type TabNavigatorConfigMap = {
  [routeName: string]: TabNavigatorConfig;
};

export type ContainerNavigation = {
  navigation: NavigationScreenProp<any>;
};