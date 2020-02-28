import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { NavigationEvents } from 'react-navigation'

// COMPONENTS
import Icon from '~/components/generic-components/icon/Icon'
import Medipreco from '~/components/generic-components/medipreco/Medipreco'
import Styles from '~/styles/Styles'
import Colors from '~/styles/Colors'

const TabIcon = ({ tintColor }) => (
  <Icon antDesign name="user" size={20} color={tintColor} />
)

Profile.navigationOptions = {
  tabBarIcon: TabIcon,
  title: 'Perfil'
}
export default function Profile() {
  const [isFecthing, setIsFeching] = useState(false)
  const [properties, setProperties] = useState([])

  return (
    <Medipreco
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
      <View style={[Styles.pt3, Styles.pb2]}>
        <Image
          source={{
            uri: 'http://webapplayers.com/inspinia_admin-v2.9.3/img/a4.jpg'
          }}
          resizeMode="contain"
          fadeDuration={0}
          style={[Styles.avatarMd, Styles.radius50]}
        />
      </View>
      <View style={Styles.row}>
        <View style={Styles.col1}>
          <Text style={[Styles.h5, Styles.bold, Styles.textDark]}>
            Meu perfil
          </Text>
        </View>
      </View>
      <View style={Styles.row}>
        <View style={Styles.col1}>
          <Text style={[Styles.h7, Styles.textDark]}>Meus pedidos</Text>
        </View>
      </View>
    </Medipreco>
  )
}
