import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, TouchableOpacity } from 'react-native';

import LogoMedipreco from '~/assets/generic-images/logo-medipreco.png';
import Icon from '~/components/generic-components/icon/Icon';
import Colors from '~/styles/Colors';
import Styles from '~/styles/Styles';

/**
 * Este componente foi criado para representar
 * o cabeçalho padrão do aplicativo, e é filho
 * do componente Medipreco que cria uma página
 * com todos os recusos necessários
 *
 * Veja exemplo de uso no final deste arquivo
 */
function HeaderDefault(props) {
  const {
    title,
    subtitle,
    backButton,
    showRightPart,
    shadow,
    navigation
  } = props;

  function navigateToPage(page) {
    navigation.navigate(page);
  }

  return (
    <View
      style={[
        Styles.bgWhite,
        Styles.headerHeight,
        Styles.statusBarHeight,
        shadow
      ]}>
      <View style={[Styles.container]}>
        <View style={[Styles.row]}>
          {backButton ? (
            <View style={[Styles.col1, Styles.alignMiddle]}>
              <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
                <Icon
                  feather
                  name="chevron-left"
                  size={22}
                  color={Colors.PRIMARY}
                />
              </TouchableOpacity>
            </View>
          ) : null}
          <View style={[Styles.col8, Styles.alignMiddle]}>
            <Text style={[[Styles.h8, Styles.bold, Styles.textPrimary]]}>
              {title}
            </Text>
            {subtitle !== undefined && (
              <Text style={[Styles.h9, Styles.textDark]}>{subtitle}</Text>
            )}
          </View>
          {showRightPart && (
            <View style={[Styles.col1, Styles.alignMiddle]}>
              <TouchableOpacity
                onPress={() => navigateToPage('Profiles')}
                style={Styles.alignRight}>
                <Icon antDesign name="user" size={22} color={Colors.PRIMARY} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

export default withNavigation(HeaderDefault);

/**
 *
 * EXEMPLO DE USO
 *
OBSERVAÇÃO: O álias de importação deve obedecer o mesmo nome de exportação do componente

<Medipreco
  backButton = PARA EXIBIR O BOTÃO DE VOLTAR
  showHeader = PARA EXIBIR O HEADER
  showRightPart = PARA EXIBIR O CONTEÚDO DA DIREITA
  headerDefault = PARA EXIBIR O HEADER DEFAULT
  enableContainer = PARA HABILITAR O CONTAINER PADRÃO
  ligthContent = PARA DEFINIR AS CORES DO STATUS BAR
  backgroundStatusBar={Colors.WHITE} = PARA DEFINIR O FUNDO DA STATUS BAR
  >

  <JSX AQUI />

</Medipreco>

 */
