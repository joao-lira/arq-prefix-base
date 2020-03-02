import React from 'react';
import { View, Text, Image } from 'react-native';

// COMPONENTS
import Styles from '~/styles/Styles';
export default function Media() {
  return (
    <View style={[Styles.mt5, Styles.container]}>
      <Text style={[Styles.h6, Styles.bold]}>Mídia</Text>
      <Text style={Styles.h9}>Avatar</Text>
      <View style={Styles.mt1}>
        {/** Media */}
        <View style={Styles.row}>
          <View style={[Styles.col2, Styles.alignCenter]}>
            <Text style={[Styles.h8]}>XL</Text>
            <Image
              source={{
                uri: 'http://webapplayers.com/inspinia_admin-v2.9.3/img/a4.jpg',
              }}
              resizeMode="contain"
              fadeDuration={0}
              style={[Styles.avatarXl, Styles.radius10]}
            />
          </View>
          <View style={[Styles.col2, Styles.alignCenter]}>
            <Text style={[Styles.h8]}>LG</Text>
            <Image
              source={{
                uri: 'http://webapplayers.com/inspinia_admin-v2.9.3/img/a4.jpg',
              }}
              resizeMode="contain"
              fadeDuration={0}
              style={[Styles.avatarLg, Styles.radius10]}
            />
          </View>
          <View style={[Styles.col2, Styles.alignCenter]}>
            <Text style={[Styles.h8]}>MD</Text>
            <Image
              source={{
                uri: 'http://webapplayers.com/inspinia_admin-v2.9.3/img/a4.jpg',
              }}
              resizeMode="contain"
              fadeDuration={0}
              style={[Styles.avatarMd, Styles.radius10]}
            />
          </View>
          <View style={[Styles.col2, Styles.alignCenter]}>
            <Text style={[Styles.h8]}>SM</Text>
            <Image
              source={{
                uri: 'http://webapplayers.com/inspinia_admin-v2.9.3/img/a4.jpg',
              }}
              resizeMode="contain"
              fadeDuration={0}
              style={[Styles.avatarSm, Styles.radius10]}
            />
          </View>
          <View style={[Styles.col1, Styles.alignCenter]}>
            <Text style={[Styles.h8]}>XS</Text>
            <Image
              source={{
                uri: 'http://webapplayers.com/inspinia_admin-v2.9.3/img/a4.jpg',
              }}
              resizeMode="contain"
              fadeDuration={0}
              style={[Styles.avatarXs, Styles.radius10]}
            />
          </View>
        </View>
        {/** Media */}
      </View>
    </View>
  );
}
