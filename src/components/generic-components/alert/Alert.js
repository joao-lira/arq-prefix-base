import React, { Fragment } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// COMPONENTS
import Icon from '~/components/generic-components/icon/Icon'
import Styles from '~/styles/Styles'
import Colors from '~/styles/Colors'

export default function Alerts({
  isOpen,
  title,
  message,
  backgroundType,
  textColor,
  iconCloseColor,
  onPress
}) {
  return (
    <Fragment>
      {isOpen && (
        <View style={[Styles.row, Styles.card, Styles.radius5, backgroundType]}>
          <View style={Styles.col8}>
            <Text style={[Styles.h8, textColor]}>{title}</Text>
            <Text style={[Styles.h9, textColor]}>{message}</Text>
          </View>
          <TouchableOpacity
            style={[Styles.col1, Styles.alignRight]}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            onPress={onPress}>
            <Icon evilIcons name="close" size={22} color={iconCloseColor} />
          </TouchableOpacity>
        </View>
      )}
    </Fragment>
  )
}
