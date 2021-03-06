var obj = Object.create({ hit: true });
var iter, iterResult, value;
Boolean.prototype[Symbol.iterator] = function* () { yield this.valueOf(); };
function* g() {
  value = yield * 'hit' in obj;
  value = yield * 'miss' in obj;
}
iter = g();
iterResult = iter.next('first');
assert.sameValue(iterResult.done, false, '`done` property (first iteration)');
assert.sameValue(iterResult.value, true, '`value` property (first iteration)');
assert.sameValue(
  value, undefined, 'generator paused prior to evaluating AssignmentExpression'
);
iterResult = iter.next('second');
assert.sameValue(iterResult.done, false, '`done` property (second iteration)');
assert.sameValue(
  iterResult.value, false, '`value` property (second iteration)'
);
assert.sameValue(value, undefined, 'value of first AssignmentExpression');
iterResult = iter.next('third');
assert.sameValue(iterResult.done, true, '`done` property (third iteration)');
assert.sameValue(
  iterResult.value, undefined, '`value` property (third iteration)'
);
assert.sameValue(value, undefined, 'value of second AssignmentExpression');