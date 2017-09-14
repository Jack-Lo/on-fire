class Bus {
  constructor () {
    this._handlerMap = {}
    this._id = 0
  }

  on (type, handler) {
    var _t = this

    if (!(type in _t._handlerMap)) {
      _t._handlerMap[type] = {}
    }

    _t._handlerMap[type][++_t._id] = handler

    return _t._id
  }

  off (type, id) {
    var _t = this
    
    if ((type in _t._handlerMap) && (id in _t._handlerMap[type])) {
      delete _t._handlerMap[type][id]
    }
  }

  fire (type, ...args) {
    var _t = this

    if (type in _t._handlerMap) {
      var handlers = _t._handlerMap[type]
      for (let key in handlers) {
        handlers[key].apply(null, args)
      }
    }
  }

  once (type, handler) {
    var _t = this
    var id = _t.on(type, (ret) => {
      handler(ret)
      _t.off(type, id)
    })

    return id
  }
}

export default Bus