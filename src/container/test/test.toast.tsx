/*
 * @Author: Ghan 
 * @Date: 2019-10-29 11:36:32 
 * @Last Modified by:   Ghan 
 * @Last Modified time: 2019-10-29 11:36:32 
 */
import * as React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-centerm-sdk';
import { Toast } from 'teaset';

interface Props {}

export default class TestToast extends React.Component<Props> {

  public modalToast = () => {
    Toast.show({
      text: 'Toast Messages',
      icon: <ActivityIndicator size='large' />,
      position: 'center',
      duration: 5000,
      overlayOpacity: 0.4,
      modal: true,
    });
  }
  
  public render() {
    const commonListItemProps: any = {
      icon: { uri: 'http://net.huanmusic.com/react.png' },
      topBorder: true
    };
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={{height: 20}} />
          <ListItem {...commonListItemProps} title="Message" onPress={() => Toast.message('Toast Message')} />
          <ListItem {...commonListItemProps} title="Success" onPress={() => Toast.success('Toast Message')} />
          <ListItem {...commonListItemProps} title="Fail" onPress={() => Toast.fail('Toast Message')} />
          <ListItem {...commonListItemProps} title="Smile" onPress={() => Toast.smile('Toast Message')} />
          <ListItem {...commonListItemProps} title="Sad" onPress={() => Toast.sad('Toast Message')} />
          <ListItem {...commonListItemProps} title="Info" onPress={() => Toast.info('Toast Message')} />
          <ListItem {...commonListItemProps} title="Stop" onPress={() => Toast.stop('Toast Message')} />
          <ListItem {...commonListItemProps} title="Modal" onPress={() => this.modalToast()} />
        </ScrollView>
      </View>
    );
  }
}
