var g1 = async function*() { yield; };
var g2 = async function*() { yield 1; };
var iter1 = g1();
iter1.next().then(function(result) {
  assert.sameValue(
    result.value, undefined, "Without right-hand-side: first result `value`");
  assert.sameValue(
    result.done, false, "Without right-hand-side: first result `done` flag");
}).then(undefined, $DONE);
iter1.next().then(function(result) {
  assert.sameValue(
    result.value, undefined, "Without right-hand-side: second result `value`");
  assert.sameValue(
    result.done, true, "Without right-hand-side: second result `done` flag");
}).then(undefined, $DONE);
var iter2 = g2();
iter2.next().then(function(result) {
  assert.sameValue(
    result.value, 1, "With right-hand-side: first result `value`");
  assert.sameValue(
    result.done, false, "With right-hand-side: first result `done` flag");
}).then(undefined, $DONE);
iter2.next().then(function(result) {
  assert.sameValue(
    result.value, undefined, "With right-hand-side: second result `value`");
  assert.sameValue(
    result.done, true, "With right-hand-side: second result `done` flag");
}).then($DONE, $DONE);