import React, { Fragment } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from '~/components/generic-components/icon/Icon';
import Colors from '~/styles/Colors';
import Styles from '~/styles/Styles';

import SearchItemShimmer from './SearchItemShimmer';

export default function SearchItem({
  propertie,
  isFecthing,
  onPress,
  shimmerCount,
}) {
  function renderShimmerCount(count) {
    let shimmerRows = [];
    for (let index = 0; index < count; index++) {
      shimmerRows.push(<SearchItemShimmer key={index} />);
    }
    return shimmerRows;
  }

  return (
    <Fragment>
      {isFecthing ? (
        renderShimmerCount(shimmerCount)
      ) : (
        <TouchableOpacity onPress={onPress}>
          <View style={[Styles.row, Styles.divider, Styles.pt1, Styles.pb1]}>
            <View style={[Styles.col1, Styles.alignMiddle]}>
              <Image
                source={{
                  uri: propertie.img,
                }}
                resizeMode="contain"
                fadeDuration={0}
                style={[Styles.avatarMd, Styles.radius10]}
              />
            </View>
            <View style={[Styles.col4, Styles.alignMiddle]}>
              <Text style={[Styles.textDark, Styles.bold, Styles.h7]}>
                {propertie.nm}
              </Text>
              <Text style={[Styles.textDark, Styles.h8]} numberOfLines={1}>
                {propertie.pa}
              </Text>
            </View>
            <View style={[Styles.col1, Styles.alignMiddle, Styles.alignRight]}>
              <Icon
                feather
                name="chevron-right"
                size={15}
                color={Colors.DARK}
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
    </Fragment>
  );
}
