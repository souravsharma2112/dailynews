import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pagesize = 6
  state = {
    progress: 10 
  }
  setProgress = (progress) => {
    this.setState({progress:progress})
  }
  changeTheme= async () =>{
    document.body.style.backgroundColor="grey";
    console.log("herllo");
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            // color='orange'
            color='gold'
            progress={this.state.progress}
            height={3}
          />
          <Navbar changeTheme={this.changeTheme} />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} pageSize={this.pagesize} key="home" country="us" category="general" /></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} pageSize={this.pagesize} key="business" country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} pageSize={this.pagesize} key="entertainment" country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News setProgress={this.setProgress} pageSize={this.pagesize} key="general" country="in" category="general" /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} pageSize={this.pagesize} key="sports" country="in" category="sports" /></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} pageSize={this.pagesize} key="health" country="in" category="health" /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} pageSize={this.pagesize} key="science" country="in" category="science" /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} pageSize={this.pagesize} key="technology" country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
