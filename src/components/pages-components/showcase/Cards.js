import React from 'react';
import { View, Text } from 'react-native';

// COMPONENTS
import ButtonDefault from '~/components/generic-components/button-default/ButtonDefault';
import Styles from '~/styles/Styles';
import Colors from '~/styles/Colors';

export default function Cards() {
  return (
    <View style={[Styles.mt5, Styles.container]}>
      <Text style={[Styles.h6, Styles.bold]}>Cards</Text>
      <View style={Styles.mt1}>
        <View
          style={[
            Styles.card,
            Styles.shadowXs,
            Styles.radius5,
            Styles.bgDefault,
          ]}>
          <Text style={[Styles.h6, Styles.bold]}>Card title</Text>
          <Text style={[Styles.h9]}>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos, como também ao salto para a
            editoração eletrônica, permanecendo essencialmente inalterado
          </Text>
        </View>
      </View>
    </View>
  );
}
