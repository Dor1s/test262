var err = null;
try {
  eval("var _7_8_3_1 = 010;");
} catch (e) {
  err = e;
}
assert(err instanceof SyntaxError);
assert.sameValue(typeof _7_8_3_1, "undefined");