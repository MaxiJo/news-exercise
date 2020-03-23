import React, {Component} from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      listNews:[],
      //assets:[]
    };
  }

  componentDidMount(){
    //const assets = imageLoader()
    //this.setState({assets})
    let url="http://localhost:3001/news"
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let news = data.map((listNews,index) =>{
          return(
            <div  key={index}>
                <div style={{width:"40%"}}>
                  <img src={listNews.asset} alt ="newsimg"/>
                  
                </div>
                <div style={{width:"60%"}}>
                  <h2>{listNews.title}</h2><br/>
                  <p>{listNews.resume}</p>
                </div>
            </div>   
          )
        })
        this.setState({listNews: listNews});
      })
  }
  render(){
    return (
      <div>
        <Header />
        {this.state.listNews}
      </div>
    );
  }
}
export default App;
