try {
  (0,eval)("function shouldNotBeDefined1() {} function NaN() {} function shouldNotBeDefined2() {}");
} catch (e) {
  // Ignore TypeError exception.
}
assert.sameValue(
  Object.getOwnPropertyDescriptor(this, "shouldNotBeDefined1"),
  undefined,
  "declaration preceeding"
);
assert.sameValue(
  Object.getOwnPropertyDescriptor(this, "shouldNotBeDefined2"),
  undefined,
  "declaration following"
);