import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Swiper from 'react-native-swiper';

export interface Props { }

export default class TestSwiper extends React.Component<Props> {

  static navigationOptions = () => {
    return { headerTitle: "swiper" };
  }

  public render() {
    return (
      <View style={{flex: 1}}>
        <Swiper>
          <View style={[styles.card, {backgroundColor: '#9DD6EB'}]}>
            <Text style={styles.text}>swiper 1</Text>
          </View>
          <View style={[styles.card, {backgroundColor: '#97CAE5'}]}>
            <Text style={styles.text}>swiper 2</Text>
          </View>
          <View style={[styles.card, {backgroundColor: '#92BBD9'}]}>
            <Text style={styles.text}>swiper 3</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 16
  },
});