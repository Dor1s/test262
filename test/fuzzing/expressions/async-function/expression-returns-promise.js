var p = async function() { }();
assert(p instanceof Promise, "async functions return promise instances");