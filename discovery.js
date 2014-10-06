var noble= require('noble')

module.exports = noble

/**
  Copy of noble.startScanning
  @member
  @private
*/
var _startScanning= noble.startScanning

/**
  Is currently scanning?
*/
var _isScanning

/**
  More liberal noble.startScanning
*/
noble.startScanning= function(){
	// enter into scanning?
	if(_isScanning)
		return
	_isScanning= true

	// look for all services by default
	if(arguments.length== 0){
		return _startScanning.call(this,[],true)
	}else{
		return _startScanning.apply(this,arguments)
	}
}

noble.once('newListener', function(event, listener){
	if(event == '
})
