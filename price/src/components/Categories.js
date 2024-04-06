

import React, { Component } from 'react'

export default class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                   key: 'all' ,
                   name: 'Все'
                },
                {
                    key: "retro" ,
                    name: 'Ретро'
                 },
                 {
                    key: 'new-retro' ,
                    name: 'Новое ретро'
                 },
                 {
                    key: 'retro-style' ,
                    name: 'Ретро стиль'
                 },
                 {
                    key: 'retro-next' ,
                    name: 'Следующие ретро'
                 }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.choosCategoris(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}
