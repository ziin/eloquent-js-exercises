class PGroup {
  constructor(values) {
    this.values = values;
  }

  add(value) {
    return !this.has(value) ? new PGroup(this.values.concat(value)) : this;
  }

  delete(value) {
    return this.has(value)
      ? new PGroup(this.values.filter(v => v !== value))
      : this;
  }

  has(value) {
    return this.values.includes(value);
  }
}

PGroup.empty = new PGroup([]);
let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
