'use strict'
const merge = require('http-proxy-middleware')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
