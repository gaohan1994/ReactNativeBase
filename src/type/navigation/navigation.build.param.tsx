
import { NavigationScreenConfig } from 'react-navigation';

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