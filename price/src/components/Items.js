import React, { Component } from 'react'
import Item from './Item';



export class Items extends Component {
  render() {
    return (
        <main>
{this.props.items.map(el => (
    <Item onShowItem = {this.props.onShowItem}//передаем свойства из компонента родителя
    key={el.id} item={el} onAdd={this.props.onAdd}/>
))}

        </main>

    )
  }
}

export default Items;