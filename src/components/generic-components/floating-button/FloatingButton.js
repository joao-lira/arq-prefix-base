import React from 'react';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import Styles from '~/styles/Styles';

/**
 * Este componente foi criado para gerar botões
 * flutuantes na aplicação
 *
 * Veja exemplo de uso no final deste arquivo
 */
export default function FloatingButton(props) {
  const {
    name,
    size,
    color,
    backgroundColor,
    onPress,
    antDesign,
    entypo,
    evilIcons,
    feather,
    fontAwesome,
    fontAwesome5,
    fontAwesome5Pro,
    fontisto,
    foundation,
    ionicons,
    materialCommunityIcons,
    materialIcons,
    octicons,
    simpleLineIcons,
    zocial,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Styles.alignCenter,
        Styles.alignMiddle,
        Styles.btnLg,
        Styles.p2,
        Styles.radius50,
        Styles.bgPrimary,
        Styles.shadowMd,
        Styles.width60,
        Styles.height60,
        Styles.positionFloatingButtonBottomRight,
        backgroundColor,
      ]}>
      {antDesign && <AntDesign name={name} size={size} color={color} />}
      {entypo && <Entypo name={name} size={size} color={color} />}
      {evilIcons && <EvilIcons name={name} size={size} color={color} />}
      {feather && <Feather name={name} size={size} color={color} />}
      {fontAwesome && <FontAwesome name={name} size={size} color={color} />}
      {fontAwesome5 && <FontAwesome5 name={name} size={size} color={color} />}
      {fontAwesome5Pro && (
        <FontAwesome5Pro name={name} size={size} color={color} />
      )}
      {fontisto && <Fontisto name={name} size={size} color={color} />}
      {foundation && <Foundation name={name} size={size} color={color} />}
      {ionicons && <Ionicons name={name} size={size} color={color} />}
      {materialCommunityIcons && (
        <MaterialCommunityIcons name={name} size={size} color={color} />
      )}
      {materialIcons && <MaterialIcons name={name} size={size} color={color} />}
      {octicons && <Octicons name={name} size={size} color={color} />}
      {simpleLineIcons && (
        <SimpleLineIcons name={name} size={size} color={color} />
      )}
      {zocial && <Zocial name={name} size={size} color={color} />}
    </TouchableOpacity>
  );
}

/**
 *
 * EXEMPLO DE USO
 *
OBSERVAÇÃO: O álias de importação deve obedecer o mesmo nome de exportação do componente

import FloatingButton from '~/components/generic-components/FloatingButton';

<FloatingButton
  feather
  name="plus"
  size={22}
  color={Colors.WHITE}
  backgroundColor={Styles.bgPrimary}
  onPress={() => navigateToPage('PropertiesAdd')}
/>


 */
