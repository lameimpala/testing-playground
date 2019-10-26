
/*************************
    *** Coding Challenge 5
    *      
    *   Make a function that encrypts a given input with these steps:
    *
    *       Input: "apple"
    *           Step 1: Reverse the input: "elppa"
    *           Step 2: Replace all vowels using the following chart:
    *               a => 0
    *               e => 1
    *               o => 2
    *               u => 3
    *               // "1lpp0"
    *           Step 3: Add "aca" to the end of the word: "1lpp0aca"
    *       Output: "1lpp0aca"
    *   Examples
    *       encrypt("banana") ➞ "0n0n0baca"
    *       encrypt("karaca") ➞ "0c0r0kaca"
    *       encrypt("burak") ➞ "k0r3baca"
    *       encrypt("alpaca") ➞ "0c0pl0aca"
    *   Notes
    *       All inputs are strings, no uppercases and all output must be strings
    *       Given a string, create a function to reverse the case.
    *       All lower-cased letters should be upper-cased, and vice versa.
    * 
****/
var a = 'a';


function encrypt(string) {
    var container = [];
    for(var j = 0; j < string.length; j++){
        container = string.split('').reverse().join('');        
    }
    
    for(var i = 0; i < string.length; i++){
        switch(container[i]){
            case a:
                var temp = container.pop();
                container = temp.push(0);
                // container.splice(i, 2, '0'); // combine here
                    
                break;
            /* case 'e':
                container = string.split('').reverse().splice(i, 1, '0').join('');
                // container.splice(i, 1, '1');                
                break;
            case 'o':
                container = string.split('').reverse().splice(i, 1, '0').join('');
                // container.splice(i, 1, '2');                
                break;
            case 'u':
                container = string.split('').reverse().splice(i, 1, '0').join('');
                // container.splice(i, 1, '3');               
                break; */
        }
        //  }
    
    }   
    

    return container;
    
}

var arrEncrypt = [];
arrEncrypt = encrypt('apple');
console.log(arrEncrypt);