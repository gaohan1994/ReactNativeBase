/*
 * @Author: Ghan 
 * @Date: 2019-10-29 11:48:24 
 * @Last Modified by: Ghan
 * @Last Modified time: 2019-10-29 11:59:06
 */
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-centerm-sdk';
import { Stepper } from 'teaset';

interface Props {}

export default class TestStepper extends React.Component<Props> {
  public render() {
    const commonListItemProps: any = {
      icon: { uri: 'http://net.huanmusic.com/react.png' },
      bottomBorder: true
    };
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <ListItem {...commonListItemProps} title="Default" detailTitle={<Stepper />} />
          <ListItem {...commonListItemProps} title="Min & Max" detailTitle={<Stepper defaultValue={1} min={1} max={10} />} />
          <ListItem 
            {...commonListItemProps} 
            title="stpe"
            detailTitle={<Stepper defaultValue={0.8} valueFormat={v => (v * 100).toFixed(1) + '%'} step={0.005} valueStyle={{minWidth: 60}}  />} 
          />
          <ListItem {...commonListItemProps} title="Readonly" detailTitle={<Stepper editable={false} />} />
          <ListItem {...commonListItemProps} title="Disable" detailTitle={<Stepper disabled={true} />} />
        </ScrollView>
      </View>
    );
  }
}
