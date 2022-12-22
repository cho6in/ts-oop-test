import IInfraFactory from "./IInfraFactory";

class FactoryRepository {
  private infraFactory: IInfraFactory;

  setInfraFactory(infraFactory: IInfraFactory) {
    this.infraFactory = infraFactory;
  }

  getInfraFactory(): IInfraFactory {
    return this.infraFactory;
  }
}
export default new FactoryRepository();
