// importing observables and decorate
import { decorate, observable, action } from "mobx";
import { makeAutoObservable } from "mobx"

class Store {
  
  count=0;
  constructor() {
    makeAutoObservable(this)
  }
  // action to update text
  inCreaseCount = () => {
      this.count++;
  }
  decreaseCount = () => {
      this.count--;
  }

}

// export class
export default new Store();