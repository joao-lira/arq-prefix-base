import React from 'react';
import { View, Text, Image } from 'react-native';

// COMPONENTS
import Styles from '~/styles/Styles';
export default function Reebot() {
  return (
    <View style={[Styles.mt5, Styles.container]}>
      <Text style={[Styles.h6, Styles.bold]}>Reboot</Text>
      <Text style={Styles.h9}>Cabeçahos</Text>
      <View style={Styles.mt1}>
        {/** Reebot */}
        <Text style={Styles.h1}>h1. Cabeçalho</Text>
        <Text style={Styles.h2}>h2. Cabeçalho</Text>
        <Text style={Styles.h3}>h3. Cabeçalho</Text>
        <Text style={Styles.h4}>h4. Cabeçalho</Text>
        <Text style={Styles.h5}>h5. Cabeçalho</Text>
        <Text style={Styles.h6}>h6. Cabeçalho</Text>
        <Text style={Styles.h7}>h7. Cabeçalho</Text>
        <Text style={Styles.h8}>h8. Cabeçalho</Text>
        <Text style={Styles.h9}>h9. Cabeçalho</Text>
        <Text style={Styles.h10}>h10. Cabeçalho</Text>
        {/** Reebot */}
      </View>
    </View>
  );
}
