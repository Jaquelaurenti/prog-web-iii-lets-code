const possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const possibleNumbers = "0123456789";
module.exports = () => {

  let letters = "";
  let numbers = "";

  for (var i = 0; i < 3; i++) {
    letters += possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
  }
  for (var i = 0; i < 4; i++) {
    numbers += possibleNumbers.charAt(Math.floor(Math.random() * possibleNumbers.length));
  }

  return `${letters}-${numbers}`
}
