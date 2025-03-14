import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
  myStyle = {
    color:'white',
    fontWeight: 'bold'
  }
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid navContainer"style={{backgroundColor:'#097BED'}}>
                  <Link className="navbar-brand change" style={this.myStyle} to="/"><span style={{color:'yellow'}}>Exact </span>News</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse nav navbar-collapse" style={{backgroundColor:'#097BED', height:"4rem"}} id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item change"><Link className="nav-link active" style={this.myStyle} aria-current="page" to="/">Home</Link></li>
                      <li className="nav-item change"><Link className="nav-link active" style={this.myStyle} aria-current="page" to="/Business">Business</Link></li>
                      <li className="nav-item change"><Link className="nav-link active" style={this.myStyle} aria-current="page" to="/Entertainment">Entertainment</Link></li>
                      <li className="nav-item change"><Link className="nav-link active" style={this.myStyle} aria-current="page" to="/Health">Health</Link></li>
                      <li className="nav-item change"><Link className="nav-link active" style={this.myStyle} aria-current="page" to="/Science">Science</Link></li>
                      <li className="nav-item change"><Link className="nav-link active" style={this.myStyle} aria-current="page" to="/Sports">Sports</Link></li>
                  </ul>
                  </div>
            </div>
          </nav>
      </div>    
    )
  }
}

export default Navbar
