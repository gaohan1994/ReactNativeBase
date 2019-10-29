/**
 * @Author: Ghan 
 * @Date: 2019-10-29 10:37:05 
 * @Last Modified by: Ghan
 * @Last Modified time: 2019-10-29 10:42:23
 * 
 * @todo [阴影组件，宽度由父组件决定，高度由子组件决定]
 */
import * as React from 'react';
import { Platform, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import CardView from 'react-native-cardview';

interface Props { 
  cardElevation: number;        // 阴影深度
  cornerRadius: number;         // 圆角曲度
  cardMaxElevation?: number;
  useCompatPadding?: number;
  cornerOverlap?: any;
  style?: StyleProp<ViewStyle>; // 样式
}

export default class ShadowCard extends React.Component<Props> {

  static defaultProps = Platform.select({
    android: {
      cardElevation: 2,
      cardMaxElevation: 2,
      cornerRadius: 5,
    },
    ios: {
      cardElevation: 3,
      cornerRadius: 5,
    }
  });

  public render() {
    const { style, children, ...rest } = this.props;
    return (
      <CardView {...rest} style={StyleSheet.flatten([{backgroundColor: '#ffffff'}, style])} >
        {children}
      </CardView>
    );
  }
}
