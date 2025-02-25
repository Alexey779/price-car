import React, { Component } from 'react'

export default class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
<img alt="" src={"./img/" + this.props.item.img } onClick={() => this.props.onShowItem(this.props.item)/*
        навешиваем обработчик события и вызываем метод на картинке*/}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price} руб</b>
        <div className="add-to-card" onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
      </div>
    )
  }
}
