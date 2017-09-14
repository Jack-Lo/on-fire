var assert = require('assert');
var Bus = require('../dist/index.js')
var bus = new Bus()
var eventName = 'some_event'
var eventRes = ''

describe('Class', function() {
  describe('#type', function() {
    it(`Bus is a type of function.`, function() {
      assert.equal(true, typeof Bus === 'function')
    })
  })

  describe('#prototype.on', function() {
    it(`Bus.prototype.on is a type of function.`, function() {
      assert.equal(true, typeof Bus.prototype.on === 'function')
    })
  })

  describe('#prototype.off', function() {
    it(`Bus.prototype.off is a type of function.`, function() {
      assert.equal(true, typeof Bus.prototype.off === 'function')
    })
  })

  describe('#prototype.once', function() {
    it(`Bus.prototype.once is a type of function.`, function() {
      assert.equal(true, typeof Bus.prototype.once === 'function')
    })
  })

  describe('#prototype.fire', function() {
    it(`Bus.prototype.fire is a type of function.`, function() {
      assert.equal(true, typeof Bus.prototype.fire === 'function')
    })
  })
})

describe('Instance', function() {
  describe('#type', function() {
    it(`bus is a type of object.`, function() {
      assert.equal(true, typeof bus === 'object')
    })
  })

  describe('#on', function() {
    it(`bus.on is a type of function.`, function() {
      assert.equal(true, typeof bus.on === 'function')
    })
  })

  describe('#off', function() {
    it(`bus.off is a type of function.`, function() {
      assert.equal(true, typeof bus.off === 'function')
    })
  })

  describe('#once', function() {
    it(`bus.once is a type of function.`, function() {
      assert.equal(true, typeof bus.once === 'function')
    })
  })

  describe('#fire', function() {
    it(`bus.fire is a type of function.`, function() {
      assert.equal(true, typeof bus.fire === 'function')
    })
  })

  describe('#_handlerMap', function() {
    it(`bus._handlerMap is a type of object.`, function() {
      assert.equal(true, typeof bus._handlerMap === 'object')
    })
  })

  describe('#_id', function() {
    it(`bus._id is a type of number.`, function() {
      assert.equal(true, typeof bus._id === 'number')
    })
  })
})