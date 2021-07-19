import React from "react";
import './indiv.css';
import data from '../data'
import {Redirect} from 'react-router-dom'


class Indiv extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title:'',author:'' }
    }
    componentDidMount(){
        let id=this.props.match.params.id;

       let value=data.find(o=>o.slug===id);
       value ? this.setState(
        {
            title:value.title,
            author:value.author
       
       }) :this.setState({title:null}) 
       
        console.log('mount');
    }
    render() {
        console.log('render');

        if(this.state.title===null){
            return <Redirect to='/404' />
        }
        else return ( <div className='flex-col'>
        <h2>{this.state.title}</h2>
        <p>{this.state.author}</p>
        </div> );
    }
}
 
export default Indiv;