const palindromes = function (strText) {
    let strArray = strText.split('');
    let strRev = strArray.reverse();
    if(strArray === strRev) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
