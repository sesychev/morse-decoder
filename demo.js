/*function reverse (n) {
	const str = Math.abs(n).toString();
	
	let res = ''

	for (let i = str.length - 1; i >= 0; i--) {
		console.log(`${i} ${str[i]}`);
		res += str[i];
	}

	return +res;
}


console.log(reverse(250));
*/

const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";

function decode(e) {
    // write your solution here
	const dot = { '.' : '10' };
	const dash = { '-' : '11' };

	const length = 10;
	const alphabet = 2;
	const space = '**********';
	let str = '';
	let array = [];
	
	for (let index = 0, j = length; index < e.length; index += length, j += length) {
		const element = e.slice(index, j);
		if (element === space) {
			array.push (' ');
		}
		else {
			array.push (letter(element));
		}
		//console.log(letter (element));
	}

	function letter (word) {
		let encodedLetter = ''
		for (let index = 0, j = alphabet; index < word.length; index += alphabet, j += alphabet) {
			if (word.slice(index, j) === '10') {
				encodedLetter += '.';
			}
			if (word.slice(index, j) === '11') {
				encodedLetter += '-';
			}
		}
		//console.log(encodedLetter)
		return encodedLetter;
	}

	for (const item of array) {
		if (MORSE_TABLE[item]) {
			str += MORSE_TABLE[item];
		}
		else {
			str += item;
		}
	}

	console.log(str);
	console.log(array);

	return str;
}

//console.log(expr.slice(0, 10));
decode(expr);