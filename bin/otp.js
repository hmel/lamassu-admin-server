const login = require('../login')

const name = process.argv[2]
const ip = 'localhost'

if (!name) {
  console.log('Usage: register <username>')
  process.exit(1)
}

login.generateOTP(name)
.then(otp => {
  console.log(`https://${ip}:8094?otp=${otp}`)
  process.exit(0)
})
.catch(err => {
  console.log('Error: %s', err)
  process.exit(2)
})
