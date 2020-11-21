import React, { Component } from 'react';
import Item from './components/Item';
import Button from './components/Button';
import Navbar from './components/Navbar.jsx';
import _ from 'lodash';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data : [
        {
          image : "tarjetagrafica.png",
          name  : "Tarjeta Grafica",
          portion : "Disponibles",
          price   : 40
        }
      ]
    }
  }

  _remove(position){
    let { data } = this.state;

    let newData = [
      ...data.slice(0, position),
      ...data.slice(position + 1),
    ]

    this.setState({ data : newData });

  }

  _add(){
    let { data } = this.state;
    let newData = [
      ...data,
      {
        image : "Monitor.png",
        name  : "Monitor",
        portion : "Disponibles",
        price   : Math.floor(Math.random() * 20) 
      }
      
    ]
    this.setState({ data : newData });
  }

  _getTotal(){
    return _.sumBy(this.state.data, function(o) { return o.price; });;
  }


  render() {
    return (
      
      <div className="app">
<Navbar/>
        <h1>Productos</h1>
        <ul className="todo-list">
          {this.state.data.map(
            (item,index) =>
              <Item data={item} key={index} onRemove={ () => this._remove(index)} />
            
              )

          }
        </ul>
        <div className="footer">
          <Button
            onClick={this._add.bind(this)}
            name="Añadir producto"
          />
          <h4>$ {this._getTotal()}</h4>
        </div>
      </div>
    );
  }
}

export default App;
