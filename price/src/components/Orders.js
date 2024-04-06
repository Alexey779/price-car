import React, { Component } from 'react'
import { FaTrash } from "react-icons/fa";

export default class Orders extends Component {
  render() {
    return (
      <div className='item'>
<img alt="" src={"./img/" + this.props.item.img } />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price} руб</b>
        <FaTrash className='delite-icon' onClick={() => (this.props.onDelite(this.props.item.id))}/>
      </div>
    )
  }
}
