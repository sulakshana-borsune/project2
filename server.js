require('dotenv').config()
const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// const { User, Recipe, RecipeCreator, Region } = require('./models')

const { Recipe, Region, User } = require('./models')

app.use(require('./routes'))

require('./config').sync()
//.then(() => app.listen(process.env.PORT ||3000))
.then(() => app.listen(3000)) 
.catch(e => console.error(e))