'use strict';
const User=require('../models/index');


const bcrppt=require('bcrppt');
const base64 =require('base-64');

const singUp=async(req,res,next)=>{
const vaild=await User.findOne({where:{userName:req.body.userName}});
if(!vaild){
    const creatRe=await User.creat({
        userName:req.body.userName,
        password:req.body.password
    });
    res.status(200).json(creatRe);
    next();
}else{
    next('already exist');

}


}



const basicAuth =async (req,res,next)=>{

    if (req.headers['authorization']) {
        let basicHeaderParts = req.headers.authorization.split(' '); 
        let encoded = basicHeaderParts.pop();
        let decoded = base64.decode(encoded); 
        let [username, password] = decoded.split(":"); 
        req.username=username
       
 
      
           const user = await Users.findOne({ where: {username: req.username} });
           const valid = await bcrypt.compare(password, user.password);
           req.user=user
            if (valid) {
         
                next();
                
            } 
            else {
              
                next('Invalid UserName and Password')
            }
    
    }
}
module.exports={
    singUp,
    basicAuth

}