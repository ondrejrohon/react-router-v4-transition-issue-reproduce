import React, { Component } from 'react'

class Transition extends Component {
  componentDidMount() {
    console.log('cdm')
  }

  componentWillEnter(cb) {
    console.log('will enter')
    cb()
  }

  componentWillAppear(cb) {
    console.log('will appear')
    cb()
  }

  render() {
    return this.props.children;
  }
}

export default Transition
