const deepEqual = (a, b) => {
  if (a === b) return true;

  if (
    a === null ||
    typeof a !== "object" ||
    b === null ||
    typeof b !== "object"
  )
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let keyA of keysA) {
    console.log(keyA);
    if (!keysB.includes(keyA) || !deepEqual(a[keyA], b[keyA])) return false;
  }

  return true;
};
