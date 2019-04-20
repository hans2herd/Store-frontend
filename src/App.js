import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Inventory from './components/Inventory'

class App extends Component {
  
      state = {
      hoursWorked: "",
      username: "",
      users: []
    };


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify({ ...this.state })
    fetch("http://localhost:4000", {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json"
      }
    })
  }

  componentDidMount() {
    return fetch("http://localhost4000/")
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({ users: data })
    })
  }

  removeItem = (e) => {
    e.preventDefault();
    const data = JSON.stringify({ ...this.state })
    fetch("http://localhost:4000", {
      method: "DELETE",
      body: data,
      headers: {
        "Content-type": "application/json"
      }
    })
  }
  render() {

    console.log(this.state)


    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/inventory" component={Inventory} />
      </div>
    </BrowserRouter>
    )
  }
}


 
 export default App;
