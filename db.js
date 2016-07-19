const options = require('./options')
const db = require('pg-promise')()(options.postgresql)

module.exports = db
