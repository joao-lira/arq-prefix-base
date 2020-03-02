import React from 'react';
import { View, Text, Image } from 'react-native';

// COMPONENTS
import Styles from '~/styles/Styles';
export default function Images() {
  return (
    <View style={[Styles.mt5, Styles.container]}>
      <Text style={[Styles.h6, Styles.bold]}>Imagens</Text>
      <Text style={Styles.h9}>Cabeçahos</Text>
      <View style={Styles.mt1}>
        {/** Imagens */}
        <View style={Styles.row}>
          <View style={Styles.col1}>
            <Image
              source={{
                uri: 'http://webapplayers.com/inspinia_admin-v2.9.3/img/a4.jpg',
              }}
              resizeMode="contain"
              fadeDuration={0}
              style={[Styles.avatarLg, Styles.radius10]}
            />
          </View>
          <View style={Styles.col1}>
            <Image
              source={{
                uri: 'http://webapplayers.com/inspinia_admin-v2.9.3/img/a4.jpg',
              }}
              resizeMode="contain"
              fadeDuration={0}
              style={[Styles.avatarLg, Styles.radius50]}
            />
          </View>
          <View style={Styles.col1}>
            <Image
              source={{
                uri: 'http://webapplayers.com/inspinia_admin-v2.9.3/img/a4.jpg',
              }}
              resizeMode="contain"
              fadeDuration={0}
              style={[Styles.avatarLg]}
            />
          </View>
        </View>
        {/** Imagens */}
      </View>
    </View>
  );
}
