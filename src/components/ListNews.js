import React from 'react';
import { Component} from 'react';
import {  Card, CardImg, CardText, CardBody,
    CardTitle,  Button,  Col } from 'reactstrap';

export default class listNews extends Component{
    constructor(props){
        super(props);
        this.state={
          listNews:[],
        };
      }
    
    componentDidMount(){
        let url="http://localhost:3001/news"
        fetch(url)
          .then(resp => resp.json())
          .then(data => {
            let listNews = data.map((listNews,index) =>{
              return(
                <div key={index}>
                    <Col sm ='6' md={{offset : 3}} >
                        <Card>
                            <CardImg top width="50%" src={listNews.asset} alt="newsImg" />
                            <CardBody>
                            <CardTitle>{listNews.title}</CardTitle>
                            <CardText>{listNews.resume}</CardText>
                            <Button>read more...</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </div>   
              )
            })
            this.setState({listNews: listNews});
          })
      }
    
    render(){
        return(
            <div>
                {this.state.listNews}
            </div>
             
        )
    }
}