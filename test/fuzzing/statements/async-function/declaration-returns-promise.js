async function foo() { };
var p = foo();
assert(p instanceof Promise, "async functions return promise instances");