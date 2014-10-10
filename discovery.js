var _noble= require('noble'),
  memoizee= require('memoizee')

var _startScanning= _noble.startScanning

/**
	Maybe not specifically now, but are we in general doing the scan thing?
*/
var _isGenerallyScanning= false


/**
	More generous version of startScanning that by default captures everything, memoizing
	the contents statically in to noble-mixer.
*/
_noble.startScanning= function(){
	if(_isGenerallyScanning)
		return
	if(arguments.length == 0){
		_startScanning.call(this, [], true)
	}else{
		_startScanning.apply(this, arguments)
	}
	_isGenerallyScanning= true

	_noble.on('discover, function(peripheral){
		
	})
}




/*
peripheral = {
  uuid: "<uuid>",
  advertisement: {
    localName: "<name>",
    txPowerLevel: <int>,
    serviceUuids: ["<service UUID>", ...],
    manufacturerData: <Buffer>,
    serviceData: [
        {
            uuid: "<service UUID>"
            data: <Buffer>
        },
        ...
    ]
  },
  rssi: <rssi>
};
*/



//module.exports= plugmix(_noble)
module.exports= _noble
