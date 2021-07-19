import React from "react";
import dataVal from '../data'
import {Link} from 'react-router-dom'
import './articls.css'


class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data:'', }
    }
    componentDidMount(){
        this.setState({ data: [...dataVal ] })
    }
    render() { 
        let iterableVal=Array.from(this.state.data);
        return(<div className='flex-col'>
        {
            iterableVal.map(obj=>(
                <Link to={{
                    pathname:`/Article/${obj.slug}`
                }}>
                     <h2>{obj.title}</h2>
                </Link>
               
            ))
        }
        </div>)
    }
}
 
export default Article;