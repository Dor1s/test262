$262.evalScript(
  'function f() { return 1; }' +
  'function f() { return 2; }' +
  'function f() { return 3; }'
);
assert.sameValue(f(), 3);