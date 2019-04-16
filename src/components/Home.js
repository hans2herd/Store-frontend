import React, { Component } from 'react'

export class Home extends Component {
    state = {
      inventory: []
    }
    
  render() {
      componentDidMount() {
        return fetch("http://localhost4000/")
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({ inventory: data })
    })
      }
      
    return (
      <div>
        
      </div>
    )
  }
}

export default Home