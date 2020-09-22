require('dotenv').config()
const express = require('express')
const companion = require('@uppy/companion')
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express()

const companionConfig = require('./companion.config.js')

app.use(bodyParser.json())
app.use(session({
  secret: process.env.APP_SECRET,
  resave: true,
  saveUninitialized: true
}))

app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Origin',
    req.headers.origin || '*'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Authorization, Origin, Content-Type, Accept, X-User-Id'
  )
  next()
})

// Routes
app.get('/', (req, res) => {
  return res.status(403).json({ message: 'Not Allowed' })
})

app.use(companion.app(companionConfig))

app.use((req, res, next) => {
  return res.status(404).json({ message: 'Not Found' })
})

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message, error: err })
})

companion.socket(app.listen(process.env.APP_PORT), companionConfig)

console.log('Welcome to Companion!')