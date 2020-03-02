import React, { useState } from 'react';
import { View, Text } from 'react-native';

// COMPONENTS
import Alert from '~/components/generic-components/alert/Alert';
import Styles from '~/styles/Styles';
import Colors from '~/styles/Colors';

export default function Alerts() {
  const [alertPrimary, setAlertPrimary] = useState(true);
  const [alertSecondary, setAlertSecondary] = useState(true);
  const [alertSuccess, setAlertSuccess] = useState(true);
  const [alertDanger, setAlertDanger] = useState(true);
  const [alertWarning, setAlertWarning] = useState(true);
  const [alertInfo, setAlertInfo] = useState(true);
  const [alertLight, setAlertLight] = useState(true);
  const [alertDark, setAlertDark] = useState(true);
  return (
    <View style={[Styles.mt5, Styles.container]}>
      <Text style={[Styles.h6, Styles.bold]}>Alertas</Text>
      <View style={Styles.mt1}>
        {/** Alerts */}
        <View style={Styles.mt1}>
          <Alert
            isOpen={alertPrimary}
            title="Titulo da mensagem"
            message="descrição da mensagem"
            backgroundType={Styles.bgPrimary}
            textColor={Styles.textWhite}
            iconCloseColor={Colors.WHITE}
            onPress={() => setAlertPrimary(false)}
          />
        </View>
        <View style={Styles.mt1}>
          <Alert
            isOpen={alertSecondary}
            title="Titulo da mensagem"
            message="descrição da mensagem"
            backgroundType={Styles.bgSecondary}
            textColor={Styles.textWhite}
            iconCloseColor={Colors.WHITE}
            onPress={() => setAlertSecondary(false)}
          />
        </View>
        <View style={Styles.mt1}>
          <Alert
            isOpen={alertSuccess}
            title="Titulo da mensagem"
            message="descrição da mensagem"
            backgroundType={Styles.bgSuccess}
            textColor={Styles.textWhite}
            iconCloseColor={Colors.WHITE}
            onPress={() => setAlertSuccess(false)}
          />
        </View>
        <View style={Styles.mt1}>
          <Alert
            isOpen={alertDanger}
            title="Titulo da mensagem"
            message="descrição da mensagem"
            backgroundType={Styles.bgDanger}
            textColor={Styles.textWhite}
            iconCloseColor={Colors.WHITE}
            onPress={() => setAlertDanger(false)}
          />
        </View>
        <View style={Styles.mt1}>
          <Alert
            isOpen={alertWarning}
            title="Titulo da mensagem"
            message="descrição da mensagem"
            backgroundType={Styles.bgWarning}
            textColor={Styles.textWhite}
            iconCloseColor={Colors.WHITE}
            onPress={() => setAlertWarning(false)}
          />
        </View>
        <View style={Styles.mt1}>
          <Alert
            isOpen={alertInfo}
            title="Titulo da mensagem"
            message="descrição da mensagem"
            backgroundType={Styles.bgInfo}
            textColor={Styles.textWhite}
            iconCloseColor={Colors.WHITE}
            onPress={() => setAlertInfo(false)}
          />
        </View>
        <View style={Styles.mt1}>
          <Alert
            isOpen={alertLight}
            title="Titulo da mensagem"
            message="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado"
            backgroundType={Styles.bgLight}
            textColor={Styles.textDark}
            iconCloseColor={Colors.BLACK}
            onPress={() => setAlertLight(false)}
          />
        </View>
        <View style={Styles.mt1}>
          <Alert
            isOpen={alertDark}
            title="Titulo da mensagem"
            message="descrição da mensagem"
            backgroundType={Styles.bgDark}
            textColor={Styles.textWhite}
            iconCloseColor={Colors.WHITE}
            onPress={() => setAlertDark(false)}
          />
        </View>
        {/** Alerts */}
      </View>
    </View>
  );
}
