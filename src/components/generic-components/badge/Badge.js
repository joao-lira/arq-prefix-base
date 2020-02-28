import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// COMPONENTS
import Styles from '~/styles/Styles';
import Colors from '~/styles/Colors';

export default function Badge({ title, backgroundType, textColor, onPress }) {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View
        style={[
          Styles.alignMiddle,
          Styles.pl2,
          Styles.pr2,
          Styles.mt1,
          Styles.radius50,
          StylesComponent.pt1,
          StylesComponent.pb1,
          StylesComponent.mr1,
          StylesComponent.mb1,
          backgroundType,
        ]}>
        <Text style={[Styles.h9, textColor]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

/**
 * Estilização própria deste componente
 */
const StylesComponent = StyleSheet.create({
  active: {
    backgroundColor: Colors.GREEN_LIGHTEN_1,
  },
  inactive: {
    backgroundColor: Colors.GREY_LIGHTEN_2,
  },
  pt1: {
    paddingTop: 5,
  },
  pb1: {
    paddingBottom: 5,
  },
  mb1: {
    marginBottom: 0,
  },
  mr1: {
    marginRight: 5,
  },
});
