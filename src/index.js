module.exports = function reverse(n) {


    let str = '' + n;
    let splitedStr = str.split('');
    let reversedArr = splitedStr.reverse();
    let joinedArr = reversedArr.join('');
    let num = Number(joinedArr);


    console.log(joinedArr);
    return joinedArr;
    
    
    
};