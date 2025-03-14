import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import LoadingBar from "react-top-loading-bar";


export default class App extends Component {
  pageSize = 6;

  state = {
    progress : 0
  }

  setProgress = (progress) => {
    this.setState({
      progress:progress
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
        color="#f11946"
        progress={this.state.progress}
      />
          <Routes>
          <Route exact path="/" element={<News setProgress = {this.setProgress}   key="general" pageSize = {this.pageSize} headline = "General" category="general"/>} />
          <Route exact path="/Business" element={<News setProgress = {this.setProgress}   key="business" pageSize = {this.pageSize} headline = "Business" category="business"/>} />
          <Route exact path="/Entertainment" element={<News setProgress = {this.setProgress}  key="entertainment" pageSize = {this.pageSize} headline = "Entertainment" category="entertainment"/>} />
          <Route exact path="/Health" element={<News setProgress = {this.setProgress}   key="health" pageSize = {this.pageSize} headline = "Health" category="health"/>} />
          <Route exact path="/Science" element={<News setProgress = {this.setProgress}   key="science" pageSize = {this.pageSize} headline = "Science" category="science"/>} />
          <Route exact path="/Sports" element={<News setProgress = {this.setProgress}   key="sports" pageSize = {this.pageSize} headline = "Sports" category="sports"/>} />
          </Routes>
          </Router>
      </div>
    )
  }
}



