function operating(ab) {
// so the given number should be positive 
  if(ab < 0){
        throw new Error("negative number not define");
   }
  let numbers = ab.toString().split("");
  let result = 0;

  for (let number of numbers) {
    result += Number(number);
  }

  return result;
}

console.log(operating(23));
console.log(operating(456));
console.log(operating(7394));
