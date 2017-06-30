try {
  (0,eval)("var shouldNotBeDefined1; function NaN() {} var shouldNotBeDefined2;");
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