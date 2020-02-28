import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Styles from '~/styles/Styles'
import Colors from '~/styles/Colors'

/**
 * Este componente foi criado com base no protótipo
 * para representar botões da aplicação, que podem ser
 * alterados via parametros de propriedade
 *
 * Veja exemplo de uso no final deste arquivo
 */
export default function ButtonDefault(props) {
  const {
    label,
    labelColor,
    btnColor,
    btnSize,
    btnRadius,
    outline,
    outlineColor,
    btnShadow,
    disabled,
    onPress
  } = props
  return (
    <TouchableOpacity
      onPress={!disabled && onPress}
      style={[
        Styles.card,
        Styles.alignCenter,
        outline && Styles.btnBorder,
        outlineColor && disabled ? Styles.borderSecondary : outlineColor,
        btnSize && btnSize,
        btnRadius && btnRadius,
        btnColor && btnColor,
        btnShadow && btnShadow
      ]}>
      <Text
        style={[
          Styles.h7,
          Styles.pl1,
          Styles.pr1,
          { color: disabled ? Colors.GREY : labelColor }
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

/**
 *
 * EXEMPLO DE USO
 *
OBSERVAÇÃO: O álias de importação deve obedecer o mesmo nome de exportação do componente

import ButtonDefault from '~/components/generic-components/button-default/ButtonDefault'

<ButtonDefault
  label="Salvar"
  labelColor={Colors.PRIMARY}
  btnColor={Styles.bgWhite}
  btnSize={Styles.btnSm}
  btnRadius={Styles.radius10}
  outline
  outlineColor={Styles.borderSuccess}
  btnShadow={Styles.shadowSm}
  onPress={() => {}}
/>


 */
