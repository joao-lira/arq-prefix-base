import React, { Fragment, useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from '~/components/generic-components/icon/Icon';
import Styles from '~/styles/Styles';

export default function TextInputDefault(props) {
  const { label, validation, validationText, showIcon, onPress } = props;
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(!isFocused);
  }

  function handleBlur() {
    setIsFocused(!isFocused);
  }

  return (
    <Fragment>
      <View style={Styles.mt3}>
        <TextInput
          {...props}
          multiline={true}
          ref={props.inputRef}
          style={[props.style, Styles.h7, Styles.pl2, Styles.pr2, Styles.mt1]}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          blurOnSubmit
        />
        {validation && (
          <Text style={[props.validationTextStyle, Styles.ml2]}>
            {validationText}
          </Text>
        )}
        {showIcon && (
          <TouchableOpacity
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            onPress={onPress}
            style={[
              props.colorBtnBgClose,
              Styles.radius50,
              { position: 'absolute', right: 8, top: 27, padding: 3 },
            ]}>
            <Icon
              antDesign
              name="pluscircleo"
              size={13}
              color={props.showIconColor}
            />
          </TouchableOpacity>
        )}
        {label !== undefined && (
          <View style={labelStyle.positionLabel}>
            <Text
              style={[props.labelStyle, Styles.bgWhite, labelStyle.labelStyle]}>
              {label}
            </Text>
          </View>
        )}
      </View>
    </Fragment>
  );
}

const labelStyle = StyleSheet.create({
  positionLabel: {
    position: 'absolute',
    marginLeft: 7,
  },
  labelStyle: {
    paddingHorizontal: 8,
    borderRadius: 15,
  },
});
