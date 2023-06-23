const express = require('express')
const app = express()
const pool = require('./SQL/connection')

//view ENV
require('dotenv').config()