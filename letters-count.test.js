const countLetter = require("./letters-count");
const str = "saba";
test("Number of letters", () => {
  expect(countLetter(str)).toBe(4);
});
