import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from './Colors';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    marginHorizontal: 15,
  },
  statusBarHeight: {
    paddingTop: Platform.OS === 'ios' ? 40 : 42 + getStatusBarHeight(true),
  },
  headerHeight: {
    height: 80,
  },
  screenHeight: {
    height: Dimensions.get('screen').height,
  },
  screenWidth: {
    width: Dimensions.get('screen').width,
  },
  windowHeight: {
    height: Dimensions.get('window').height,
  },
  block: {
    width: '100%',
  },
  card: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  /**
   * ########################################
   * SHADOWS
   * ########################################
   */
  shadowXs: {
    elevation: 2,
  },
  shadowSm: {
    elevation: 5,
  },
  shadowMd: {
    elevation: 10,
  },
  shadowLg: {
    elevation: 15,
  },
  shadowXl: {
    elevation: 20,
  },

  /**
   * ########################################
   * RADIUS
   * ########################################
   */
  radius5: {
    borderRadius: 5,
  },
  radius10: {
    borderRadius: 10,
  },
  radius50: {
    borderRadius: 50,
  },

  /**
   * ########################################
   * BACKGROUNDS
   * ########################################
   */
  bgPrimary: {
    backgroundColor: Colors.PRIMARY,
  },
  bgSecondary: {
    backgroundColor: Colors.SECONDARY,
  },
  bgSuccess: {
    backgroundColor: Colors.SUCCESS,
  },
  bgDanger: {
    backgroundColor: Colors.DANGER,
  },
  bgWarning: {
    backgroundColor: Colors.WARNING,
  },
  bgInfo: {
    backgroundColor: Colors.INFO,
  },
  bgLight: {
    backgroundColor: Colors.LIGHT,
  },
  bgDark: {
    backgroundColor: Colors.DARK,
  },
  bgWhite: {
    backgroundColor: Colors.WHITE,
  },
  bgDefault: {
    backgroundColor: Colors.BACKGROUND_DEFAULT,
  },
  bgGrayLigthen1: {
    backgroundColor: Colors.GREY_LIGHTEN_1,
  },
  bgGrayLigthen2: {
    backgroundColor: Colors.GREY_LIGHTEN_2,
  },
  bgGrayLigthen3: {
    backgroundColor: Colors.GREY_LIGHTEN_3,
  },
  bgGrayLigthen4: {
    backgroundColor: Colors.GREY_LIGHTEN_4,
  },
  bgGrayLigthen5: {
    backgroundColor: Colors.GREY_LIGHTEN_5,
  },
  bgGrayLigthen6: {
    backgroundColor: Colors.GREY_LIGHTEN_6,
  },

  /**
   * ########################################
   * ALIGMENTS
   * ########################################
   */
  alignMiddle: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  alignEnd: {
    justifyContent: 'flex-start',
  },

  /**
   * ########################################
   * TEXTS
   * ########################################
   */
  textItalic: {
    fontStyle: 'italic',
  },
  textVertical: {
    transform: [{ rotate: '-90deg' }],
  },

  /**
   * ########################################
   * TEXT COLORS
   * ########################################
   */
  textPrimary: {
    color: Colors.PRIMARY,
  },
  textSecondary: {
    color: Colors.SECONDARY,
  },
  textSuccess: {
    color: Colors.SUCCESS,
  },
  textDanger: {
    color: Colors.DANGER,
  },
  textWarning: {
    color: Colors.WARNING,
  },
  textInfo: {
    color: Colors.INFO,
  },
  textLight: {
    color: Colors.LIGHT,
  },
  textDark: {
    color: Colors.DARK,
  },
  textGreyLigthen1: {
    color: Colors.GREY_LIGHTEN_1,
  },
  textGreyLigthen2: {
    color: Colors.GREY_LIGHTEN_2,
  },
  textGreyLigthen3: {
    color: Colors.GREY_LIGHTEN_3,
  },
  textGreyLigthen4: {
    color: Colors.GREY_LIGHTEN_4,
  },
  textGreyLigthen5: {
    color: Colors.GREY_LIGHTEN_5,
  },
  textGreyLigthen6: {
    color: Colors.GREY_LIGHTEN_6,
  },
  textWhite: {
    color: Colors.WHITE,
  },

  /**
   * ########################################
   * DIVIDERS
   * ########################################
   */
  divider: {
    borderBottomColor: Colors.GREY_LIGHTEN_4,
    borderBottomWidth: 0.8,
  },

  /**
   * ########################################
   * AVATARS
   * ########################################
   */
  avatarXs: {
    width: 20,
    height: 20,
  },
  avatarSm: {
    width: 30,
    height: 30,
  },
  avatarMd: {
    width: 40,
    height: 40,
  },
  avatarLg: {
    width: 50,
    height: 50,
  },
  avatarXl: {
    width: 70,
    height: 70,
  },

  /**
   * ########################################
   * OPACITY COLOR
   * ########################################
   */
  opacityColor1: {
    color: Colors.OPACITY_1,
  },
  opacityColor2: {
    color: Colors.OPACITY_2,
  },
  opacityColor3: {
    color: Colors.OPACITY_3,
  },
  opacityColor4: {
    color: Colors.OPACITY_4,
  },
  opacityColor5: {
    color: Colors.OPACITY_5,
  },
  opacityColor6: {
    color: Colors.OPACITY_6,
  },
  opacityColor7: {
    color: Colors.OPACITY_7,
  },
  opacityColor8: {
    color: Colors.OPACITY_8,
  },

  /**
   * ########################################
   * OPACITY
   * ########################################
   */
  opacity1: {
    opacity: 0.1,
  },
  opacity2: {
    opacity: 0.2,
  },
  opacity3: {
    opacity: 0.3,
  },
  opacity4: {
    opacity: 0.4,
  },
  opacity5: {
    opacity: 0.5,
  },
  opacity6: {
    opacity: 0.6,
  },
  opacity7: {
    opacity: 0.7,
  },
  opacity8: {
    opacity: 0.8,
  },

  /**
   * ########################################
   * MARGINS
   * ########################################
   */
  // ALL
  m0: { margin: 0 },
  m1: { margin: 10 },
  m2: { margin: 15 },
  m3: { margin: 20 },
  m4: { margin: 25 },
  m5: { margin: 30 },
  // TOP
  mt1: { marginTop: 10 },
  mt2: { marginTop: 15 },
  mt3: { marginTop: 20 },
  mt4: { marginTop: 25 },
  mt5: { marginTop: 30 },
  // RIGHT
  mr1: { marginRight: 10 },
  mr2: { marginRight: 15 },
  mr3: { marginRight: 20 },
  mr4: { marginRight: 25 },
  mr5: { marginRight: 30 },
  // BOTTOM
  mb1: { marginBottom: 10 },
  mb2: { marginBottom: 15 },
  mb3: { marginBottom: 20 },
  mb4: { marginBottom: 25 },
  mb5: { marginBottom: 30 },
  // LEFT
  ml1: { marginLeft: 10 },
  ml2: { marginLeft: 15 },
  ml3: { marginLeft: 20 },
  ml4: { marginLeft: 25 },
  ml5: { marginLeft: 30 },

  /**
   * ########################################
   * PADDINGS
   * ########################################
   */
  // ALL
  p0: { padding: 0 },
  p1: { padding: 10 },
  p2: { padding: 15 },
  p3: { padding: 20 },
  p4: { padding: 25 },
  p5: { padding: 30 },
  // TOP
  pt1: { paddingTop: 10 },
  pt2: { paddingTop: 15 },
  pt3: { paddingTop: 20 },
  pt4: { paddingTop: 25 },
  pt5: { paddingTop: 30 },
  // RIGHT
  pr1: { paddingRight: 10 },
  pr2: { paddingRight: 15 },
  pr3: { paddingRight: 20 },
  pr4: { paddingRight: 25 },
  pr5: { paddingRight: 30 },
  // BOTTOM
  pb1: { paddingBottom: 10 },
  pb2: { paddingBottom: 15 },
  pb3: { paddingBottom: 20 },
  pb4: { paddingBottom: 25 },
  pb5: { paddingBottom: 30 },
  // LEFT
  pl1: { paddingLeft: 10 },
  pl2: { paddingLeft: 15 },
  pl3: { paddingLeft: 20 },
  pl4: { paddingLeft: 25 },
  pl5: { paddingLeft: 30 },

  /**
   * ########################################
   * COLUMNS
   * ########################################
   */
  col1: { flex: 1 },
  col2: { flex: 2 },
  col3: { flex: 3 },
  col4: { flex: 4 },
  col5: { flex: 5 },
  col6: { flex: 6 },
  col7: { flex: 7 },
  col8: { flex: 8 },
  col9: { flex: 9 },
  col10: { flex: 10 },
  col11: { flex: 11 },
  col12: { flex: 12 },

  /**
   * ########################################
   * BORDERS
   * ########################################
   */
  borderAll: {
    borderWidth: 0.8,
  },
  borderTop: {
    borderTopWidth: 0.8,
  },
  borderRight: {
    borderRightWidth: 0.8,
  },
  borderBottom: {
    borderBottomWidth: 0.8,
  },
  borderLeft: {
    borderLeftWidth: 0.8,
  },

  /**
   * ########################################
   * BORDERS COLORS
   * ########################################
   */
  borderPrimary: {
    borderColor: Colors.PRIMARY,
  },
  borderSecondary: {
    borderColor: Colors.SECONDARY,
  },
  borderSuccess: {
    borderColor: Colors.SUCCESS,
  },
  borderDanger: {
    borderColor: Colors.DANGER,
  },
  borderWarning: {
    borderColor: Colors.WARNING,
  },
  borderInfo: {
    borderColor: Colors.INFO,
  },
  borderLight: {
    borderColor: Colors.LIGHT,
  },
  borderDark: {
    borderColor: Colors.DARK,
  },

  /**
   * ########################################
   * TIPOGRAFY
   * ########################################
   */
  h1: {
    fontSize: 48,
  },
  h2: {
    fontSize: 44,
  },
  h3: {
    fontSize: 39,
  },
  h4: {
    fontSize: 33,
  },
  h5: {
    fontSize: 28,
  },
  h6: {
    fontSize: 23,
  },
  h7: {
    fontSize: 19,
  },
  h8: {
    fontSize: 15,
  },
  h9: {
    fontSize: 11,
  },
  h10: {
    fontSize: 8,
  },
  bold: {
    fontWeight: 'bold',
  },

  /**
   * parei aqui *************
   */
  btnBorder: {
    borderWidth: 1,
  },
  btnBorderWhite: {
    borderColor: Colors.WHITE,
  },
  btnBorderBlue: {
    borderColor: Colors.DANGER,
  },
  borderBlack: {
    borderColor: Colors.BLACK,
  },
  borderWhite: {
    borderColor: Colors.WHITE,
  },
  fixedHeader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  fixedFooter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  btnXxs: {
    padding: 1,
  },
  btnXs: {
    padding: 2,
  },
  btnSm: {
    padding: 5,
  },
  btnMd: {
    padding: 10,
  },
  btnLg: {
    padding: 13,
  },

  /**
   * GLOBALS
   */
  width60: {
    width: 60,
  },
  height60: {
    height: 60,
  },
  positionTextFloatingButtonBottomRight: {
    position: 'absolute',
    right: 20,
    bottom: 85,
  },
  positionFloatingButtonBottomRight: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});

export default Styles;
