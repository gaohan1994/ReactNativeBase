import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-centerm-sdk';
import { PullPicker } from 'teaset';
import LinearGradient from 'react-native-linear-gradient';

export interface Props { }

export default class TestPullPikcer extends React.Component<Props> {
  
  private items: any[] = [
    'Aged Pu\'er',
    'Bohea',
    'Chrysanthemum',
    'Hyson',
    'Jasmine',
    'Keemun',
    'Loungjing',
    'Pekoe',
    'Tieguanyin',
  ];

  public showDefault = () => {
    PullPicker.show(
      'Select item',
      this.items,
      null,
      null
    );
  }

  public showModal = () => {
    PullPicker.show(
      'Select item',
      this.items,
      null,
      null,
      {modal: true}
    );
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
      <View style={{flex: 1}}>
        <ScrollView 
          style={{flex: 1}}
          contentContainerStyle={{alignItems: 'center'}}
        >
          <View style={{height: 20}} />
          <Button {...buttonLinearProps} title="default" onPress={() => this.showDefault()} />
          <Button {...buttonLinearProps} title="modal" onPress={() => this.showModal()} />
        </ScrollView>
      </View>
    );
  }
}
