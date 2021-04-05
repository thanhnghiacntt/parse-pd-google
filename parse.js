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
	if(url.indexOf('!') > -1){
		var token = url.split("!");
		token.forEach(e => {
			if(e.length > 3){
				rs += str + " \n";
				switch(getChar(e)){
					  case 'm':
						str = "matrix";
						break;
					  case 'f':
						str = "float";
						break;
					  case 'd':
						str = "double";
						break;
					  case 'i':
						str = "integer";
						break;
					  case 'b':
						str = "boolean";
						break;
					  case 'e':
						str = "enum";
						break;
					  case 's':
						str = "string";
						break;
					  case 'u':
						str = "unsigned int";
						break;
					  default :
						str = "unknow ";
						break;
				  }
				  str += " :"+ e.substr(getAtChar(e) + 1);
			}
		})
		
	}else{
		  var len = url.length;
		  var ch = Array.from(url);
		  var rs = "";
		  ch.forEach(e => {
			  if(e >= 'a' && e <= 'z'){
				  rs += str + "\n";
				  switch(e){
					  case 'm':
						str = "matrix";
						break;
					  case 'f':
						str = "float";
						break;
					  case 'd':
						str = "double";
						break;
					  case 'i':
						str = "integer";
						break;
					  case 'b':
						str = "boolean";
						break;
					  case 'e':
						str = "enum";
						break;
					  case 's':
						str = "string";
						break;
					  case 'u':
						str = "unsigned int";
						break;
					  default :
						str = "unknow " + e;
						break;
				  }
				  str += " :";
			  }else{
				str = str + e;		  
			  }
		  });
	}
	
	rs += str;
	console.log(rs);
  
}
