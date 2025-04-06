function isPalindrome(word) {
    let result;
    let wordWithoutSpecialCharachters = word.replace(/[^a-zA-Z]+/g, '');
    let wordArr = wordWithoutSpecialCharachters.split('');
    if (JSON.stringify(wordArr) === JSON.stringify(wordArr.reverse())) {
        result = console.log(`${word} is a palindrome!`)
    } else {
        result = console.log(`${word} is NOT a palindrome!`)
    }
    return result
}

isPalindrome('al?? la!!')