import './SideBar.css';
import React from 'react';
import {Link} from 'react-router-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <>
        <div className='side-bar'>
            <ul className='side-bar-ul'>
                <Link to='/Home'>
                    <li className='sideBar_link'>Home</li>
                </Link>
                
                <Link to='/Article' >
                    <li className='sideBar_link'>Article</li>
                </Link>
                
                <Link to='/People' >
                    <li className='sideBar_link'>People</li>
                </Link>
                
                <Link to='/Books' >
                    <li className='sideBar_link'>Books</li>
                </Link>

                <Link to='/Help'>
                    <li className='sideBar_link'>Help &#38; Support</li>
                </Link>
            </ul>
        </div>
        </>
         );
    }
}
 
export default SideBar;