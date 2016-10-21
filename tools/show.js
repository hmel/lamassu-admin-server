'use strict'

const db = require('../db')

function pp (o) {
  console.log(require('util').inspect(o, {depth: null, colors: true}))
}

function dbFetchConfig () {
  return db.oneOrNone('select data from user_config where type=$1', ['config'])
  .then(row => row && row.data)
}

dbFetchConfig()
.then(config => {
  pp(config)
  process.exit(0)
})
.catch(e => {
  console.log(e)
  process.exit(1)
})
