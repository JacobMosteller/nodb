import React, {Component} from 'react';
import './Likedsongs.css';

class Likedsongs extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>{this.props.likes}</h1>
            </div>
        )
    }
}
export default Likedsongs;