import React from 'react';
import { Component} from 'react';
import '../App.css';


export default class News extends Component{
    componentDidMount(){
        //const assets = imageLoader()
        //this.setState({assets})
        let url="http://localhost:3001/news/:id"
        fetch(url)
          .then(resp => resp.json())
          .then(data => {
            let news = data.map((news,index) =>{
              return(
                <div  key={index}>
                    <div style={{width:"40%"}}>
                      <img src={news.asset} alt ="newsimg"/>
                      
                    </div>
                    <div style={{width:"60%"}}>
                      <h2>{news.title}</h2><br/>
                      <p>{news.contents}</p>
                    </div>
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