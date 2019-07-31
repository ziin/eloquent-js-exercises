const arrayToList = arr => {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {
      value: arr[i],
      rest: list
    };
  }
  return list;
};

const listToArray = list => {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
};

const prepend = (element, list) => {
  if (
    typeof list !== "object" ||
    Array.isArray(list) ||
    list === null ||
    !Object.keys(list).includes("value")
  ) {
    return {
      value: element,
      rest: null
    };
  }

  return { value: element, rest: { ...list } };
};

const nth = (list, index) => {
  if (!list) {
    return undefined;
  } else if (index === 0) {
    return list.value;
  } else {
    return nth(list.rest, index - 1);
  }
};

console.log(nth(arrayToList([10, 20, 30]), 2));
