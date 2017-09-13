import React from "react"
export default class ListItem extends React.Component{
  constructor(props) {
    super(props)
  }
  handleSubmit() {
    this.props.onSelect(this.props.items.id)
  }
  render() {
    return(
      <li>
        <span>{this.props.items.text}</span>
        <a href="javascript:void(0)" onClick={this.handleSubmit.bind(this)} > select </a>
      </li>
    )
  }
}