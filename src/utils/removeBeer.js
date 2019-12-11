import { beers } from "../stores";

const removeBeer = key => beers.update(n => ({ 
  keyIncrementor: n.keyIncrementor, 
  beers: n.beers.filter(val => val.key !== key) 
}));

export default removeBeer;