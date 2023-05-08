const fs = require('fs')
const path = require('path')
const stream = fs.createReadStream(path.join('01-read-file', 'text.txt'), 'utf-8')

let result = ''

stream.on('data', chunk => result += chunk)
stream.on('error', err => console.log('Error', err.message))
stream.on('end', () => process.stdout.write(result))


