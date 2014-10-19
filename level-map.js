function LevelMap(map, opts){
	this.map= map
}

LevelMap.prototype.put= (function put(key, value, opts, callback){
	if(!callback && opts instanceof Function){
		callback= opts
		opts= null
	}
	this.map.set(key, value)
	if(callback)
		callback()
})

LevelMap.prototype.get= (function get(key, opts, callback){
	if(!callback && opts instanceof Function){
		callback= opts
		opts= null
	}
	if(this.map.getter){
		this.map.getter(key)(callback)
	}else{
		var val= this.map.get(key)
		if(callback)
			callback(undefined, val)
	}
})

LevelMap.prototype.del= (function del(key, opts, callback){
	if(!callback && opts instanceof Function){
		callback= opts
		opts= null
	}
	map.delete(key)
	if(callback)
		callback()
})

LevelMap.prototype.batch= (function batch(arr, opts, callback){
	if(arguments.length == 0){
		// return chain batch
	}else{
		var ref= Ref()
		for(var i in arr){
			var a= arr[i]
			if(a.type == 'del')
				this.del(a.key)
			else if(a.type == 'put')
				this.put(a.key, a.value, ref())
		}
		ref(callback)
	}
})

LevelMap.prototype.open= (function open(callback){
	this.closed= false
	callback()
})
LevelMap.prototype.close= (function close(callback){
	this.closed= true
	callback()
})
LevelMap.prototype.isOpen= (function isOpen(){
	return !this.close
})
LevelMap.prototype.isClosed= (function isClosed(){
	return this.close
})
LevelMap.prototype.createReadStream= (function createReadStream(opts){
	
})
