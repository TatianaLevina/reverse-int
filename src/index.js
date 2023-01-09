module.exports = function reverse (n) {
    n = n.toString();
    let result = '';
    if (n[0] === '-'){
      result = n[0];
      for (let i = 1; i < n.length; i++) {
        result = `${n[i]}${result}`;
      }
    } else{
      for (let i = 0; i < n.length; i++) {
        result = `${n[i]}${result}`;
      }
    }
    return parseInt(result);
  };
