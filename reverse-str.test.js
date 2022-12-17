const reverseString = require("./reverse-str");

const str = "Ahamad";
test("reverse", () => {
  expect(reverseString(str)).toBe("d,a,m,a,h,A");
});

