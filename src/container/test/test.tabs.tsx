import * as React from 'react';
import { View, Text } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const TabView = ({tabLabel}: any) => {
  return (
    <View tabLabel={tabLabel} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
      <Text>{tabLabel}</Text>
    </View>
  );
};

interface Props {}

export default class TestTabs extends React.Component<Props> {

  static navigationOptions = () => ({
    headerTitle: 'Tabs组件'
  })

  public render() {
    return (
      <View style={{flex: 1}}>
        <ScrollableTabView style={{flex: 1}}>
          <TabView tabLabel="Tab1" />
          <TabView tabLabel="Tab2" />
          <TabView tabLabel="Tab3" />
          <TabView tabLabel="Tab4" />
        </ScrollableTabView>
      </View>
    );
  }
}
