function spinWords(string) {
    let word;
    let word2;
    for (let i = 0; string.length > i; i++) {
        if (string[i] !== ' ') {
            word += string[string.length-i];
            if (word.length === string.length) break;
        } else {
            if (word.length>4) {
                word2 += word;
                if (word2.length === string.length) {
                    break;
                } else {
                    word2 += ' ';
                }
            }
        }
    }
}
console.log(spinWords('has already been declared\n'))