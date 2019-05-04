import React, {Component} from 'react';
import './Newsongs.css';

class Newsongs extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = 'Songs'>
            <h1>{this.props.song}</h1>
            <button className='heart' onClick={()=>{this.props.like(this.props.index)}}>like</button>
            <button onClick={()=>{this.props.delete(this.props.index)}}>dislike</button>
            </div>
        )
    }
}
export default Newsongs;