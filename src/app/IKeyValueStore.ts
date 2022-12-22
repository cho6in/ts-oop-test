export default interface IKeyValueStore {
  save(key: string, val: string): void;
  load(key: string): string;
  showAll(): void;
}
