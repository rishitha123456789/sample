import React, { Component, createRef } from 'react'

export default class Ref extends Component {
    constructor(){
        super()
        this.state={
            name:""
        }
        // this.h1ref=createRef()
    }
    componentDidMount(){
        let input=document.querySelector('input')
        input.addEventListener("keypress",(e)=>{
            this.setState({name:e.target.value})
        })

    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <input type="text" />
      </div>
    )
  }
}
