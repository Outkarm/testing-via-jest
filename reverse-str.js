const reverseString = (str) => {
  const splitArr = str.split("");
  const reverseArr = splitArr.reverse();
  const reversestr = reverseArr.join();
  return reversestr;
};

module.exports = reverseString;
