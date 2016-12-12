function onFire () {
  var _handlers = {}

  var _on = function (type, handler) {
    if (!_handlers[type]) {
      _handlers[type] = []
    }

    _handlers[type].push(handler)
  }

  var _fire = function (type, res) {
    if (type in _handlers) {
      var arr = _handlers[type]
      for (var i = 0; i < arr.length; i++) {
        arr[i](res)
      }
    }
  }

  return {
    handler: _handlers,
    on: _on,
    fire: _fire
  }
}

module.exports = onFire