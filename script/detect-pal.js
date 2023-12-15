function checkPalindrome() {
	const inputElement = document.getElementById('inputString');
	const resultElement = document.getElementById('result');

	const inputString = inputElement.value.toLowerCase().replace(/[^a-z0-9]/g, '');
	const reversedString = inputString.split('').reverse().join('');

	if (inputString === "") {
		resultElement.textContent = 'Need a string tot test';
	}
	
	else if (inputString === reversedString) {
		resultElement.textContent = 'It is a palindrome';
	} 
	else {
		resultElement.textContent = 'It is not a palindrome.';
	}
}
