class Singleton {
  static getInstance() {
    if(!this.instance) {
      this.instance = new Singleton()
    }
    return this.instance;
  }

  showMessage() {
    console.log("Hello singleton");
  }
}

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();
console.log(instance1 === instance2);

instance2.showMessage();
