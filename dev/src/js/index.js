require('../sass/index')
var Event = require('../../../index')
var onFire = new Event()
var on = onFire.on
var fire = onFire.fire

on('test', function (res) {
  console.log('this is a ' + res)
})

console.log(onFire.handler)

fire('test', 'test')

console.log('index')