let str = "Sos"

if (str === "") {
    console.log('Need a string to test');
    return;
}
str = str.toLowerCase()

console.log(str)

let strRev = str.split("").reverse().join("")


	if (str === strRev) {
		console.log('It is a palindrome');
	} 
    else {
		console.log('It is not a palindrome.');
	}

console.log(strRev)