import React, { Component } from 'react'
import PropTypes from 'prop-types'
import api from '~/services/Api'
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Styles from '~/styles/Styles'
import Colors from '~/styles/Colors'
import LinearGradient from 'react-native-linear-gradient'
import BottomSheet from 'react-native-raw-bottom-sheet'
import SeuProjeto from '~/components/generic-components/seu-projeto/SeuProjeto'
import TextInputDefault from '~/components/generic-components/text-input-default/TextInputDefault'
import ButtonDefault from '~/components/generic-components/button-default/ButtonDefault'

export default class Login extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  }

  state = {
    form: {
      email: '',
      senha: ''
    },
    loading: false,
    message: '',
    error: false,
    errorMessage: ''
  }

  checkUserExists = async (email, senha) => {
    const response = await api.post('/siteusers/login', {
      email,
      senha
    })
    return response.data
  }

  saveUser = async user => {
    await AsyncStorage.setItem(
      '@CartaoDaSaude:userLogged',
      JSON.stringify(user)
    )
  }

  signIn = async () => {
    const form = { ...this.state.form }
    const { email, senha } = this.state.form
    const { navigation } = this.props
    this.setState({ loading: true })

    try {
      if (email === '' || senha === '') {
        this.setState(
          {
            message: 'Preencha o e-mail e senha.',
            loading: false
          },
          () => {
            this.RBSheet.open()
          }
        )
      } else {
        const response = await this.checkUserExists(email, senha)
        if (response.success) {
          await this.saveUser(response.data[0])
          navigation.navigate('User')
          form.email = ''
          form.senha = ''
          this.setState({
            loading: false,
            form
          })
        } else {
          this.setState(
            {
              message: response.message,
              loading: false
            },
            () => {
              this.RBSheet.open()
            }
          )
        }
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: true,
        errorMessage: error
      })
    }
  }

  handleChange = (field, value) => {
    const form = { ...this.state.form }
    form[field] = value
    this.setState({ form })
  }

  navigateTo = page => {
    const { navigation } = this.props
    navigation.navigate(page)
  }

  closeBottonSheet = () => {
    this.RBSheet.close()
  }

  clearField = (field, state) => {
    const form = { ...this.state.form }
    field.clear()
    form[state] = ''
    this.setState({ form })
  }

  render() {
    return (
      <SeuProjeto
        title=""
        showHeader={false}
        ligthContent={false}
        enableContainer={false}
        backgroundStatusBar={Colors.COLOR_START}
        backgroundPage={Styles.bgDefault}
        enableScreenHeight={true}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 3 }}
          colors={[Colors.COLOR_START, Colors.COLOR_CENTER, Colors.COLOR_END]}
          style={[Styles.page, Styles.alignMiddle]}>
          <View style={Styles.container}>
            <View style={[Styles.alignCenter, Styles.mb5]}>
              <Text
                style={[
                  Styles.h5,
                  Styles.textWhite,
                  Styles.mt2,
                  Styles.textCenter
                ]}>
                Seja bem-vindo
              </Text>
            </View>
            <View style={[Styles.mt1, Styles.p4]}>
              <TextInputDefault
                label="Município"
                labelStyle={[Styles.textDark, Styles.h8]}
                placeholder="Selecione seu município"
                placeholderTextColor={Colors.SECONDARY}
                returnKeyType="next"
                keyboardType="default"
                autoCapitalize="words"
                autoCorrect={true}
                isFocused
                value=""
                style={[
                  Styles.textPrimary,
                  Styles.borderAll,
                  Styles.radius5,
                  Styles.borderSecondary
                ]}
                onChangeText={value => setPropertyStreet(value)}
              />

              <TextInputDefault
                label="Município"
                labelStyle={[Styles.textDark, Styles.h8]}
                placeholder="Selecione seu município"
                placeholderTextColor={Colors.SECONDARY}
                returnKeyType="next"
                keyboardType="default"
                autoCapitalize="words"
                autoCorrect={true}
                isFocused
                value=""
                style={[
                  Styles.textPrimary,
                  Styles.borderAll,
                  Styles.radius5,
                  Styles.borderSecondary
                ]}
                onChangeText={value => setPropertyStreet(value)}
              />

              <View style={Styles.mt2}>
                {this.state.loading ? (
                  <ActivityIndicator size="small" color={Colors.WHITE} />
                ) : (
                  <ButtonDefault
                    label="Salvar"
                    labelColor={Colors.PRIMARY}
                    btnColor={Styles.bgWhite}
                    btnSize={Styles.btnMd}
                    btnRadius={Styles.radius5}
                    outline
                    outlineColor={Styles.borderSuccess}
                    // onPress={() => handleSavePropertie()}
                  />
                )}
              </View>
              <View style={[Styles.row, Styles.mt3, Styles.pl2, Styles.pr2]}>
                <TouchableOpacity
                  style={Styles.col1}
                  hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                  onPress={() => this.navigateTo('CreateAccount')}>
                  <Text style={Styles.textWhite}>Criar conta</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[Styles.col1, Styles.alignRight]}
                  hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                  onPress={() => this.navigateTo('ForgotPassword')}>
                  <Text style={[Styles.textWhite]}>Esqueci a senha</Text>
                </TouchableOpacity>
              </View>
            </View>
            <BottomSheet
              ref={ref => {
                this.RBSheet = ref
              }}
              height={150}
              duration={200}
              closeOnDragDown={true}
              customStyles={{
                container: {
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10
                }
              }}>
              <View style={[Styles.container, Styles.pt5, Styles.pb5]}>
                <View style={Styles.pb5}>
                  <Text style={[Styles.h5, Styles.textCenter]}>
                    {this.state.message}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={this.closeBottonSheet}
                  hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
                  <Text style={[Styles.h7, Styles.textCenter]}>Fechar</Text>
                </TouchableOpacity>
              </View>
            </BottomSheet>
          </View>
        </LinearGradient>
      </SeuProjeto>
    )
  }
}
