import React, { Fragment, useState, useEffect } from 'react'
import { withNavigation } from 'react-navigation'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native'
import { NavigationEvents } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from '~/components/generic-components/icon/Icon'
import Colors from '~/styles/Colors'
import Styles from '~/styles/Styles'

/**
 * Este componente foi criado para representar
 * o cabeçalho expansível do aplicativo, e é filho
 * do componente Medipreco que cria uma página
 *
 * Veja exemplo de uso no final deste arquivo
 */
function HeaderExpandable(props) {
  const {
    title,
    subtitle,
    backButton,
    showRightPart,
    shadow,
    navigation,
    updateDataAgroMonitoring
  } = props

  const [isFecthing, setIsFeching] = useState(true)
  const [expandable, setExpandable] = useState(false)
  const [properties, setProperties] = useState([])
  const [propTitle, setPropTitle] = useState(title)

  useEffect(() => {
    getProperties()
    setIsFeching(false)
  }, [])

  async function getProperties() {
    let cpf = await AsyncStorage.getItem('@Medipreco:cpf')
    cpf = JSON.parse(cpf)
    let propertiesStorage = await AsyncStorage.getItem(
      `@Medipreco:properties-${cpf}`
    )
    propertiesStorage = propertiesStorage === null ? [] : propertiesStorage
    setProperties(Object.values(JSON.parse(propertiesStorage)))
  }

  function expandableHeader() {
    setExpandable(!expandable)
  }

  function navigateToPage(page, sendProps) {
    const { navigation } = props
    navigation.navigate(page, sendProps)
  }

  function updateHeaderExpandable(params) {
    setPropTitle(`${params.nome} - ${params.municipio}`)
    updateDataAgroMonitoring()
  }

  return (
    <Fragment>
      <NavigationEvents
        onWillFocus={() => {
          getProperties()
        }}
      />
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
                  onPress={() => navigation.goBack()}
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
              <Text
                style={[[Styles.h8, Styles.bold, Styles.textPrimary]]}
                numberOfLines={1}>
                {propTitle}
              </Text>
              {subtitle !== undefined && (
                <Text style={[Styles.h9, Styles.textDark]}>{subtitle}</Text>
              )}
            </View>
            {showRightPart && (
              <View style={[Styles.col1, Styles.alignMiddle]}>
                <TouchableOpacity
                  onPress={() => expandableHeader()}
                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                  style={Styles.alignRight}>
                  <Icon
                    feather
                    name={expandable ? 'chevron-up' : 'chevron-down'}
                    size={22}
                    color={Colors.PRIMARY}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
      {/** LIST */}
      {expandable && (
        <Fragment>
          <View
            style={[Styles.row, Styles.container, Styles.divider, Styles.pb1]}>
            <View style={[Styles.col1]}>
              <TouchableOpacity>
                <View style={[Styles.row, Styles.pt1]}>
                  <View style={[Styles.col4, Styles.alignMiddle]}>
                    <Text style={[Styles.textDark, Styles.h8]}>
                      Contaúdo aqui
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Fragment>
      )}
      {/** LIST */}
    </Fragment>
  )
}

export default withNavigation(HeaderExpandable)

/**
 *
 * EXEMPLO DE USO
 *
OBSERVAÇÃO: O álias de importação deve obedecer o mesmo nome de exportação do componente

<Medipreco
  backButton = PARA EXIBIR O BOTÃO DE VOLTAR
  showHeader = PARA EXIBIR O HEADER
  showRightPart = PARA EXIBIR O CONTEÚDO DA DIREITA
  headerExpandable = PARA EXIBIR O HEADER EXPANDABLE
  enableContainer = PARA HABILITAR O CONTAINER PADRÃO
  ligthContent = PARA DEFINIR AS CORES DO STATUS BAR
  backgroundStatusBar={Colors.WHITE} = PARA DEFINIR O FUNDO DA STATUS BAR
  >

  <JSX AQUI />

</Medipreco>

 */
