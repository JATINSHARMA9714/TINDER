import express from 'express'
import mongoose from 'mongoose'
import cards from './dbCards.js'
import cors from 'cors'

//App config
const app=express();
const port=process.env.PORT || 3000;
const connection_url='mongodb+srv://admin:D1r17jg1VVyeFFMV@cluster0.kithqlw.mongodb.net/?retryWrites=true&w=majority'

//Middlewares
app.use(express.json());
app.use(cors());
//DB config
mongoose.connect(connection_url,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
//API endpoints
app.get('/',(req,res)=>{
    res.status(200).send("Hello everyone"); 
})
app.post('/tinder/cards',(req,res)=>{
    const card_id=req.body;
    cards.create(card_id)
.then((result) => {
  res.status(201).send({result})
})
.catch((err) => {
    res.status(500).send({err});
})
})
app.get('/tinder/cards',(req,res)=>{
    cards.find({}).then(function(data){
    
        res.status(200).send(data);
    
      })
       .catch(function(err){
        res.status(500).send(err);
      })
})
//listeners
app.listen(port,()=>console.log(`Listening to port ${port}`));