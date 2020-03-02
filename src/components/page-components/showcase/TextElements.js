import React from 'react'
import { View, Text, Image } from 'react-native'

// COMPONENTS
import Styles from '~/styles/Styles'
export default function TextElements() {
  return (
    <View style={[Styles.mt5, Styles.container]}>
      <Text style={[Styles.h6, Styles.bold]}>Elementos de texto</Text>
      <Text style={Styles.h9}>Tipografia</Text>
      <View style={Styles.mt1}>
        {/** Reebot */}
        <Text style={[Styles.h7, Styles.bold]}>
          Esta linha renderiza em negrito.
        </Text>
        <Text style={[Styles.h7, Styles.textItalic]}>
          Esta linha renderiza itálico.
        </Text>
        {/** Reebot */}
      </View>
    </View>
  )
}
