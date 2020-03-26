import React from 'react';
import { Component} from 'react';
import {  Card, CardImg, CardText, CardBody,
  CardTitle, Col } from 'reactstrap';

export default class News extends Component{
  constructor(props){
    super(props);
    this.state={
      news:[],
    };
  }  
  componentDidMount(){
        let url=`http://localhost:3001/news/`
        fetch(url)
          .then(resp => resp.json())
          .then(data => {
            let news = data.map((news,key) =>{
              return(
                <div key={key}>
                  <Col sm ='6' md={{offset : 3}} >
                    <Card>
                        <CardImg top width="50%" src={news.asset} alt="newsImg" />
                        <CardBody>
                        <CardTitle>{news.title}</CardTitle>
                        <CardText>{news.contents}</CardText>
                        </CardBody>
                    </Card>
                  </Col>
              </div>
                
              )
            })
            this.setState({news: news});
          })
      }
    render(){
        return(
              <div >
                  {this.state.news}
              </div>      
        )
    }
}