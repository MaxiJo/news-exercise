import React from 'react';
import { Component} from 'react';
import logo from '../assets/image-placeholder-title.jpg';
import { Container, Row, Col } from 'reactstrap';


export default class Header extends Component{
    render(){
        return(
            <Container>
                <Row xs='1'>
                    <Col md={{ offset: 2 }}>
                        <img 
                            src={logo} 
                            alt="Banner" 
                        />
                    </Col>
                    <Col><p align ='center'>welcome to NBA news</p></Col>    
                </Row>
                
            </Container>
                  
        )
    }
}