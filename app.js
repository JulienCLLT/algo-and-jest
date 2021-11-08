function toCamelCase(str){
    return str.split(/[-_]/).map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join("")
    };

function rotate(str){
            let array = [];
            let string = str;
                for(let i = 0; i < str.length;i++){
                string = string.slice(1) + string[0];
                array.push(string);    
                }
          return array;
    };
    
    
    
module.exports = {
    toCamelCase,
    rotate
} ;