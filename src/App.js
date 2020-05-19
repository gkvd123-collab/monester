import React, { Component } from 'react';
import './App.css';
import {CardList} from'./component/card-list/card-list.component'
import {SearchBox} from'./component/search-box/search-box.component'

class App extends Component {
  constructor(){
    super();
    this.state={
      monester:[],
      searchText:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())
    .then(res=>this.setState({monester:res}));
  }
  handleChange=(e)=>this.setState({searchText:e.target.value})
  render(){
    const { monester,searchText }=this.state;
    const filteredMonester=monester.filter(result=>result.name.toLowerCase().includes(searchText.toLowerCase()));
  return (
    <div className="App">
     
        <SearchBox 
        placeholder="search monester"
         handleChange={this.handleChange}
        />
      <CardList monestor={filteredMonester} />
    </div>
  );
  }
}

export default App;
