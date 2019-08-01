let arrays = [[1, "Hello", [2, [3, [4, false, [], {}, [5, [6]]]]]]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

// const result = arrays.reduce((flat, cur) => flat.concat(cur), []);

const flatten = arr =>
  arr.reduce(
    (flat, cur) => flat.concat(Array.isArray(cur) ? flatten(cur) : cur),
    []
  );

console.log(flatten(arrays));
