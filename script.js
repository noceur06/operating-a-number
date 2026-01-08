function operating(ab) {
  let numbers = ab.toString().split("");
  let result = 0;

  for (let number of numbers) {
    result += Number(number);
  }

  return result;
}

console.log(operating(88));
