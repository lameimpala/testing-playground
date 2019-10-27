/*************************
    *** Coding Challenge 7

        Write a function that adds up the numbers between 
        0 and the given number, including the given number.

        Examples:
            addUp(2) = 3 because 1 + 2
            addUp(3) = 6 because 1 + 2 + 3
            addUp(-1) = -1 because -1 
            addUp(-4) = -10 because -1 + -2 + -3 + -4

        Notes:
            All inputs are numbers
*/

export function addUp(number) {
    const setLength = Math.abs(number);
    
    let setNumber = 0;
    let sum = 0;

    if (number > 0){
        for(var i = 0; i <= setLength; i++){
            sum = setNumber;
   
            setNumber = setNumber + number;
                
            number = number - 1;
        }

        return sum;

    }else if (number < 0){
        number = Math.abs(number);
        for(var i = 0; i <= setLength; i++){
            sum = setNumber;
                        
            setNumber = setNumber + number;
                
            number = number - 1;
        }
        
        return sum * (-1); 
    
    } else {
        return 0;
    }
}

console.log(addUp(-2));
