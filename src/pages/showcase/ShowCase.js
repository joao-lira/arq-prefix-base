import React from 'react'
import { View } from 'react-native'

// COMPONENTS
import SeuProjeto from '~/components/generic-components/seu-projeto/SeuProjeto'
import Grid from '~/components/page-components/showcase/Grid'
import Media from '~/components/page-components/showcase/Media'
import Reebot from '~/components/page-components/showcase/Reebot'
import TextElements from '~/components/page-components/showcase/TextElements'
import Images from '~/components/page-components/showcase/Images'
import Alerts from '~/components/page-components/showcase/Alerts'
import Badges from '~/components/page-components/showcase/Badges'
import Buttons from '~/components/page-components/showcase/Buttons'
import Cards from '~/components/page-components/showcase/Cards'
import Styles from '~/styles/Styles'
import Colors from '~/styles/Colors'

export default function ShowCase() {
  return (
    <SeuProjeto
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
    </SeuProjeto>
  )
}
