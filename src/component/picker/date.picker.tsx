import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import zh_CN from 'rmc-date-picker/lib/locale/zh_CN';
import DatePicker from "rmc-date-picker";
import PopPicker from 'rmc-date-picker/lib/Popup';
import PopupStyles from "rmc-picker/lib/PopupStyles";
import { ScreenUtil } from 'react-native-centerm-sdk';

interface Props {
  onSelect?: (date: any) => any;
}
interface State {
  date: any;
}

export default class DatePickerComponent extends React.Component<Props> {
  state = {
    date: null
  };

  public dateFormat = (date: any) => {
    let mday = date.getDate();
    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    mday = mday < 10 ? `0${mday}` : mday;
    return `${date.getFullYear()}年${month}月${mday}日`;
  }

  public onChoose = (date: any) => {
    this.setState({date});
    if (this.props.onSelect) {
      this.props.onSelect(date);
    }
  }

  public render() {
    let toDay = new Date();
    const datePicker = (
      <DatePicker
        rootNativeProps={{'data-xx': 'yy'}}
        minDate={new Date(2019, 9, 1, 10, 30, 0)}
        maxDate={new Date(toDay.getFullYear() + 3, 11, 31)}
        defaultDate={new Date()}
        mode={'date'}
        locale={zh_CN}
      />
    );
    return (
      <View 
        style={{
          margin: ScreenUtil.autoWidth(10),
          borderWidth: StyleSheet.hairlineWidth,
          height: ScreenUtil.autoWidth(42),
          borderRadius: ScreenUtil.autoWidth(21),
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <PopPicker 
          datePicker={datePicker} 
          styles={PopupStyles} 
          title="请选择日期" 
          date={this.state.date} 
          onChange={this.onChoose} 
          okText={"确定"} 
          dismissText={"取消"}
        >
          <Text style={{paddingHorizontal: ScreenUtil.autoWidth(10)}}>
            {this.state.date ? this.dateFormat(this.state.date) : "选择日期"}
          </Text>
        </PopPicker>
      </View>
    );
  }
}
