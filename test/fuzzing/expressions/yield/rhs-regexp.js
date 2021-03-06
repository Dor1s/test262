var complete = false;
var sent = {};
var iter, iterResult, received;
var abc, i;
function* g() {
  received = yield/abc/i;
  complete = true;
}
iter = g();
assert.sameValue(complete, false, 'generator initially paused');
assert.sameValue(received, undefined, 'first statement no executed');
iterResult = iter.next();
assert.sameValue(complete, false, 'generator paused following expression');
assert.sameValue(received, undefined, 'first statement not executed');
assert.sameValue(iterResult.done, false, 'iteration not complete');
assert.sameValue(iterResult.value.test('ABC'), true, 'first iterated value');
iterResult = iter.next(sent);
assert.sameValue(received, sent, 'YieldExpression value');
assert.sameValue(complete, true, 'generator correctly re-started');
assert.sameValue(iterResult.done, true, 'iteration complete');
assert.sameValue(iterResult.value, undefined, 'second iterated value');