import factoryRepository from "./FactoryRepository";

export default class ClientB {
  public someMethod(): void {
    factoryRepository.getInfraFactory().getStore().save("B", "B desuyo.");
  }
}
