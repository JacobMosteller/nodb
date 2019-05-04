import React, {Component} from 'react';
import Songlist from './views/song_list/songlist'
import './App.css';
import axios from 'axios';
import Header from './Header.js';

class App extends Component{
  constructor(){
    super()

  }

  componentDidMount(){
    axios.get('/api/test')
    .then((res)=>{
      console.log(res.data)
    })
  }

  render(){
    return(
      <div className = 'App'>
        <Header/>
        <Songlist/>
      </div>
    )
  }
}
export default App;
