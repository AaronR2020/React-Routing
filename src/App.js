import './App.css';
import React from 'react';
import NavBar from './pages/NavBar';
import SideBar from './pages/SideBar.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home.js';
import Article from './pages/article.js';
import People from './pages/people.js';
import Books from './pages/books.js';
import Help from './pages/Help.js';
import Indiv from './pages/indivArt.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active:'',
      }
  }
  activeState=(activeVal)=>{
    this.setState({
      active:activeVal,
    })
  }
  
  NotFoundPage = () => {
     return <h1>404 Page NotFound</h1>;
  }

  render() { 
    return ( 
    <>
      <NavBar/>
      <div className='flex-row'>
      <BrowserRouter>
      <SideBar/> 
      <Switch>
      <Route path='/home' component={Home}/>
      <Route path='/Article' component={Article} exact/>
      <Route path='/People' component={People}/>
      <Route path='/Books' component={Books}/>
      <Route path='/Help' component={Help}/>
      <Route path='/Article/:id' component={Indiv}/>
      <Route component={this.NotFoundPage} />
      </Switch>
      </BrowserRouter>
      </div>
      
    </> );
  }
}
 
export default App;

