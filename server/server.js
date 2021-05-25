const express = require('express')
const {Sequelize} = require('sequelize')
const app = express()
const port = 3000

const sequelize = new Sequelize('mysql://accrobat:accrobat@database:3306/database')
sequelize.authenticate()
.then(()=>console.log('connection succefull'))
.catch(err => console.log(err))

app.get('/',(req,res)=>{
	res.send("Hello world")
})

app.listen(port,() =>{
	console.log(`Server started on port ${port}`)
})
