function buildGraph(edges) {
  let graph = Object.create(null);
  function add(from, to) {
    if (graph[from] === undefined) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }

  for (let [from, to] of edges) {
    add(from, to);
    add(to, from);
  }
  return graph;
}

module.exports = {
  buildGraph,
};
