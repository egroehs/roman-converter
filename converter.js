const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const result = document.querySelector(".output");

button.addEventListener("click", () => {
  const romanToNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let num = input.value;
  let roman = "";

  if (num === "") {
    return (result.innerText = "Please enter a valid number");
  } else if (num <= 0) {
    return (result.innerText =
      "Please enter a number greater than or equal to 1");
  } else if (num >= 4000) {
    return (result.innerText =
      "Please enter a number less than or equal to 3999");
  } else {
    for (let key in romanToNum) {
      while (num >= romanToNum[key]) {
        roman += key;
        num -= romanToNum[key];
      }
    }
    return (result.innerText = roman);
  }
});
