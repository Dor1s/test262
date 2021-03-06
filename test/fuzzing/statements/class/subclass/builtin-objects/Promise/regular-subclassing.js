class Prom extends Promise {}
assert.throws(TypeError, function() {
  new Prom();
});
var calledExecutor = false;
var executorArguments;
var prom1 = new Prom(function() {
  calledExecutor = true;
  executorArguments = arguments;
});
assert(calledExecutor);
assert.sameValue(executorArguments.length, 2);
assert.sameValue(typeof executorArguments[0], "function");
assert.sameValue(typeof executorArguments[1], "function");