var inCatch = false;
try {
  throw "expected_message";
} catch (err) {
  assert.sameValue(err, "expected_message");
  inCatch = true;
}
assert.sameValue(inCatch, true);