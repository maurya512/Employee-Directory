import React from 'react';
import "./App";
import axios from "axios";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

class App extends React.Component{
  state = {
    employees: []
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=200&nat=us")
    .then(res => {
      this.setState({ employees: res.data.results});
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        {this.state.employees.length > 0 &&
        <Navbar employees={this.state.employees}></Navbar>}
      </div>
    );
  }
}


export default App;
