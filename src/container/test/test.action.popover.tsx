/*
 * @Author: Ghan 
 * @Date: 2019-10-29 13:56:11 
 * @Last Modified by:   Ghan 
 * @Last Modified time: 2019-10-29 13:56:11 
 */
import * as React from 'react';
import { View } from 'react-native';
import { ActionPopover } from 'teaset';
import { Button } from 'react-native-centerm-sdk';
import LinearGradient from 'react-native-linear-gradient';

interface Props { }

export default class TestActionPopover extends React.Component<Props> {

  private button: any;

  public show = (view: any) => {
    view.measure((x: any, y: any, width: any, height: any, pageX: any, pageY: any): any => {
      let items = [
        {title: '复制', onPress: () => alert('复制')},
        {title: '粘贴', onPress: () => alert('粘贴')},
        {title: '分享', onPress: () => alert('分享')},
      ];
      ActionPopover.show({x: pageX, y: pageY, width, height}, items);
    });
  }

  public render() {
    const buttonLinearProps = {
      ViewComponent: LinearGradient,
      linearGradientProps: {
        colors: ['#F05065', '#FDA75C'],
        start: {x: 0, y: 0},
        end: {x: 1, y: 0}
      }
    };
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View ref={ref => this.button = ref}>
          <Button 
            {...buttonLinearProps}
            title="show"
            size="small"
            radius={false}
            onPress={() => this.show(this.button)}
          />
        </View>
      </View>
    );
  }
}
