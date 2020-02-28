import React from 'react';
import { View, Text } from 'react-native';

// COMPONENTS
import Badge from '~/components/generic-components/badge/Badge';
import Styles from '~/styles/Styles';
import Colors from '~/styles/Colors';

export default function Badges() {
  return (
    <View style={[Styles.mt5, Styles.container]}>
      <Text style={[Styles.h6, Styles.bold]}>Badges</Text>
      <View style={Styles.mt1}>
        {/** Badges */}
        <View style={Styles.mt1}>
          <View style={[Styles.row, Styles.flexWrap]}>
            <Badge
              title="Primary"
              backgroundType={Styles.bgPrimary}
              textColor={Styles.textDark}
              iconCloseColor={Colors.WHITE}
            />
            <Badge
              title="Secondary"
              backgroundType={Styles.bgSecondary}
              textColor={Styles.textDark}
              iconCloseColor={Colors.WHITE}
            />
            <Badge
              title="Success"
              backgroundType={Styles.bgSuccess}
              textColor={Styles.textDark}
              iconCloseColor={Colors.WHITE}
            />
            <Badge
              title="Danger"
              backgroundType={Styles.bgDanger}
              textColor={Styles.textWhite}
              iconCloseColor={Colors.WHITE}
            />
            <Badge
              title="Warning"
              backgroundType={Styles.bgWarning}
              textColor={Styles.textDark}
              iconCloseColor={Colors.WHITE}
            />
            <Badge
              title="Info"
              backgroundType={Styles.bgInfo}
              textColor={Styles.textDark}
              iconCloseColor={Colors.WHITE}
            />
            <Badge
              title="Light"
              backgroundType={Styles.bgLight}
              textColor={Styles.textDark}
              iconCloseColor={Colors.WHITE}
            />
            <Badge
              title="Dark"
              backgroundType={Styles.bgDark}
              textColor={Styles.textWhite}
              iconCloseColor={Colors.WHITE}
            />
          </View>
        </View>

        {/** Badges */}
      </View>
    </View>
  );
}
