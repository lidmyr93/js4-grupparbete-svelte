import { beers } from "../stores";

const addBeer = beer => beers.update(n => {
  const newBeer = { key: 1+n.keyIncrementor, ...beer };
  return {
    keyIncrementor: newBeer.key,
    beers: [newBeer, ...n.beers]
  }
});

export default addBeer;