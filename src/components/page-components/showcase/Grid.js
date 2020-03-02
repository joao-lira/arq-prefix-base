import React from 'react';
import { View, Text } from 'react-native';

// COMPONENTS
import Styles from '~/styles/Styles';
export default function Grid() {
  return (
    <View style={[Styles.mt5, Styles.container]}>
      <Text style={[Styles.h6, Styles.bold]}>Grid</Text>
      <View style={Styles.mt1}>
        <Text style={[Styles.h8]}>Larguras iguais</Text>
        {/** GRID */}
        <View style={Styles.row}>
          <View style={[Styles.col1, Styles.p1, Styles.bgGrayLigthen2]}>
            <Text>Col 1</Text>
          </View>
          <View style={[Styles.col1, Styles.p1, Styles.bgGrayLigthen4]}>
            <Text>Col 1</Text>
          </View>
          <View style={[Styles.col1, Styles.p1, Styles.bgGrayLigthen5]}>
            <Text>Col 1</Text>
          </View>
        </View>
        {/** GRID */}
      </View>
      <View style={Styles.mt2}>
        <Text style={[Styles.h8]}>Larguras distintas</Text>
        {/** GRID */}
        <View style={Styles.row}>
          <View style={[Styles.col1, Styles.p1, Styles.bgGrayLigthen2]}>
            <Text>Col 1</Text>
          </View>
          <View style={[Styles.col2, Styles.p1, Styles.bgGrayLigthen4]}>
            <Text>Col 1</Text>
          </View>
          <View style={[Styles.col5, Styles.p1, Styles.bgGrayLigthen5]}>
            <Text>Col 1</Text>
          </View>
        </View>
        {/** GRID */}
      </View>
    </View>
  );
}
