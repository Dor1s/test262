var err;
(0,eval)('"use strict";{ function f() {} }');
try {
  f;
} catch (exception) {
  err = exception;
}
assert.sameValue(err.constructor, ReferenceError);