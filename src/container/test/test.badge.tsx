import * as React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-centerm-sdk';
import { Badge } from 'teaset';

interface Props { }

export default class TestBadge extends React.Component<Props> {
  static navigationOptions = () => {
    return {
      headerTitle: '角标'
    };
  }
  public render() {
    return (
      <View style={{flex: 1}}>
        <ListItem 
          title="capsule" 
          bottomBorder={true}
          detailTitle={(
            <View style={{flexDirection: 'row'}}>
              <Badge count={6} />
              <View style={{width: 4}} />
              <Badge count={68} />
              <View style={{width: 4}} />
              <Badge count={689} />
              <View style={{width: 4}} />
              <Badge count='new' />
            </View>
          )} 
        />
        <ListItem 
          title="square"
          bottomBorder={true} 
          detailTitle={(
            <View style={{flexDirection: 'row'}}>
              <Badge type='square' count={6} />
              <View style={{width: 4}} />
              <Badge type='square' count={68} />
              <View style={{width: 4}} />
              <Badge type='square' count={689} />
              <View style={{width: 4}} />
              <Badge type='square' count='new' />
            </View>
          )} 
        />
        <ListItem 
          title="dot" 
          bottomBorder={true}
          detailTitle={(
            <View style={{flexDirection: 'row'}}>
              <Badge style={{backgroundColor: '#5bc0de'}} type='square' count='券' />
              <View style={{width: 4}} />
              <Badge style={{backgroundColor: '#777', paddingLeft: 0, paddingRight: 0}}>
                <Text style={{color: '#fff'}}>$</Text>
              </Badge>
            </View>
          )} 
        />
      </View>
    );
  }
}
