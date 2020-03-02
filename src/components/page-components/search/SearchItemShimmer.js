import React from 'react'
import { View } from 'react-native'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import Styles from '~/styles/Styles'
import Colors from '~/styles/Colors'

export default class SearchItemShimmer extends React.Component {
  render() {
    return (
      <View style={[Styles.row, Styles.divider, Styles.mt2]}>
        <View style={[Styles.col1]}>
          <View style={[Styles.row]}>
            <View style={[Styles.col1, Styles.alignMiddle]}>
              <ShimmerPlaceHolder
                autoRun={true}
                style={[
                  Styles.mb1,
                  Styles.radius10,
                  Styles.block,
                  { height: 20 }
                ]}
                colorShimmer={[
                  Colors.GREY_LIGHTEN_2,
                  Colors.GREY_LIGHTEN_4,
                  Colors.GREY_LIGHTEN_2
                ]}
              />
              <ShimmerPlaceHolder
                autoRun={true}
                style={[
                  Styles.mb1,
                  Styles.radius10,
                  Styles.block,
                  { height: 8 }
                ]}
                colorShimmer={[
                  Colors.GREY_LIGHTEN_2,
                  Colors.GREY_LIGHTEN_4,
                  Colors.GREY_LIGHTEN_2
                ]}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
