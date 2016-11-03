const db = require('./db')
const crypto = require('crypto')

function generateOTP () {
  const otp = crypto.randomBytes(32).toString('hex')

  const sql = 'insert into one_time_passes (token) values ($1)'

  return db.none(sql, [otp])
  .then(() => otp)
}

function validateOTP (otp) {
  const sql = `delete from one_time_passes
    where token=$1
    returning created < now() - interval '1 hour' as expired`

  return db.one(sql, [otp])
  .then(r => !r.expired)
  .catch(() => false)
}

function register () {
  const token = crypto.randomBytes(32).toString('hex')

  const sql = 'insert into user_tokens (token) values ($1)'

  return db.none(sql, [token])
  .then(() => token)
}

function authenticate (token) {
  const sql = 'select token from user_tokens where token=$1'

  return db.one(sql, [token]).then(() => true).catch(() => false)
}

module.exports = {
  generateOTP,
  validateOTP,
  register,
  authenticate
}
