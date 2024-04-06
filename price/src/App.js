import React from "react";
//import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],//в массив будем класть продукты-корзина
      curretItems :[], //будет хранить те элементы которые будут показаны пользователю
      items: [
        {
          id: 1,
          title: "ВАЗ-2101",
          img: "car1.jpeg",
          desc: "Выбери авто",
          category: "retro",
          price: "400000",
        },
        {
          id: 2,
          title: "ВАЗ 2107",
          img: "car2.jpeg",
          desc: "Выбери авто",
          category: "new-retro",
          price: "450000",
        },
        {
          id: 3,
          title: "ВАЗ 2121",
          img: "car3.jpeg",
          desc: "Выбери авто",
          category: "new-retro",
          price: "500000",
        },
        {
          id: 4,
          title: "ВАЗ 2114",
          img: "car4.jpeg",
          desc: "Выбери авто",
          category: "retro-next",
          price: "550000",
        },
        {
          id: 5,
          title: "ВАЗ 2141",
          img: "car5.jpeg",
          desc: "Выбери авто",
          category: "retro-style",
          price: "600000",
        },
      ],//массив продуктов
      showFull: false,//вывод модального(всплывающего окна о товаре)состояние 
      fullItem: {} //создаем обект для вывода полной информации о товаре
    };
    this.state.curretItems = this.state.items;//изначально мы будем загружать сюда все элементы из массива items
    this.addToOrders = this.addToOrders.bind(this);//можно взаимодействовать с состоянием
    this.deliteOrder = this.deliteOrder.bind(this);
  this.choosCategoris= this.choosCategoris.bind(this);//добавляем this в свой метод
  this.onShowItem= this.onShowItem.bind(this);//добавляем this в свой метод

}

  render() {
    return (
      <div className="wrapper">
        <Header order={this.state.orders} onDelite={this.deliteOrder}/>
        <Categories choosCategoris= {this.choosCategoris}/>
        <Items onShowItem = {this.onShowItem} items={this.state.curretItems} onAdd= {this.addToOrders}/*создаем свойство и передаем метод*//> 
        {this.state.showFull && <ShowFullItem item ={this.state.fullItem} onAdd= {this.addToOrders}  onShowItem = {this.onShowItem}/>/*создаем условие при катором проверяется если
        состояние true то выводиться компонент ShowFullItem */} 
        
        <Footer />
      </div>
    );
  }

  onShowItem(item){//при нажатии на элемент будет отображаться вся информация о товаре
    this.setState({fullItem: item})//передаем элемент в определенном состоянии
    this.setState({showFull: !this.state.showFull})
  }//метод который позволяет установить противоположное значение showFull


  choosCategoris(category) {
    if (category === 'all') { //проверяем  все категории
this.setState({curretItems: this.state.items})// добавляем все категории при нажатии на кнопку все
return //выходим из функции
    }
    this.setState({
      
      curretItems: this.state.items.filter(el => el.category === category)
    })
  }/*Создаем метод для категории*/ 
  deliteOrder(id) {
this.setState({orders:this.state.orders.filter(el => el.id !== id)})
  
  }
  addToOrders(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if ( el.id === item.id)
      isInArray = true;
    })
    if (!isInArray)
this.setState({orders: [...this.state.orders, item]})
  }//создаем метод для добавления товаров в корзину
}

export default App;
