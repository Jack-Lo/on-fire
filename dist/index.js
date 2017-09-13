(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Bus = factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Bus = function () {
  function Bus() {
    classCallCheck(this, Bus);

    this._handlerMap = {};
    this._id = 0;
  }

  createClass(Bus, [{
    key: "on",
    value: function on(type, handler) {
      var _t = this;

      if (!(type in _t._handlerMap)) {
        _t._handlerMap[type] = {};
      }

      _t._handlerMap[type][++_t._id] = handler;

      return _t._id;
    }
  }, {
    key: "off",
    value: function off(type, id) {
      var _t = this;

      if (type in _t._handlerMap && id in _t._handlerMap[type]) {
        delete _t._handlerMap[type][id];
      }
    }
  }, {
    key: "emit",
    value: function emit(type) {
      var _t = this;

      if (type in _t._handlerMap) {
        var handlers = _t._handlerMap[type];

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        for (var key in handlers) {
          handlers[key].apply(null, args);
        }
      }
    }
  }, {
    key: "once",
    value: function once(type, handler) {
      var _t = this;
      var id = _t.on(type, function (ret) {
        handler(ret);
        _t.off(type, id);
      });

      return id;
    }
  }]);
  return Bus;
}();

return Bus;

})));
//# sourceMappingURL=index.js.map
