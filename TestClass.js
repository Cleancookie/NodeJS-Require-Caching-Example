class TestClass {
  constructor() {
    this.counter = 0
  }

  increment() {
    this.counter++
  }
}

const testClass = new TestClass()
exports = module.exports = testClass
