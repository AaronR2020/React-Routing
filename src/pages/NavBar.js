import './navbar.css';
import React from 'react';
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <>
          <nav>
            <span className='nav_dash'><i class="fas nav_icon fa-layer-group"></i>Dashboard</span>   
            
          <form action='#' method='post'>
              <input type='text' placeholder='Search Documentation ...'/>
          </form>
          
          </nav>
        </> );
    }
}
 
export default NavBar;