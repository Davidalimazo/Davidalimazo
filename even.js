/*how to check if a all the numbers in a variable are even numbers i.e if 2468 then the function should return true otherwise return false
*/
function isItEven(n) {
    console.log((n + "").split("").every((x) => x % 2 === 0));
    return (n + '').split('').every(x => x % 2 === 0);   
}

let x = 12345;
isItEven(x); 

//allow variable name to start with only letters but not digit underscore is allowed but hyphen is not allowed

function variableName(name) {
  return /^[a-z_]\w*$/i.test(name)
}

/*
An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules
*/

const isIPv4Address = (inputString) =>
  /^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(?!$)|$)){4}$/.test(inputString);