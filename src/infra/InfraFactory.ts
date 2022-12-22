import IKeyValueStore from "../app/IKeyValueStore";
import IInfraFactory from "../app/IInfraFactory";

import OnMemoryStore from "./OnMemoryStore";

class InfraFactory implements IInfraFactory {
  private store: IKeyValueStore;
  constructor(config: { storeType: String }) {
    if (config.storeType === "OnMemory") {
      this.store = new OnMemoryStore();
    } else {
      console.error("Wrong Configuration :", config);
      this.store = new OnMemoryStore();
    }
  }

  // getKeyValueStore(): IKeyValueStore {
  //   return this.store;
  // }
  getStore(): IKeyValueStore {
    return this.store;
  }
}
// const infraFactory = new InfraFactory({ storeType: "OnMemory" });

// export default infraFactory;
export default InfraFactory;
