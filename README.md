## 简介

一个简单的事件订阅发布系统。


## Install

```shell
npm install on-fire --save
```


## Api

Api  |  含义  |  入参  |  返回值
-----|-------|--------|-------
on  |  订阅事件  |  `{string} event`, `{Function} handler`  |  `{number} id`，用于取消订阅
off  |  取消事件订阅  |  `{string} event`, `{number} id`  |  -
fire  |  触发事件  |  `{string} event`, `[{any} result]`  |  -
once  |  一次性事件监听，触发完后自行移除监听  |  `{string} event`, `{Function} handler`  |  `{number} id`，用于取消订阅


## Usage

首先，引入：

```javascript
import Bus from 'on-fire'
```

或者是

```javascript
var Bus = require('on-fire')
```

实例化一个事件总线：

```javascript
var bus = new Bus()
```

紧接着，我们监听一个`greet`事件：

```javascript
var greetId1 = bus.on('greet', (res) => {
  var greeting = 'Hello, ' + res + '!'

  console.log(greeting)
})
```

当然，我们可以对同一个事件进行多次订阅：

```javascript
var greetId2 = bus.on('greet', (res) => {
  var greeting = 'Good morning, ' + res + '!'

  console.log(greeting)
})
```

然后，我们来触发`greet`事件：

```javascript
bus.fire('greet', 'Jack')

// > Hello, Jack!
// > Good morning, Jack!
```

现在，我们来试着移除监听：

```javascript
bus.off('greet', greetId2)
bus.fire('greet', 'Jack')

// > Hello, Jack!
```

我们发现只有一个输出，说明我们已经成功移除了第二个订阅事件！

接下来我们试着实现一次性订阅，也就是当监听函数被触发过一次之后，便自动移除：  

```javascript
var oneTimeId = bus.on('one_time', () => {
  console.log('I will show this message just one time.')
  bus.off('one_time', oneTimeId)
})

bus.fire('one_time')
bus.fire('one_time')

// > I will show this message just one time.
```

事实上，`once`便是用来实现以上功能的，以下是等价实现：

```javascript
bus.once('one_time', () => {
  console.log('I will show this message just one time.')
})

bus.fire('one_time')
bus.fire('one_time')

// > I will show this message just one time.
```

