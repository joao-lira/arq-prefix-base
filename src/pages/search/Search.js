import React, { useState, Fragment } from 'react'
import { View, Text, FlatList } from 'react-native'
import { NavigationEvents } from 'react-navigation'

// COMPONENTS
import Icon from '~/components/generic-components/icon/Icon'
import SeuProjeto from '~/components/generic-components/seu-projeto/SeuProjeto'
import SearchGradient from '~/components/generic-components/search-gradient/SearchGradient'
import SearchItem from '~/components/page-components/search/SearchItem'
import Styles from '~/styles/Styles'
import Colors from '~/styles/Colors'

const TabIcon = ({ tintColor }) => (
  <Icon antDesign name="search1" size={20} color={tintColor} />
)

Search.navigationOptions = {
  tabBarIcon: TabIcon,
  title: 'Pesquisar'
}
export default function Search({ navigation }) {
  const [isFecthing, setIsFeching] = useState(false)
  const [properties, setProperties] = useState([
    {
      id: 1,
      nm: '20 Bi',
      pa: 'Bididobacterium Lactis + Lactobacillus Acidophillus',
      img:
        'https://img.drogasil.com.br/catalog/product/c/o/complemento_alimentar_infantil_sustagen_kids_baunilha_4210201097891.jpg?width=170&height=170&quality=85&type=resize'
    },
    {
      id: 2,
      nm: 'Aas',
      pa: 'Ácido Acetilsalicílico',
      img:
        'https://s3.amazonaws.com/images.medipreco.com.br/products/7896016806414.png'
    },
    {
      id: 3,
      nm: 'Ablok',
      pa: 'Atenolol',
      img:
        'http://www.camilaroza.com.br/wp-content/uploads/2017/02/Sem-T%C3%ADtulo-1.png'
    },
    {
      id: 4,
      nm: 'Ablok Plus',
      pa: 'Atenolol + Clortalidona',
      img: 'https://cdn1.staticpanvel.com.br/produtos/15/90093-15.jpg?ims=700x'
    },
    {
      id: 5,
      nm: 'Abretia',
      pa: 'Cloridrato de Duloxetina',
      img:
        'https://img.drogasil.com.br/catalog/product/k/i/kit-complemento-alimentar-infantil-sustagen-kids-sabor-chocolate-380g-7898941911898-_1_.jpg?width=170&height=170&quality=85&type=resize'
    },
    {
      id: 6,
      nm: 'Abretia',
      pa: 'Cloridrato de Duloxetina',
      img:
        'https://img.drogasil.com.br/catalog/product/s/u/supra_c_kids.jpg?width=170&height=170&quality=85&type=resize'
    },
    {
      id: 7,
      nm: 'Abretia',
      pa: 'Cloridrato de Duloxetina',
      img:
        'https://img.drogasil.com.br/catalog/product/p/e/pediasure_morango_900g_8881_0.png?width=170&height=170&quality=85&type=resize'
    },
    {
      id: 8,
      nm: 'Abretia',
      pa: 'Cloridrato de Duloxetina',
      img:
        'https://img.drogasil.com.br/catalog/product/m/i/milnutri_composto_l_cteo_infantil_soja_danone_800g_1_.jpg?width=170&height=170&quality=85&type=resize'
    },
    {
      id: 9,
      nm: 'Abretia',
      pa: 'Cloridrato de Duloxetina',
      img:
        'https://img.drogasil.com.br/catalog/product/s/u/suplemento_alimentar_fortini_sabor_baunilha_400g_danone_1_.jpg?width=170&height=170&quality=85&type=resize'
    },
    {
      id: 10,
      nm: 'Abretia 2',
      pa: 'Cloridrato de Duloxetina',
      img:
        'https://img.drogasil.com.br/catalog/product/n/u/nurtren_kids.jpg?width=170&height=170&quality=85&type=resize'
    }
  ])

  function navigateToPage(page) {
    navigation.navigate(page)
  }

  return (
    <Fragment>
      {/** Search */}
      <View style={[Styles.mt5, Styles.container]}>
        <View style={Styles.mt3}>
          <SearchGradient autoFocus />
        </View>
      </View>
      {/** Search */}
      <SeuProjeto
        enableContainer
        ligthContent
        backgroundStatusBar={Colors.WHITE}
        backgroundColor={Colors.WHITE}
        scrollEnabled={false}>
        <NavigationEvents
          onWillFocus={() => {
            // getProperties();
          }}
        />

        <View style={Styles.row}>
          <View style={Styles.col1}>
            <View>
              {isFecthing ? (
                <SearchItem isFecthing={isFecthing} shimmerCount={3} />
              ) : properties.length === 0 ? (
                <Text>Sem nada aqui</Text>
              ) : (
                <FlatList
                  data={properties}
                  keyExtractor={item => String(item.id)}
                  extraData={properties}
                  renderItem={({ item, index }) => (
                    <SearchItem
                      isFecthing={isFecthing}
                      propertie={item}
                      shimmerCount={3}
                    />
                  )}
                  showsVerticalScrollIndicator={false}
                />
              )}
            </View>
          </View>
        </View>
      </SeuProjeto>
    </Fragment>
  )
}
