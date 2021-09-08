const express = require('express')
const { Sequelize, DataTypes, Model } = require('sequelize');
const app = express()
const port = 3000

const sequelize = new Sequelize('nono', 'yoann', 'secret', {
  host: 'db',
  dialect: 'mysql'
});
sequelize.authenticate()
.then(()=>console.log('connection succefull'))
.catch(err => console.log(err))

const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});
sequelize.sync({alter : true}).then(()=> console.log("all table sync"));

app.get('/connected', (req,res)=>{
	sequelize.authenticate()
.then(()=>res.send('connection succefull'))
.catch(err => res.send(err))
});

app.get('/',(req,res)=>{
	res.send("Hello world")
})

app.listen(port,() =>{
	console.log(`Server started on port ${port}`)
})
