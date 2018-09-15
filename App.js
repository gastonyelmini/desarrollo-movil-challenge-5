import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ejercicio1 from './src/Ejercicio1'
import Ejercicio2 from './src/Ejercicio2'
import Ejercicio3 from './src/Ejercicio3'

export default class App extends React.Component {
  render() {
    // return <Ejercicio1 />
    // return <Ejercicio2 />
    return <Ejercicio3 />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
