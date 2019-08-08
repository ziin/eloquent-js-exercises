function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

module.exports = {
  randomRobot,
  randomPick,
};
