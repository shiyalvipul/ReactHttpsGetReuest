import React, { Component } from 'react';
import axios from 'axios';

class getRequestDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      getData: [],
      errorMsg:'',
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
      console.log(response);
      this.setState({ getData: response.data })
    })
    .catch( error => {
      console.log(error);
      this.setState({ errorMsg: 'Error retreiving data' })

    })
  }

  render() {
    const { getData, errorMsg } =  this.state;
    return (
      <div>
       {
        getData ?
        getData.map(getData => <div key={getData.id}>{getData.title}</div>)
        : null 
       }
       {
         errorMsg ? <div>{errorMsg}</div> : null
       }
      </div>
    )
  }
}

export default getRequestDemo;
