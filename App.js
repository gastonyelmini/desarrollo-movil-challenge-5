import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ejercicio1 from './src/Ejercicio1'
import Ejercicio2 from './src/Ejercicio2'
import Ejercicio3 from './src/Ejercicio3'
import Ejercicio4 from './src/Ejercicio4'
import Ejercicio5 from './src/Ejercicio5'

export default class App extends React.Component {
  render() {
    // return <Ejercicio1 />
    // return <Ejercicio2 />
    // return <Ejercicio3 />
    // return <Ejercicio4 />
    return <Ejercicio5 style={styles.grande} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grande: {
    width: 100,
    height: 100
  },
})
