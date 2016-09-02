# on-fire
一个简单的事件订阅发布系统。

### install

```shell
npm install on-fire --save
```



### api  

1. **on** 用于订阅事件
2. **fire** 用于触发/发布事件
3. **handler** 事件集合



### 用法  

```javascript
var onFire = require('./on-fire')
var on = onFire.on
var fire = onFire.fire

on('test', function (res) {
  console.log('this is a ' + res)
})

console.log(onFire.handler)

fire('test', 'test')

document.getElementById('btn').onclick = function () {
  fire('test', 'test by click')
}
```



### log  

0.1.0 - publish  

