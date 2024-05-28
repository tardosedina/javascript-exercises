const add = function(aNm, bNm) {
	return aNm + bNm;
};

const subtract = function(aSn, bSn) {
	return aSn - bSn;
};

const sum = function(s1n, s2n) {
	let sum = s1n + s2n;
  return sum;
};

const multiply = function(m1n, m2n) {
  return m1n * m2n;
};

const power = function(p1n, p2n) {
	return p1n%p2n;
};

const factorial = function(num) {
  let result = 0;
	while(num > 1) {
    num--;
    result *= num;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
