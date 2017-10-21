import React, { Component } from 'react'
import './main'
import axios from 'axios'

export default class App extends Component {
  handleClick = () => {
    axios.get('/1.php?number=101')
      .then( res =>{
        console.log(res)
      })
      .catch( err => {
        console.log(err.status)
      })
  }
  render(){
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>请求</button>
    </div>
    )
  }
}
