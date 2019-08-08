const { roadGraph } = require("./roads");
const { randomPick } = require("./utils");

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }
  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      return new VillageState(
        destination,
        this.parcels
          .map(p => {
            if (p.place !== this.place) return p;
            return { place: destination, address: p.address };
          })
          .filter(p => p.address !== p.place)
      );
    }
  }

  static random(parcelsCount = 5) {
    let parcels = [];
    do {
      let place = randomPick(Object.keys(roadGraph));
      let address;
      do {
        address = randomPick(Object.keys(roadGraph));
      } while (address === place);
      parcels.push({ place, address });
    } while (parcels.length < parcelsCount);
    return new VillageState("Post Office", parcels);
  }
}

module.exports = VillageState;
