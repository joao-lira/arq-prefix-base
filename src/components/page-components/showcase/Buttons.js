import React from 'react';
import { View, Text } from 'react-native';

// COMPONENTS
import ButtonDefault from '~/components/generic-components/button-default/ButtonDefault';
import Styles from '~/styles/Styles';
import Colors from '~/styles/Colors';

export default function Buttons() {
  return (
    <View style={[Styles.mt5, Styles.container]}>
      <Text style={[Styles.h6, Styles.bold]}>Botões Wrap</Text>
      <View style={Styles.mt1}>
        <View style={Styles.mt1}>
          <View style={[Styles.row, Styles.flexWrap]}>
            <ButtonDefault
              label="Primary"
              labelColor={Colors.WHITE}
              btnColor={Styles.bgPrimary}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius5}
              btnShadow={Styles.shadowXs}
              onPress={() => {}}
            />
            <ButtonDefault
              label="Secondary"
              labelColor={Colors.WHITE}
              btnColor={Styles.bgSecondary}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius5}
              btnShadow={Styles.shadowXs}
              onPress={() => {}}
            />
            <ButtonDefault
              label="Success"
              labelColor={Colors.WHITE}
              btnColor={Styles.bgSuccess}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius5}
              btnShadow={Styles.shadowXs}
              onPress={() => {}}
            />
            <ButtonDefault
              label="Danger"
              labelColor={Colors.WHITE}
              btnColor={Styles.bgDanger}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius5}
              btnShadow={Styles.shadowXs}
              onPress={() => {}}
            />
            <ButtonDefault
              label="Warning"
              labelColor={Colors.WHITE}
              btnColor={Styles.bgWarning}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius5}
              btnShadow={Styles.shadowXs}
              onPress={() => {}}
            />
            <ButtonDefault
              label="Info"
              labelColor={Colors.WHITE}
              btnColor={Styles.bgInfo}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius5}
              btnShadow={Styles.shadowXs}
              onPress={() => {}}
            />
            <ButtonDefault
              label="Light"
              labelColor={Colors.BLACK}
              btnColor={Styles.bgLight}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius5}
              btnShadow={Styles.shadowXs}
              onPress={() => {}}
            />
            <ButtonDefault
              label="Dark"
              labelColor={Colors.WHITE}
              btnColor={Styles.bgDark}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius5}
              btnShadow={Styles.shadowXs}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
      <Text style={[Styles.h6, Styles.bold]}>Botões Wrap Outline</Text>
      <Text style={[Styles.h9]}>Outline</Text>
      <View style={Styles.mt1}>
        <View style={Styles.mt1}>
          <View style={[Styles.row, Styles.flexWrap]}>
            <ButtonDefault
              label="Primary"
              labelColor={Colors.PRIMARY}
              btnColor={Styles.bgWhite}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius10}
              outline
              outlineColor={Styles.borderPrimary}
              btnShadow={Styles.shadowSm}
              onPress={() => {}}
            />
            <ButtonDefault
              label="Secondary"
              labelColor={Colors.SECONDARY}
              btnColor={Styles.bgWhite}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius10}
              outline
              outlineColor={Styles.borderSecondary}
              btnShadow={Styles.shadowSm}
              onPress={() => {}}
            />
            <ButtonDefault
              label="Success"
              labelColor={Colors.SUCCESS}
              btnColor={Styles.bgWhite}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius10}
              outline
              outlineColor={Styles.borderSuccess}
              btnShadow={Styles.shadowSm}
              onPress={() => {}}
            />
            <ButtonDefault
              label="Danger"
              labelColor={Colors.DANGER}
              btnColor={Styles.bgWhite}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius10}
              outline
              outlineColor={Styles.borderDanger}
              btnShadow={Styles.shadowSm}
              onPress={() => {}}
            />
            <ButtonDefault
              label="Warning"
              labelColor={Colors.WARNING}
              btnColor={Styles.bgWhite}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius10}
              outline
              outlineColor={Styles.borderWarning}
              btnShadow={Styles.shadowSm}
              onPress={() => {}}
            />
            <ButtonDefault
              label="Info"
              labelColor={Colors.INFO}
              btnColor={Styles.bgWhite}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius10}
              outline
              outlineColor={Styles.borderInfo}
              btnShadow={Styles.shadowSm}
              onPress={() => {}}
            />
            <ButtonDefault
              label="Light"
              labelColor={Colors.GREY}
              btnColor={Styles.bgWhite}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius10}
              outline
              outlineColor={Styles.borderLight}
              btnShadow={Styles.shadowSm}
              onPress={() => {}}
            />
            <ButtonDefault
              label="Dark"
              labelColor={Colors.DARK}
              btnColor={Styles.bgWhite}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius10}
              outline
              outlineColor={Styles.borderDark}
              btnShadow={Styles.shadowSm}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
      <Text style={[Styles.h6, Styles.bold]}>Botões Size</Text>
      <Text style={[Styles.h9]}>Outline</Text>
      <View style={Styles.mt1}>
        <View style={Styles.mt1}>
          <ButtonDefault
            label="Extra small"
            labelColor={Colors.PRIMARY}
            btnColor={Styles.bgWhite}
            btnSize={Styles.btnXs}
            btnRadius={Styles.radius10}
            outline
            outlineColor={Styles.borderPrimary}
            btnShadow={Styles.shadowXs}
            onPress={() => {}}
          />
          <View style={Styles.mt1}>
            <ButtonDefault
              label="Small"
              labelColor={Colors.PRIMARY}
              btnColor={Styles.bgWhite}
              btnSize={Styles.btnSm}
              btnRadius={Styles.radius10}
              outline
              outlineColor={Styles.borderPrimary}
              btnShadow={Styles.shadowXs}
              onPress={() => {}}
            />
          </View>
          <View style={Styles.mt1}>
            <ButtonDefault
              label="Medium"
              labelColor={Colors.PRIMARY}
              btnColor={Styles.bgWhite}
              btnSize={Styles.btnMd}
              btnRadius={Styles.radius10}
              outline
              outlineColor={Styles.borderPrimary}
              btnShadow={Styles.shadowXs}
              onPress={() => {}}
            />
          </View>
          <View style={Styles.mt1}>
            <ButtonDefault
              label="Large"
              labelColor={Colors.PRIMARY}
              btnColor={Styles.bgWhite}
              btnSize={Styles.btnLg}
              btnRadius={Styles.radius10}
              outline
              outlineColor={Styles.borderPrimary}
              btnShadow={Styles.shadowXs}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
