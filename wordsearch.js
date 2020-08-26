const wordSearch = (letters, word) => {
	const horizontalJoin = letters.map(ls => ls.join(''));
	for (let l of horizontalJoin) {
		if (l.includes(word)) {
			return true;
		}
	}
	return false;
};

module.exports = wordSearch;

// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found