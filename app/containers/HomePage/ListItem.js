import React from "react"
import LI from './Li'

export default class ListItem extends React.Component{
  constructor(props) {
    super(props)
  }
  handleSubmit() {
    this.props.onSelect(this.props.items.id)
  }
  render() {
    return(
      <LI>
        <span>{this.props.items.text}</span>
        <a href="javascript:void(0)" onClick={this.handleSubmit.bind(this)} > select </a>
      </LI>
    )
  }
}