'use strict';


const util = require('util');

// Dữ liệu cần parse
var str = '!1m5!3m2!3d16.054411277601872!4d108.23989536441994!6e2!11b1!1m0!3m12!1m3!1d195.0181611495987!2d108.23972619694601!3d16.054429746454748!2m3!1f0!2f0!3f0!3m2!1i1366!2i625!4f13.1!6m10!1m1!18b1!2m3!5m1!6e2!20e3!4b0!9e3!10b1!16b1!15m3!1sWSvkYbybMKuaseMPxJWXgAo!3b1!7e81!28m0!40i587';

var parts = str.split('!').filter(function(s) { return s.length > 0; }),
    root = [],                      // Root elemet
    curr = root,                    // Current array element being appended to
    m_stack = [root,],              // Stack of "m" elements
    m_count = [parts.length,];      // Number of elements to put under each level
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
parts.forEach(function(el) {
    var kind = getChar(el);
    var value = el.substr(getAtChar(el) + 1);
    // Decrement all the m_counts
    for (var i = 0; i < m_count.length; i++) {
        m_count[i]--;
    }

    if (kind === 'm') {            // Add a new array to capture coming values
        var new_arr = [];
        m_count.push(value);
        curr.push(new_arr);
        m_stack.push(new_arr);
        curr = new_arr;
    }
    else {
        if (kind == 'b') {                                    // Assuming these are boolean
            curr.push(value == '1');
        }
        else if (kind == 'd' || kind == 'f') {                // Float or double
            curr.push(parseFloat(value));
        }
        else if (kind == 'i' || kind == 'u' || kind == 'e') { // Integer, unsigned or enum as int
            curr.push(parseInt(value));
        }
        else if(kind == 'x'){
            curr.push("0x" + value);
        }
        else {                                                // Store anything else as a string
            curr.push(value);
        }
    }

    // Pop off all the arrays that have their values already
    while (m_count[m_count.length - 1] === 0) {
        m_stack.pop();
        m_count.pop();
        curr = m_stack[m_stack.length - 1];
    }
});

console.log(util.inspect(root, { depth: null }));