import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import Cuadrado from './Cuadrado'

export default class EjemploFlex extends Component {
  render() {
    const { style } = this.props

    return (
      <View style={styles.container}>
        <Cuadrado style={[styles.uno, style]} grande />
        <Cuadrado style={[styles.dos, style]} />
        <Cuadrado style={[styles.tres, style]} />
        <Cuadrado style={[styles.cuatro, style]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginVertical: 40,
    backgroundColor: '#ddd',
  },

  uno: {
    backgroundColor: 'red',
  },

  dos: {
    backgroundColor: 'blue',
  },

  tres: {
    backgroundColor: 'green',
  },

  cuatro: {
    backgroundColor: 'pink',
  },
})
