import React, { Component } from 'react';

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
<div>
<form>            
  <div class="form-group">
    <label for="exampleInputEmail1">Login</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary mb-2">User Login</button>
  <br></br><br></br><br></br><br></br>
</form>
</div>
    );
  }
}
 
 export default App;
