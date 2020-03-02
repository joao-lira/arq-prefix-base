import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { NavigationEvents } from 'react-navigation'

// COMPONENTS
import Icon from '~/components/generic-components/icon/Icon'
import SeuProjeto from '~/components/generic-components/seu-projeto/SeuProjeto'
import Styles from '~/styles/Styles'
import Colors from '~/styles/Colors'

const TabIcon = ({ tintColor }) => (
  <Icon evilIcons name="cart" size={25} color={tintColor} />
)

Purchases.navigationOptions = {
  tabBarIcon: TabIcon,
  title: 'Pedidos'
}
export default function Purchases() {
  const [isFecthing, setIsFeching] = useState(false)
  const [properties, setProperties] = useState([])

  return (
    <SeuProjeto
      showHeader
      showHeaderDefault
      showRightPart
      enableContainer
      ligthContent
      backgroundStatusBar={Colors.WHITE}
      backgroundColor={Colors.WHITE}
      scrollEnabled={false}>
      <NavigationEvents
        onWillFocus={() => {
          // getProperties();
        }}
      />
      <View style={Styles.row}>
        <View style={Styles.col1}>
          <Text style={[Styles.h5, Styles.bold, Styles.textDark]}>Pedidos</Text>
          <View style={Styles.mt5}>
            {isFecthing ? (
              <PropertiesItem isFecthing={isFecthing} shimmerCount={3} />
            ) : properties.length === 0 ? (
              <Text>Sem nada aqui</Text>
            ) : (
              <FlatList
                data={properties}
                keyExtractor={item => String(item.id)}
                extraData={properties}
                renderItem={({ item, index }) => (
                  <PropertiesItem
                    isFecthing={isFecthing}
                    propertie={item}
                    shimmerCount={3}
                  />
                )}
              />
            )}
          </View>
        </View>
      </View>
    </SeuProjeto>
  )
}
