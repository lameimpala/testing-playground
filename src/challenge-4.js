
/*************************
    *** Coding Challenge 4
    *      
    *   Given a string, create a function to reverse the case.
    *   All lower-cased letters should be upper-cased, and vice versa.
    *
    *   reverseCase('sad') === 'SAD';
    *   reverseCase('HAPPY') === 'happy';
    *   reverseCase('siZZle') === 'SIzzLE';
    * 
****/


export function reverseCase(string) {
    var caseChecker = [];
    var result = [];
    for (var i = 0; i < string.length; i++){
        if(string[i] == string[i].toUpperCase()){
            caseChecker[i] = string[i].toLowerCase();
          
        } else if(string[i] == string[i].toLowerCase()){
            caseChecker[i] = string[i].toUpperCase();
        }
    }
    result = caseChecker.join('');
    
    return result;
}

