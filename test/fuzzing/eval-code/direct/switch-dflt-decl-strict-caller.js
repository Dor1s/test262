var err;
eval('\
  switch (1) {\
    default:\
      function f() {  }\
  }\
');
try {
  f;
} catch (exception) {
  err = exception;
}
assert.sameValue(err.constructor, ReferenceError);