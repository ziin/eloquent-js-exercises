function range(start, end, increment = start > end ? -1 : 1) {
  let arr = [];

  if (increment > 0) {
    for (let i = start; i <= end; i += increment) arr.push(i);
  } else {
    for (let i = start; i >= end; i += increment) arr.push(i);
  }
  return arr;
}

const sum = (...numbers) =>
  numbers
    .flat(Infinity)
    .reduce(
      (acc, number) =>
        (acc +=
          typeof number === "number"
            ? number
            : isNaN(Number(number))
            ? 0
            : Number(number))
    );

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10), 5));
