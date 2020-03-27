import React, {Component} from 'react';
import Header from '../components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom'
import listNews from '../components/ListNews';


class App extends Component {
  render(){
    return (
        <div>
          <Header />
          <NavLink to='/' component ={listNews}/>  
          
        </div> 
    );
  }
}
export default App;
