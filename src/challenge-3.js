/*************************
    *** Coding Challenge 3
    
        Given a number, create a function that tests if the 
        number is divisible by 5 and return true or false.

        Examples:
            function(5);    true
            function(12);   false
        
        Notes:
        None
    
****/
export function isDivisibleBy5(number) {
    var divisible = number / 5;
    
    if(divisible == divisible.toFixed(0)){
        return true;
    }else {
        return false;
    }
}