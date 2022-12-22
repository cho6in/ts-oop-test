import factoryRepository from "./FactoryRepository";

export default class ClientA {
  public someMethod(): void {
    factoryRepository.getInfraFactory().getStore().save("A", "A desuyo.");
  }
}
