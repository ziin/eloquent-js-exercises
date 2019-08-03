class Group {
  constructor() {
    this.members = [];
  }
  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }
  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }
  has(value) {
    return this.members.includes(value);
  }

  static from(iterable) {
    if (iterable[Symbol.iterator] === undefined) return new Group();
    const group = new Group();
    for (let value of iterable) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}
class GroupIterator {
  constructor(group) {
    this.members = group.members;
    this.index = 0;
  }
  next() {
    return this.index < this.members.length
      ? {
          value: this.members[this.index++],
          done: false,
        }
      : {
          done: true,
        };
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
