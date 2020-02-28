import React, { useState } from 'react';
import { View, TextInput, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// COMPONENTS
import Icon from '~/components/generic-components/icon/Icon';
import Styles from '~/styles/Styles';
import Colors from '~/styles/Colors';

export default function SearchDefault({ onPress, autoFocus }) {
  const [search, setSearch] = useState('');

  return (
    <View style={[Styles.row, Styles.bgWhite]} onPress={onPress}>
      <View style={Styles.col9}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 3 }}
          colors={[Colors.COLOR_START, Colors.COLOR_CENTER, Colors.COLOR_END]}
          style={[Styles.radius5, Styles.bgGrayLigthen3]}>
          <View
            style={[
              Styles.row,
              Platform.OS === 'ios' ? Styles.pt1 : null,
              Platform.OS === 'ios' ? Styles.pb1 : null,
            ]}>
            <View style={[Styles.col1, Styles.alignCenter, Styles.alignMiddle]}>
              <Icon antDesign name="search1" size={20} color={Colors.WHITE} />
            </View>
            <View style={[Styles.col5, Styles.alignMiddle]}>
              <TextInput
                onSubmitEditing={() => setSearch(this.state.query)}
                keyboardType="ascii-capable"
                autoCapitalize="words"
                placeholder="Pesquisar"
                autoFocus={autoFocus}
                autoCorrect={true}
                selectionColor={Colors.WHITE}
                placeholderTextColor={Colors.WHITE}
                underlineColorAndroid="transparent"
                onChangeText={query => setSearch(query)}
                style={Styles.textWhite}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}
