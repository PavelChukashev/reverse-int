module.exports = function reverse(n) {

    n = '' + n;
    let splitedStr = n.split('');
    let reversedArr = splitedStr.reverse();
    let joinedArr = reversedArr.join('');
    let num = Number(joinedArr);

    if (n < 0) {
        n = n * (-1);
    }
    
    return +n;
    
};