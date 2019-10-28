/*
 * @Author: Ghan 
 * @Date: 2019-10-28 17:18:59 
 * @Last Modified by: Ghan
 * @Last Modified time: 2019-10-28 17:30:07
 */

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { ListItem } from 'react-native-centerm-sdk';

interface Props {}

export default class TestDeviceInfo extends React.Component<Props> {

  static navigationOptions = () => {
    return {
      headerTitle: 'DeviceInfo'
    };
  }

  public render() {
    const commonListItemProps: any = {
      icon: { uri: 'http://net.huanmusic.com/react.png' },
      bottomBorder: true,
    };
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <ListItem {...commonListItemProps} title="getAPILevel" detailSubTitle={`${DeviceInfo.getAPILevel()}`} />
          <ListItem {...commonListItemProps} title="getApplicationName" detailSubTitle={`${DeviceInfo.getApplicationName()}`} />
          <ListItem {...commonListItemProps} title="getApplicationVersion" detailSubTitle={`${DeviceInfo.getVersion()}`} />
          <ListItem {...commonListItemProps} title="getBrand" detailSubTitle={`${DeviceInfo.getBrand()}`} />
          <ListItem {...commonListItemProps} title="getBuildNumber" detailSubTitle={`${DeviceInfo.getBuildNumber()}`} />
          <ListItem {...commonListItemProps} title="getBundleId" detailSubTitle={`${DeviceInfo.getBundleId()}`} />
          <ListItem {...commonListItemProps} title="getCarrier" detailSubTitle={`${DeviceInfo.getCarrier()}`} />
          <ListItem {...commonListItemProps} title="getDeviceCountry" detailSubTitle={`${DeviceInfo.getDeviceCountry()}`} />
          <ListItem {...commonListItemProps} title="getDeviceId" detailSubTitle={`${DeviceInfo.getDeviceId()}`} />
          <ListItem {...commonListItemProps} title="getDeviceLocale" detailSubTitle={`${DeviceInfo.getDeviceLocale()}`} />
          <ListItem {...commonListItemProps} title="getDeviceName" detailSubTitle={`${DeviceInfo.getDeviceName()}`} />
          <ListItem {...commonListItemProps} title="getFirstInstallTime" detailSubTitle={`${DeviceInfo.getFirstInstallTime()}`} />
          <ListItem {...commonListItemProps} title="getFontScale" detailSubTitle={`${DeviceInfo.getFontScale()}`} />
          <ListItem {...commonListItemProps} title="getFreeDiskStorage" detailSubTitle={`${DeviceInfo.getFreeDiskStorage()}`} />
          <ListItem {...commonListItemProps} title="getIPAddress" detailSubTitle={`${JSON.stringify(DeviceInfo.getIPAddress())}`}/>
          <ListItem {...commonListItemProps} title="getInstanceID" detailSubTitle={`${DeviceInfo.getInstanceID()}`} />
          <ListItem {...commonListItemProps} title="getLastUpdateTime" detailSubTitle={`${DeviceInfo.getLastUpdateTime()}`} />
          <ListItem {...commonListItemProps} title="getMACAddress" detailSubTitle={`${JSON.stringify(DeviceInfo.getMACAddress())}`}/>
          <ListItem {...commonListItemProps} title="getManufacturer" detailSubTitle={`${DeviceInfo.getManufacturer()}`} />
          <ListItem {...commonListItemProps} title="getMaxMemory" detailSubTitle={`${DeviceInfo.getMaxMemory()}`} />
          <ListItem {...commonListItemProps} title="getModel" detailSubTitle={`${DeviceInfo.getModel()}`} />
          <ListItem {...commonListItemProps} title="getPhoneNumber" detailSubTitle={`${DeviceInfo.getPhoneNumber()}`} />
          <ListItem {...commonListItemProps} title="getReadableVersion" detailSubTitle={`${DeviceInfo.getReadableVersion()}`} />
          <ListItem {...commonListItemProps} title="getSerialNumber" detailSubTitle={`${DeviceInfo.getSerialNumber()}`} />
          <ListItem {...commonListItemProps} title="getSystemName" detailSubTitle={`${DeviceInfo.getSystemName()}`} />
          <ListItem {...commonListItemProps} title="getSystemVersion" detailSubTitle={`${DeviceInfo.getSystemVersion()}`} />
          <ListItem {...commonListItemProps} title="getTimezone" detailSubTitle={`${DeviceInfo.getTimezone()}`} />
          <ListItem {...commonListItemProps} title="getTotalDiskCapacity" detailSubTitle={`${DeviceInfo.getTotalDiskCapacity()}`} />
          <ListItem {...commonListItemProps} title="getTotalMemory" detailSubTitle={`${DeviceInfo.getTotalMemory()}`} />
          <ListItem {...commonListItemProps} title="getUniqueID" detailSubTitle={`${DeviceInfo.getUniqueID()}`} />
          <ListItem {...commonListItemProps} title="getUserAgent" detailSubTitle={`${DeviceInfo.getUserAgent()}`} />
          <ListItem {...commonListItemProps} title="is24Hour" detailSubTitle={`${DeviceInfo.is24Hour()}`} />
          <ListItem {...commonListItemProps} title="isEmulator" detailSubTitle={`${DeviceInfo.isEmulator()}`} />
        </ScrollView>
      </View>
    );
  }
}
