import React, {Component} from 'react';
import './songlist.css';
import NewSongs from './components/Newsongs';
import Input from './components/Input'
import Likedsongs from './components/Likedsongs';
import axios from 'axios';

class SongList extends Component {
    constructor(props){
        super(props)

        this.state={
            input:'',
            songs:[],
            likedsongs:[]
        }

    }

    updateInput = (event)=>{
        this.setState({
            input: (event.target.value)
        })
    }
    addSongs = (event) => {
        event.preventDefault();

        const newThing = {
            title: this.state.input
        }

        axios.put('/api/songs', {newThing})
        .then((res)=>{
            this.setState({
                songs: res.data
            })
        })
    }
    componentDidMount(){
        axios.get('/api/songs')
        .then ((res)=>{
            this.setState({
                songs: res.data
            })
        })
    }
    componentWillMount(){
        axios.get('/api/liked')
        .then ((res)=>{
            this.setState({
                likedsongs: res.data
            })
        })
    }
    delete = (index) =>{
        axios.delete(`/api/delete?index=${index}`)
        .then((res)=>{
            this.setState({
                songs:res.data
            })
        })
    }
    like = (index) => {
        debugger
        axios.put(`/api/like?index=${index}`)
        .then((res)=>{
            this.setState({
                songs: res.data[0],
                likedsongs:res.data[1]
            })
        })
    }

    render(){
       const songs = this.state.songs.map((e,i)=>{
           return <NewSongs key={i} index={i} song={e} delete={this.delete} like={this.like}/>
       })
       const likes = this.state.likedsongs.map((e,i)=>{
           return <Likedsongs key={i} index={i} likes = {this.state.likedsongs}/>
       })
        return(
            <div>
                <Input update = {this.updateInput} add = {this.addSongs}/>
                <div className="lists">
                    {likes}
                </div>
                <div className = 'songslist'>
                    {songs}
                </div>
            </div>
        )
    }
}
export default SongList;