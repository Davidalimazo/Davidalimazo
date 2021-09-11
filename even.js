/*how to check if a all the numbers in a variable are even numbers i.e if 2468 then the function should return true otherwise return false
*/
function isItEven(n) {
    console.log((n + "").split("").every((x) => x % 2 === 0));
    return (n + '').split('').every(x => x % 2 === 0);   
}

let x = 12345;
isItEven(x); 
