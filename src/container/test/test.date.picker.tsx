import * as React from 'react';
import { View } from 'react-native';
import DatePickerComponent from '../../component/picker/date.picker';

export interface Props {}

export default class TestDatePicker extends React.Component<Props> {
  public render() {
    return (
      <View style={{flex: 1}}>
        <DatePickerComponent/>
      </View>
    );
  }
}
