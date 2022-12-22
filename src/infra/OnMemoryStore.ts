import IKeyValueStore from "../app/IKeyValueStore";

//  TypeScript の'implements' キーワードを使って、IKeyValueStore  を
// 継承したクラス OnMemoryStore  を作る
// IKeyValueStore で定義したメソッドを実装していないとエラーになる
class OnMemoryStore implements IKeyValueStore {
  // (略) 「1.よくあるパッケージ構成」の KeyValueStore の実装と全く同じ
  dictionary: {
    [key: string]: string; // TypeScript 記法. key も value も string 型の意味
  };
  //　コンストラクタ
  constructor() {
    this.dictionary = {};
  }
  // Key-Value の組み合わせで保存する
  save(key: string, val: string): void {
    this.dictionary[key] = val;
  }
  // key に結びついた Value を取得する
  load(key: string): string {
    return this.dictionary[key];
  }
  // 保存されているデータを表示する
  showAll(): void {
    Object.keys(this.dictionary).map((key) => {
      console.log(`${key} : ${this.dictionary[key]}`);
    });
  }
}

export default OnMemoryStore; // インスタンスではなく、クラスをエクスポート
