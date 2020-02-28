import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';

// COMPONENTS
import Icon from '~/components/generic-components/icon/Icon';
import Medipreco from '~/components/generic-components/medipreco/Medipreco';
import SearchDefault from '~/components/generic-components/search-default/SearchDefault';
import ButtonDefault from '~/components/generic-components/button-default/ButtonDefault';
import { Styles, Colors } from '~/styles';
import Api from '~/services/Api';

const TabIcon = ({ tintColor }) => (
  <Icon antDesign name="home" size={20} color={tintColor} />
);

Home.navigationOptions = {
  tabBarIcon: TabIcon,
  title: 'Início',
};

export default function Home({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');

  useEffect(() => {
    setCpf('0000sss0');
  }, []);

  function navigateToPage(page) {
    navigation.navigate(page);
  }

  return (
    <Medipreco
      title="Olá, asdfasdfas!"
      subtitle="Guará 1, QI 1 Bloco T, apto 103"
      showHeader
      showHeaderDefault
      enableContainer
      ligthContent
      backgroundStatusBar={Colors.WHITE}
      backgroundColor={Colors.WHITE}
      scrollEnabled={false}>
      <NavigationEvents
        onWillFocus={() => {
          // getProperties();
        }}
      />

      <TouchableOpacity onPress={() => navigateToPage('Search')}>
        <SearchDefault
          editable={false}
          onPress={() => navigateToPage('Search')}
        />
      </TouchableOpacity>

      <View style={Styles.row}>
        <View style={Styles.col1}>
          <View style={Styles.mt2}>
            <Text style={[Styles.h6, Styles.bold, Styles.textDark]}>
              Para você {cpf}
            </Text>
            <ButtonDefault
              label="Salvar"
              labelColor={Colors.PRIMARY}
              btnColor={Styles.bgWhite}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius10}
              outline
              outlineColor={Styles.borderSuccess}
              btnShadow={Styles.shadowSm}
              onPress={() => {
                navigateToPage('ShowCase');
              }}
            />
          </View>
        </View>
      </View>
    </Medipreco>
  );
}
