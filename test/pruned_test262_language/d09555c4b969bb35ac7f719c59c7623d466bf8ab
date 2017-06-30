var x = "outer";
function evalInComputedPropertyKey({[eval("var x = 'inner'")]: ignored}) {
  assert.sameValue(x, "outer");
}
evalInComputedPropertyKey({});