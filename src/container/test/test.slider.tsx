import * as React from 'react';
import { View } from 'react-native';
import Slider from '@react-native-community/slider';

interface Props {}
export default class TestSlider extends React.Component<Props> {

  static navigationOptions = () => {
    return { headerTitle: '滑动选择器' };
  }

  public render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />

      </View>
    );
  }
}
