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

var str = '!1m5!3m2!3d16.054411277601872!4d108.23989536441994!6e2!11b1!1m0!3m12!1m3!1d195.0181611495987!2d108.23972619694601!3d16.054429746454748!2m3!1f0!2f0!3f0!3m2!1i1366!2i625!4f13.1!6m10!1m1!18b1!2m3!5m1!6e2!20e3!4b0!9e3!10b1!16b1!15m3!1sWSvkYbybMKuaseMPxJWXgAo!3b1!7e81!28m0!40i587';
parse(str)