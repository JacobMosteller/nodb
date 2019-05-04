const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
let songs = [];
let liked = [];



app.get('/api/test', (req,res,next)=>{
    res.send("This works")
})
app.get('/api/songs',(req,res,next)=>{
    res.send(songs)
})
app.get('/api/liked', (req,res,next)=>{
    res.send(liked)
})
app.put('/api/songs', (req, res, next)=>{
    songs.push(req.body.newThing.title);
    res.send(songs)
    console.log(songs)
})
app.put('/api/like', (req,res,next)=>{
    liked.push(songs.reduce((r, e, i)=>{
        if(i===Number(req.query.index)){
            r=e;
        }
        return r;
    }, ''))
    songs = songs.filter((e,i)=>{
        return Number(req.query.index) !== i
    })
    console.log(liked)
    res.send([songs,liked])
})
app.delete(`/api/delete`, (req,res,next)=>{
    console.log('this is working')
    songs = songs.filter((e,i)=>{
        return Number(req.query.index) !== i
    })
    res.send(songs)
})



const port = process.env.PORT || 8060;
app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})