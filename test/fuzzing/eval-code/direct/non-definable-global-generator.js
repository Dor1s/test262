var error;
try {
  eval("function* NaN(){}");
} catch (e) {
  error = e;
}
assert(error instanceof TypeError);