var err;
eval('\
  switch (1) {\
    case 1:\
      function f() {  }\
  }\
');
try {
  f;
} catch (exception) {
  err = exception;
}
assert.sameValue(err.constructor, ReferenceError);