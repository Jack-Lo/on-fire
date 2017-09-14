var $greet = document.getElementById('greet')

$greet.innerHTML = 'Hello, Jack!'

var bus = new Bus()

bus.on('test', (res) => {
  console.log('test1')
})

var test2Id = bus.on('test', () => {
  bus.off('test', test2Id)
  console.log('test2')
})

bus.once('once', () => {
  console.log('once')
})

bus.fire('test')
bus.fire('test')
bus.fire('once')
bus.fire('once')

console.log(bus)