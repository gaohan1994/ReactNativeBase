import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { NavigationScreenConfigProps, createBottomTabNavigator, NavigationContainer, TabBarIconProps, NavigationScreenConfig } from 'react-navigation';
import { TabNavigatorConfigMap, TabNavigatorConfig } from '../../type/navigation/navigation.build.param';
import { ScreenUtil } from 'react-native-centerm-sdk';
import UIImage from '../image/ui.image';

export function defaultNavigationOptions (): NavigationScreenConfig<any> {
  return ({navigation}: any) => {
    return {
      headerTitle: '',
      headerRight: '',
      headerLeft: (
        <TouchableOpacity 
          onPress={() => navigation.pop()} 
          style={{paddingHorizontal: ScreenUtil.autoWidth(18), paddingVertical: ScreenUtil.autoWidth(30)}}
        >
          <Image source={UIImage.back_gray} style={{width: ScreenUtil.autoWidth(21), height: ScreenUtil.autoWidth(21)}} />
        </TouchableOpacity>
      ),
      headerForceInset: {
        top: 'always'
      },
    };
  };
}

function createTabNavigator (navigationMap: TabNavigatorConfigMap): NavigationContainer {
  
  return createBottomTabNavigator(
    navigationMap,
    {
      defaultNavigationOptions: (params: NavigationScreenConfigProps) => {
        return {
          tabBarIcon: ({ focused }: TabBarIconProps) => {
            const { navigation } = params;
            const currentRoute: TabNavigatorConfig = navigationMap[`${navigation.state.routeName}`];
            if (currentRoute && currentRoute.screen) {
              return (
                <View>
                  <Image 
                    source={focused === true ? currentRoute.focusedImage : currentRoute.unfocusedImage} 
                    style={{width: ScreenUtil.autoWidth(20), height: ScreenUtil.autoWidth(20)}}
                  />
                </View>
              );
            } else {
              console.error('请传入正确的路由配置');
              return null;
            }
          }
        };
      },
      tabBarOptions: {
        activeTintColor: "#df394d",
        inactiveTintColor: 'gray'
      }
    },
  );
}

export {
  createTabNavigator
};