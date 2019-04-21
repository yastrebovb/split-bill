import React, { Component } from 'react'
import Resizable from 're-resizable'
import '../PersonHandle/PersonHandle'
import PersonHandle from '../PersonHandle/PersonHandle'

class Person extends Component {
  state = {
    width: '100%',
    height: '100px',
    amount: 0,
    locked: false
  }

  componentWillMount() {
    this.setState({
      amount: this.props.amount
    })
  }

  update() {
    this.resizable.updateSize({
      width: this.state.width,
      height: this.state.height
    })
  }

  render() {
    return (
      <Resizable
        size={{
          width: this.state.width,
          height: this.state.height
        }}
        bounds={'parent'}
        enable={{
          top: false,
          right: false,
          bottom: true,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false
        }}
        style={{
          backgroundColor: 'grey',
          borderBottom: '1px solid black'
        }}
        handleStyles={{
          bottom: {
            width: '20px',
            height: '10px',
            left: 'none',
            right: '32px',
            bottom: '0',
            zIndex: 1
          }
        }}
        onResize={(e, direction, ref, d) => {
          this.update()
          console.log(d)
          if (!this.state.locked) {
            if (d.height < 0) {
              this.setState({
                amount: this.state.amount - 1
              })
            } else {
              this.setState({
                amount: this.state.amount + 1
              })
            }
            this.setState({
              width: this.state.width + d.width,
              height: this.state.height + d.height
            })
          }
        }}
        handleComponent={{ bottom: PersonHandle }}
        resizing={this.state.locked}
        ref={c => {
          this.resizable = c
        }}
      >
        {this.state.amount}
      </Resizable>
    )
  }
}

export default Person
