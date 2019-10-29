/*
 * @Author: Ghan 
 * @Date: 2019-10-29 12:44:20 
 * @Last Modified by: Ghan
 * @Last Modified time: 2019-10-29 12:44:47
 */
import * as React from 'react';
import { View } from 'react-native';
import { Wheel } from 'teaset';

interface Props {}
interface State { 
  date: any;
}

export default class TestWheel extends React.Component<Props, State> {
  private years: any[];
  private months: any[];
  private daysCount: any[];

  static navigationOptions = () => ({
    headerTitle: '滚轮组件'
  })

  constructor(props: Props) {
    super(props);
    this.years = [];
    for (let i = 1970; i <= 2100; ++i) {
      this.years.push(i)
    }
    this.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.daysCount = [
      [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    ];
    this.state = {
      date: new Date(),
    };
  }

  isLeapYear(year: any) {
    return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
  }

  onDateChange(year: any, month: any, day: any) {
    let {date} = this.state;
    date.setFullYear(year);

    let daysCount = this.daysCount[this.isLeapYear(year) ? 1 : 0][month];
    if (day > daysCount) {
      day = daysCount;
      date.setDate(day);
      date.setMonth(month);
    } else {
      date.setMonth(month);
      date.setDate(day);      
    }
    this.setState({date});
  }

  public render() {
    let {date} = this.state;
    let year = date.getFullYear(), month = date.getMonth(), day = date.getDate();
    let daysCount = this.daysCount[this.isLeapYear(year) ? 1 : 0][month];
    let days: any[] = [];
    for (let i = 1; i <= daysCount; ++i) {
      days.push(i);
    }
    return (
      <View style={{flex: 1}}>
        <View style={{padding: 20, flexDirection: 'row', justifyContent: 'center'}}>
          <Wheel
            style={{height: 200, width: 80}}
            itemStyle={{textAlign: 'center'}}
            items={this.years}
            index={this.years.indexOf(year)}
            onChange={index => this.onDateChange(this.years[index], month, day)}
          />
          <Wheel
            style={{height: 200, width: 80}}
            itemStyle={{textAlign: 'center'}}
            items={this.months}
            index={this.months.indexOf(month + 1)}
            onChange={index => this.onDateChange(year, this.months[index] - 1, day)}
          />
          <Wheel
            style={{height: 200, width: 80}}
            itemStyle={{textAlign: 'center'}}
            items={days}
            index={days.indexOf(day)}
            onChange={index => this.onDateChange(year, month, days[index])}
          />
        </View>
      </View>
    );
  }
}
