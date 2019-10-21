import React, { Component } from 'react';
import axios from 'axios';

class postRequestDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      title:'',
      body:'',
    }
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then( resp => {
      console.log(resp);
    })
    .catch( error => {
      console.log(error);
    })
  }

  render() {
    const { userId, title, body} = this.state;
    return (
      <div>
        <p>User Form</p>
        <form onSubmit={this.submitHandler}>
          <div>
            UserId:
            <input 
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            Title:
            <input 
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            Body:
            <input 
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input 
              type="submit"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default postRequestDemo;
