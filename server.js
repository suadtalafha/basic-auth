'use strict';

const express=require('express');
const notFoundHandelar=require('./error-handelars/404');
const errorHandelar=require('./error-handelars/500')
const {  singUp,
    basicAuth}=require('./auth/auth')

const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
res.status(200).send('Hello world')
});
app.get('/bad',(req,rs,next)=>{
    next('error')
});

app.post('/signup',singUp ,(req, res, next) => {
  
    res.status(201).json(req.record);

});


app.post('/signin', basicAuth, (req, res, next)=> {

 res.status(200).json({userName: req.userName ,id :req.user.id})
    
});
 
app.use('*',notFoundHandelar);
app.use(errorHandelar)
module.exports={
    app,
    start:PORT =>{
        app.listen(PORT,()=> console.log(`listen on port ${PORT}`))},
    
}