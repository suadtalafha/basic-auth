'use strict';

const models = require("../models");

models.exports=(req,res)=>{
    res.status(404).send({
        error:404,
        route:req.path,
        message:'not found'
    })
}