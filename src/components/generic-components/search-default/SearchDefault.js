import React, { useState } from 'react';
import { View, TextInput, Platform } from 'react-native';

// COMPONENTS
import Icon from '~/components/generic-components/icon/Icon';
import Styles from '~/styles/Styles';
import Colors from '~/styles/Colors';

export default function SearchDefault({ onPress, autoFocus, editable }) {
  const [search, setSearch] = useState('');

  return (
    <View style={[Styles.row, Styles.bgWhite]}>
      <View style={Styles.col9}>
        <View style={[Styles.radius5, Styles.bgGrayLigthen3]}>
          <View
            style={[
              Styles.row,
              Platform.OS === 'ios' ? Styles.pt1 : null,
              Platform.OS === 'ios' ? Styles.pb1 : null,
            ]}>
            <View style={[Styles.col1, Styles.alignCenter, Styles.alignMiddle]}>
              <Icon antDesign name="search1" size={20} color={Colors.PRIMARY} />
            </View>
            <View style={[Styles.col5, Styles.alignMiddle]}>
              <TextInput
                onSubmitEditing={() => setSearch(this.state.query)}
                keyboardType="ascii-capable"
                autoCapitalize="words"
                placeholder="Pesquisar"
                autoFocus={autoFocus}
                autoCorrect={true}
                selectionColor={Colors.COLOR_CENTER}
                placeholderTextColor={Colors.GREY_LIGHTEN_6}
                underlineColorAndroid="transparent"
                onChangeText={query => setSearch(query)}
                editable={editable}
                style={Styles.textInfo}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
