import React, { Fragment } from 'react'
import { View, Text, ScrollView, StatusBar, Platform } from 'react-native'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import { Styles } from '~/styles'
import { Colors } from '~/styles'

// HEADERS
import HeaderDefault from '~/components/generic-components/headers/HeaderDefault'
import HeaderExpandable from '~/components/generic-components/headers/HeaderExpandable'

/**
 * Este componente foi criado para representar
 * a árvore de componentes que uma página mobile
 * precisa ter, e prevenir o possível esquecimento
 * de alguma configuração específica por plataforma
 *
 * Veja exemplo de uso no final deste arquivo
 */
export default function SeuProjeto({
  isFeching,
  showHeader,
  showHeaderDefault,
  showHeaderExpandable,
  title,
  subtitle,
  scrollEnabled,
  enableContainer,
  enableScreenHeight,
  shadow,
  children,
  backgroundPage,
  backButton,
  showRightPart,
  ligthContent,
  backgroundStatusBar
}) {
  return (
    <View style={[Styles.page, backgroundPage]}>
      <StatusBar
        translucent
        barStyle={
          Platform.OS === 'ios'
            ? 'dark-content'
            : ligthContent
            ? 'dark-content'
            : 'light-content'
        }
        backgroundColor={backgroundStatusBar}
      />
      {showHeader ? (
        <Fragment>
          {showHeaderDefault && (
            <HeaderDefault
              title={title}
              subtitle={subtitle}
              backButton={backButton}
              showRightPart={showRightPart}
              shadow={shadow}
            />
          )}
          {showHeaderExpandable && (
            <HeaderExpandable
              title={title}
              subtitle={subtitle}
              backButton={backButton}
              showRightPart={showRightPart}
              shadow={shadow}
            />
          )}
        </Fragment>
      ) : null}
      {isFeching ? (
        <View style={[Styles.container, Styles.alignCenter]}>
          <Text>Carregando...</Text>
          <ShimmerPlaceHolder
            autoRun={true}
            style={[Styles.mb1, Styles.radius10, Styles.block, { height: 20 }]}
            colorShimmer={[
              Colors.GREY_LIGHTEN_2,
              Colors.GREY_LIGHTEN_4,
              Colors.GREY_LIGHTEN_2
            ]}
          />
        </View>
      ) : scrollEnabled ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always">
          <View
            style={[
              enableContainer ? Styles.pt2 : null,
              enableContainer ? Styles.pb2 : null,
              enableContainer ? Styles.pb2 : null,
              enableContainer ? Styles.container : null,
              enableScreenHeight ? Styles.screenHeight : null
            ]}>
            {children}
          </View>
        </ScrollView>
      ) : (
        <View
          style={[
            enableContainer ? Styles.pt2 : null,
            enableContainer ? Styles.container : null,
            enableScreenHeight ? Styles.screenHeight : null
          ]}>
          {children}
        </View>
      )}
    </View>
  )
}

/**
 *
 * EXEMPLO DE USO
 *
OBSERVAÇÃO: O álias de importação deve obedecer o mesmo nome de exportação do componente

import SeuProjeto from '~/components/generic-components/seu-projeto/SeuProjeto'

<SeuProjeto
  title="Medipreço"
  subtitle="Lorem ipsum dolor sit amet"
  backButton
  showHeader
  showHeaderDefault
  showRightPart
  headerDefault
  enableContainer
  ligthContent
  backgroundStatusBar={Colors.WHITE}>

  <JSX AQUI />

</SeuProjeto>

 */
