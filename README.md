# Arqprefix - React Native

> _Arqprefix nada mais é que, utilizar prefixos para empacotar suas jornadas/módulos/pacotes/componentes e etc..._

Objetivos

- Ser simples :wink: (fundamental)
- Ter a menor curva para a sintonia de novos devs com o time
- Pense no próximo (sabemos que você é fera! Mas, outros devs vão entender o que vc produziu?)
- Clean Code de ponta-a-ponta

> Com a Arqprefix aplicada você terá este resultado. Com um simples <code>ctrl + p</code> | <code>command + p</code> no vs code, você enxerga a sua jornada e os componentes dela de ponta a ponta

![](/images/search.png)

#### Mão na massa!

<details>
  <summary>Entenda a estrutura</summary>
  <br />

Importante!

> 1.  Diretórios sempre em minúsculo separados por hífen
> 2.  Componentes/Arquivos com inicial maiúscula CamelCase
>     Ex: nome-da-pasta/NomeDoComponente.js

![](/images/estrutura.png)

1. page-components -> Recebe os componentes de uma página
2. page -> é o diretório das suas páginas
3. Estes dois diretórios seguem unidos

</details>

<details>
  <summary>Organizando <b>Rotas</b> preparadas para o crescimento do seu projeto</summary>
  <br />
 
  ```javascript
  import { createAppContainer } from 'react-navigation'
  import { createStackNavigator } from 'react-navigation-stack'

  import Login from '~/pages/login/Login'
  import ShowCase from '~/pages/showcase/ShowCase'

  // ROUTES
  import TabsHome from '~/routes/tabs/TabsHome'

  const createRootNavigator = (userLogged = false) =>
    createAppContainer(
      createStackNavigator(
        {
          Login,
          ShowCase,
          Home: TabsHome
        },
        {
          initialRouteName: !userLogged ? 'Home' : 'Login',
          defaultNavigationOptions: {
            gesturesEnabled: true
          },
          headerMode: 'none'
        }
      )
    )
  export default createRootNavigator
  ```

</details>

<!-- ################ -->
<details>
<summary>Estrutura no formato State ou Hooks?</summary>

#### State(não recomendado)

```javascript
import React from 'react'
import { View, Text } from 'react-native'
class Profile extends React.Component {
  state = {
    data: [],
    form: {
      name: '',
      email: ''
    }
  }

  componentDidMount() {
    this.handleChange('name', 'João Paulo Lira')
    this.handleChange('email', 'joaopauloliira@gmail.com')
  }

  handleChange = (fieldname, value) => {
    const form = { ...form }
    form[fieldname] = value
    this.setState({ form })
  }

  render() {
    return (
      <View>
        <Text>Componente profile</Text>
        {this.state.name}
        {this.state.email}
      </View>
    )
  }
}

export default Profile
````

Problemas

1. Se, por engano vc usar o this.setState([]) (com um array vazio) vc vai limpar todas as suas variáveis :grimacing:
2. As suas variáveis ficam contidas em um único objeto(State)

#### Hooks

Já com os Hooks, a criação da variável já acompanha uma função única de atribuição de valor, sendo assim somente ela irá atribuir valor à sua variável.

```javascript
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

export default function Profile() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    setName('João Paulo Lira')
    setEmail('joaopaullolyra@hotmail.com')
  }, [])

  return (
    <View>
      <Text>Componente profile</Text>
      {name}
      {email}
    </View>
  )
}
```

</details>

<details>
  <summary>Criando uma view e colocando no seu arquivo de <b>rotas</b></summary>
  <br />

  Em breve...

</details>

<!-- ################ -->
<details>
  <summary>Utilizando componentes genéricos</summary>
  <br/>

  Em breve...

</details>

<!-- ################ -->
<details>
  <summary>Criar componente ou <code>ctrl+c ctrl+v</code> em tudo?</summary>
  <br/>

  Em breve...

</details>
````
