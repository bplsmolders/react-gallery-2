import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

//import components
import Nav from './components/Nav';
import Photo from './components/Photo';
import SearchForm from './components/SearchForm'


class App extends Component {  
  render() {    
    return (
      <BrowserRouter>
        <div className="container" >
          <Route  component= {SearchForm} />
          <Nav />
          <div class="photo-container">
            <h2>Results</h2>
            <Route path="/:topic" component={Photo} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
