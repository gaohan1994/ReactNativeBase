import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { ListItem, ListItemSwipeButton, Button } from 'react-native-centerm-sdk';

export default class CentermSdk extends React.Component {

  static navigationOptions = () => {
    return {
      headerTitle: 'CentermSdk'
    };
  }

  public render() {
    const commonListItemProps: any = {
      bottomBorder: true,
      icon: {uri: 'http://net.huanmusic.com/react.png'}
    };
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Button title="hello world" />
            <Button title="hello world" type="ghost" />
          </View>

          <ListItem
            {...commonListItemProps}
            title={'ReactNativeCentermSdk'}
          />
          <ListItem
            {...commonListItemProps}
            title={'React Native'}
            subTitle="React Native使你只使用JavaScript也能编写原生移动应用。 它在设计原理上和React一致，通过声明式的组件机制来搭建丰富多彩的用户界面。"
          />
          <ListItem
            {...commonListItemProps}
            title={'Gao Han'}
            subTitle={'Front End Developer'}
          />
          <ListItem
            {...commonListItemProps}
            title={'Hello world'}
            subTitle={'React Native'}
            detailTitle={'Label'}
            detailSubTitle={'14:41'}
          />
          <ListItem
            {...commonListItemProps}
            title={'ListItem Uasge'}
            detailTitle={'SwipeButton'}
            detailSubTitle={'Uasge'}
            swipeButtons={[
              <ListItemSwipeButton onPress={() => { console.log('cancel'); }} title="cancel" type="cancel" key="cancel" />,
              <ListItemSwipeButton onPress={() => { console.log('info'); }} title="info" type="info" key="info" />,
              <ListItemSwipeButton onPress={() => { console.log('delete'); }} title="delete" type="delete" key="delete" />,
            ]}
          />
        </ScrollView>
      </View>
    );
  }
}
