var err = null;
try {
  eval("var _7_8_3_2 = 00;");
} catch (e) {
  err = e;
}
assert(err instanceof SyntaxError);
assert.sameValue(typeof _7_8_3_2, "undefined");