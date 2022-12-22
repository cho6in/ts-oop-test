import IKeyValueStore from "./IKeyValueStore";

export default interface IInfraFactory {
  getStore(): IKeyValueStore;
}
