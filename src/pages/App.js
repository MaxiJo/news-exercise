import React, {Component} from 'react';
import Header from '../components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom'
import listNews from '../components/ListNews';
import News from './News'


class App extends Component {
  render(){
    return (
        <div>
          <Header />
          <NavLink to='/' component ={listNews}/>   
          <NavLink to='/' component ={News}/>  
          
        </div> 
    );
  }
}
export default App;
