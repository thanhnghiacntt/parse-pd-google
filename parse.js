function getChar(str){
	for(var i = 0; i < str.length; i++){
		var item = +str[i];
		if(!(item >= 0 && item <= 9)){
			return str[i];
		}
	}
	return "";
}
function getAtChar(str){
	for(var i = 0; i < str.length; i++){
		var item = +str[i];
		if(!(item >= 0 && item <= 9)){
			return i;
		}
	}
	return -1;
}
function parse(url) {
	var str = "";
	var rs = "";
	if(url.indexOf('!') > -1){
		var token = url.split("!");
		token.forEach(e => {
			if(e.length > 2){
				var k = getChar(e);
				var i = e.indexOf(k);
				if(i > 0){
					var f = e.substr(0, i);
					var l = e.substr(i + 1);
					var x = getType(k);
					str += x + ":" + l + "\n";
				}
			}
		})
		
	}else{
		  var len = url.length;
		  var ch = Array.from(url);
		  var rs = "";
		  ch.forEach(e => {
			  if(e >= 'a' && e <= 'z'){
				  rs += str + "\n";
				  str = getType(e);
				  str += " :";
			  }else{
				str = str + e;		  
			  }
		  });
	}	
	rs += str;
	console.log(rs);  
}

function getType(e){
	switch(e){
	  case 'm':
		return "matrix";
	  case 'f':
		return "float";
	  case 'd':
		return "double";
	  case 'i':
		return "integer";
	  case 'b':
		return "boolean";
	  case 'e':
		return "enum";
	  case 's':
		return "string";
	  case 'u':
		return "unsigned int";
	  default :
		return "unknow " + e;
	}
}