'use strict';

const User=(Sequelize ,DataTypes)=>Sequelize.define('user',{
    userName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false

    }
});
module.exports=User