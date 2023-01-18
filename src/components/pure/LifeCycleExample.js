import React, { Component } from 'react'

export default class LifeCycleExample extends Component {
  constructor(props) {
    console.log('first')
  }
  componentWillMount() {
    console.log('WillMount:  Antes del montaje del componente')
  }

  componentDidMount() {
    console.log(
      'DidMount:  Justo antes del montaje del componente, antes del renderizado',
    )
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps:  Si va recibir props')
  }

  shouldComponentUpdate(nextProps, nextState) {
    //para controlar si el componente debe o no actualizarse
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate:  Justo antes de actualizarse')
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('componentDidUpdate:  Justo  despues de actualizarse')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount:  Justo antes de desaparecer')
  }

  render() {
    return <div>LifeCycleExample</div>
  }
}
