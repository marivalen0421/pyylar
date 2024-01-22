import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>PYYLAR</Header>
      <Paragraph>
        Toma de pedidos Pinturas y Yesos
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Ingresar
      </Button>
    </Background>
  )
}
