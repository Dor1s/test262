var obj = {
  async method() {}
}
var p = obj.method();
assert(p instanceof Promise, "async functions return promise instances");