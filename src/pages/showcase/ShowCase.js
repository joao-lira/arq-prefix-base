import React from 'react'
import { View } from 'react-native'

// COMPONENTS
import Medipreco from '~/components/generic-components/medipreco/Medipreco'
import Grid from '~/components/pages-components/showcase/Grid'
import Media from '~/components/pages-components/showcase/Media'
import Reebot from '~/components/pages-components/showcase/Reebot'
import TextElements from '~/components/pages-components/showcase/TextElements'
import Images from '~/components/pages-components/showcase/Images'
import Alerts from '~/components/pages-components/showcase/Alerts'
import Badges from '~/components/pages-components/showcase/Badges'
import Buttons from '~/components/pages-components/showcase/Buttons'
import Cards from '~/components/pages-components/showcase/Cards'
import HeaderDefault from '~/components/generic-components/headers/HeaderDefault'
import Styles from '~/styles/Styles'
import Colors from '~/styles/Colors'

export default function ShowCase() {
  return (
    <Medipreco
      ligthContent
      backgroundStatusBar={Colors.WHITE}
      backgroundColor={Colors.WHITE}
      scrollEnabled>
      <View style={[Styles.mb5]}>
        <Grid />
        <Media />
        <Reebot />
        <TextElements />
        <Images />
        <Alerts />
        <Badges />
        <Buttons />
        <Cards />
      </View>
    </Medipreco>
  )
}
