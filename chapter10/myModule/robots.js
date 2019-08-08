const VillageState = require("./state");
const { roadGraph } = require("./roads");

const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length === 0) return turn;
    const action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

function findRoute(graph, from, to) {
  let work = [{ at: from, routes: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, routes } = work[i];
    for (let place of graph[at]) {
      if (place === to) return routes.concat(place);
      if (!work.some(w => w.at === place)) {
        work.push({ at: place, routes: routes.concat(place) });
      }
    }
  }
}

function goalOrientedRobot({ place, parcels }, routes) {
  if (routes.length === 0) {
    let parcel = parcels[0];
    if (place !== parcel.place) {
      routes = findRoute(roadGraph, place, parcel.place);
    } else {
      routes = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: routes[0], memory: routes.slice(1) };
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let total1 = 0,
    total2 = 0;
  for (let i = 0; i < 100; i++) {
    const state = VillageState.random();
    total1 += runRobot(state, robot1, memory1);
    total2 += runRobot(state, robot2, memory2);
  }
  console.log(`${robot1.name}: ${total1 / 100}`);
  console.log(`${robot2.name}: ${total2 / 100}`);
}

module.exports = {
  routeRobot,
  goalOrientedRobot,
  compareRobots,
};
