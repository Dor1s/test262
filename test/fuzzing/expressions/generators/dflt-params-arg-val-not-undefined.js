var obj = {};
var falseCount = 0;
var stringCount = 0;
var nanCount = 0;
var zeroCount = 0;
var nullCount = 0;
var objCount = 0;
var callCount = 0;
var ref;
ref = function*(aFalse = falseCount +=1, aString = stringCount += 1, aNaN = nanCount += 1, a0 = zeroCount += 1, aNull = nullCount += 1, aObj = objCount +=1) {
  assert.sameValue(aFalse, false);
  assert.sameValue(aString, '');
  assert.sameValue(aNaN, NaN);
  assert.sameValue(a0, 0);
  assert.sameValue(aNull, null);
  assert.sameValue(aObj, obj);
  callCount = callCount + 1;
};
ref(false, '', NaN, 0, null, obj).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');
assert.sameValue(falseCount, 0, 'initializer not evaluated: false');
assert.sameValue(stringCount, 0, 'initializer not evaluated: string');
assert.sameValue(nanCount, 0, 'initializer not evaluated: NaN');
assert.sameValue(zeroCount, 0, 'initializer not evaluated: 0');
assert.sameValue(nullCount, 0, 'initializer not evaluated: null');
assert.sameValue(objCount, 0, 'initializer not evaluated: object');