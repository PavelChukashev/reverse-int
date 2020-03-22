module.exports = function reverse(n) {

    if (n < 0) {
        n = n * (-1);
    }
    n = n + '';
    if (n[n.length] === '0') {
        n.splice(n.length,1);
    }
    n = n.split('').reverse().join('');
    return +n; 
    
};