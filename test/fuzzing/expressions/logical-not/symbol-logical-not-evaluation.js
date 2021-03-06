var sym = Symbol();
assert.sameValue(!sym, false, "`!sym` is `false`");
assert.sameValue(!!sym, true, "`!!sym` is `true`");
if (!sym) {
  $ERROR("ToBoolean(Symbol) always returns `true`");
} else if (sym) {
  assert(true, "`sym` evaluates to `true`");
} else {
  $ERROR("ToBoolean(Symbol) always returns `true`");
}