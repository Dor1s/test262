var sym = Symbol();
assert.sameValue(!sym || true, true, "`!sym || true` is `true`");
assert.sameValue(sym || false, sym, "`sym || false` is `sym`");