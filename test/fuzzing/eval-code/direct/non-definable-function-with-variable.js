try {
  eval("var shouldNotBeDefined; function NaN(){}");
} catch (e) {
  // Ignore TypeError exception.
}
assert.sameValue(Object.getOwnPropertyDescriptor(this, "shouldNotBeDefined"), undefined);