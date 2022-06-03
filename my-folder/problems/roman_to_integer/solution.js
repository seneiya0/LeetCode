/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let symbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C:100,
        D: 500,
        M: 1000
    }
    
    sum = 0
    
    for(let i = 0; i < s.length; i++){
        if (symbols[s[i + 1]] > symbols[s[i]]) {
            sum -= symbols[s[i]];
        } else {
            sum += symbols[s[i]]
        }
    } 
    return sum
};