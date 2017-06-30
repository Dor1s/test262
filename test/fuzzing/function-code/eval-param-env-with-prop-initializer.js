var x = "outer";
function evalInPropertyInitializer({a: ignored = eval("var x = 'inner'")}) {
  assert.sameValue(x, "outer");
}
evalInPropertyInitializer({});