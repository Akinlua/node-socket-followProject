let express = require('express')
let app = express()
// let pug = require('pug')
// let dotenv = require('dotenv').config()
// let session = require('express-session')
// let passport = require('passport')
// let ObjectId = require('mongodb').ObjectId
// let MongoClient = require('mongodb').MongoClient
// let LocalStrategy = require('passport-local')
// let bodyParser = require('body-parser')
// let bcrypt = require('bcrypt')
// let auth = require('./auth')
// let routes = require('./routes')


// app.set('view engine', 'pug')
// app.set('views', './pages')



app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

let server = require('http').createServer(app)
let io = require('socket.io')(server)

server.listen(3000)

io.on('connection', (socket) => {
  
  socket.on('name', (name) => {
    let message = 'welcome' + name
    socket.emit('welcome', message)
  })

  socket.on('disconnect', () => {
    console.log("a user disconnected")
  })
})




// let uri = 'mongodb://127.0.0.1:27017/advancednode'

// MongoClient.connect(uri, (error, client) => {
//   if (error) {
//     console.log(error)
//   }else{
//     let db = client.db('advancednode')
//     console.log("Succesfully connected to database")

//     auth(app, db, session, passport, ObjectId, LocalStrategy, bcrypt)

//     routes(app, db, bodyParser, passport, bcrypt)
//   }
// })