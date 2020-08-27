const transpose = matrix => {
	const transposeArr = [];
	let tempArr = [];
	const column = matrix.length;
	const row = matrix[0].length;
	for (let newRow = 0; newRow < row; newRow++) {
		for (let newColumn = 0; newColumn < column; newColumn++) {
			tempArr.push(matrix[newColumn][newRow]);
		}
		transposeArr.push(tempArr);
		tempArr = [];
	}
	return transposeArr;
};

const wordSearch = (letters, word) => {
	const horizontalJoin = letters.map(ls => ls.join(''));
	console.log('horizontalJoin:', horizontalJoin);
	for (let l of horizontalJoin) {
		if (l.includes(word)) {
			// return true;
		}
	}

	//transpose letters array
	const newLettersArray = transpose(letters);
	const verticalJoin = newLettersArray.map(ls => ls.join(''));
	for (let l of verticalJoin) {
		if (l.includes(word)) {
			console.log(l);
			// return true;
		}
	}

	// return false;
};

module.exports = wordSearch;

// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found

const printMatrix = matrix => {
	for (const row of matrix) {
		for (const el of row) {
			process.stdout.write(el + ' ');
		}
		process.stdout.write('\n');
	}
};

// wordSearch(
// 	[
// 		['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
// 		['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
// 		['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
// 		['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
// 		['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
// 		['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
// 		['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
// 		['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
// 		['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// 	],
// 	'FRANK'
// );

//if the coordinates whiteQueen is on added together === the coordinates blackQueen is on added together
//e.g. 0+5 === 5+0 (both = 5)
//   if (whiteQueen[0] + whiteQueen[1] === blackQueen[0] + blackQueen[1]) {

// const checkDiagBlTr = function (generatedBoard) {
//     //if the coordinates whiteQueen is on added together === the coordinates blackQueen is on added together
//     //e.g. 0+5 === 5+0 (both = 5)
//     if (whiteQueen[0] + whiteQueen[1] === blackQueen[0] + blackQueen[1]) {
//       //return true
//       return true;
//     } else {
//       //no threat - queens are on different Bl - Tr diags
//       return false;
//     }
//   }
//   //check diagonals bottom right to top left
//   const checkDiagBrTl = function (generatedBoard) {
//     //if the cooardinates WhiteQueen is on subtracted together === the coordinates blackQueen is on subtracted together
//     //e.g. 5-7 === 2-4 (both =- 2)
//     if (whiteQueen[0] - whiteQueen[1] === blackQueen[0] - blackQueen[1]) {
//       //return true
//       return true;
//     } else {
//       //no threat - queens are on different Br to Tl diags
//       return false;
//     }
//   }

const sampleArr = [
	['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
	['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
	['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
	['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
	['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
	['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
	['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
	['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
	['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
];

//0  => [0,0]
//1 => [0,1] [1,0]  => join
//2	=> [0,2] [1,1] [2,0]
//3 => [0,3] [1,2] [2,1] [3,0]
//4

//check if diagonal >= word.length

const vertLen = sampleArr.length;
let sampleWord = '';
const targetWord = 'FIF';

for (let i = 0; i < vertLen; i++) {
	let second = i;
	let first = 0;
	while (first <= i) {
		const char = sampleArr[first++][second--];
		if (char) {
			sampleWord += char;
		}
	}

	if (sampleWord.length >= targetWord.length && sampleWord.includes(targetWord)) {
		console.log(sampleWord);
		console.log('found');
	}

	sampleWord = '';
}