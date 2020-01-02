import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-centerm-sdk';
import I18n from 'react-native-i18n';
import Locales from '../../assets/locale';

I18n.fallbacks = true;

I18n.translations = {
  en: Locales.en,
  zh: Locales.zh,
};

type Props = { };

class TestInternation extends React.Component<Props> {
  render () {
    const commonListItemProps: any = {
      icon: { uri: 'http://net.huanmusic.com/react.png' },
      bottomBorder: true
    };
    return (
      <View style={{flex: 1}}>
        <ListItem 
          {...commonListItemProps}
          title={`${I18n.t('greeting')} Centerm`} 
        />
      </View>
    );
  }
}

export default TestInternation;