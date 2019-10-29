import * as React from 'react';
import { View } from 'react-native';
import Pdf from 'react-native-pdf';

interface Props { }

export default class TestPDF extends React.Component<Props> {

  static navigtionOptions = () => {
    return {
      headerTitle: 'PDF'
    };
  }

  public render() {
    return (
      <View style={{flex: 1}}>
        <Pdf 
          source={{uri: 'https://net.huanmusic.com/pdf/rn%E5%88%86%E4%BA%AB%E4%BC%9A%E6%89%8B%E7%A8%BF.pdf'}} 
          style={{flex: 1}}
        />
      </View>
    );
  }
}
