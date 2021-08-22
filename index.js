'use strict';

const server=require('./server');
require('dotenv').config();
server.start(process.env.PORT || 5000);

const db =require('./models/index');

db.sync()
.then(()=>{
    server.start(5000)
})
.catch(console.error)