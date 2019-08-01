loop(0, n => n <= 3, n => n + 1, console.log);

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}
