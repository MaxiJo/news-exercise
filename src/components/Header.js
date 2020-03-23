import React from 'react';
import { Component} from 'react';
import logo from '../assets/image-placeholder-title.jpg';
import '../App.css';


export default class Header extends Component{
    render(){
        return(
            <div className ="header">
                <header>
                    <img 
                    src={logo} 
                    alt="Banner" 
                    /> 
                    <br/>
                    <p align ='center'>welcome to NBA news</p>
                </header>
            </div>       
        )
    }
}