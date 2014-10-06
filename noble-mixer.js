if(require.main == module){
	if(process.argv[1]){
		var server= require('./server')(process.argv[0])
	}else{
		var discovery= require('./discovery')
	}
}
