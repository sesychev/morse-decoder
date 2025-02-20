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

function decode(expr) {
// write your solution here
	const length = 10;
	const alphabet = 2;
	const space = '**********';
	let str = '';
	let array = [];
	
	for (let index = 0, j = length; index < expr.length; index += length, j += length) {
		const element = expr.slice(index, j);
		if (element === space) {
			array.push (' ');
		}
		else {
			array.push (letter(element));
		}
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

	return str;
}

module.exports = {
    decode
}