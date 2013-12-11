var TIMER = (function() {
  var _time = 0
  var _startTime = null
  var _stopTime = null
  var _running = false
  return {
    start: function() {
      this.output()
      _startTime = new Date()
      _running = true
    },
    stop: function() {
      if (_running) {
        _stopTime = new Date()
        _time += _stopTime - _startTime
        _running = false
        this.output()
      } else {
        console.log("The timer can only be stopped if it's already running!")
      }
    },
    reset: function() {
      if (_running) {
        console.log("Can't reset while timer is running!")
      } else {
        _time = 0
        _startTime = new Date()
        this.output()
      }
    },
    output: function() {
      if (_running) {
        var currTime = new Date()
        console.log((currTime - _startTime) + _time + 'ms')
      } else {
        console.log(_time + 'ms')
      }
    }
  }
}())



// the below is not written in the module pattern
// var timer = {
//   time: 0,
//   startTime: null,
//   stopTime: null,
//   start: function() {
//     this.startTime = new Date()
//   },
//   stop: function() {
//     this.stopTime = new Date()
//     this.time += this.stopTime - this.startTime
//     this.output()
//   },
//   reset: function() {
//     this.time = 0
//     this.output()
//   },
//   output: function() {
//     console.log(this.time)
//   }
// }


