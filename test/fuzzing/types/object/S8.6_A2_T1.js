var __map={foo:"bar"};
__map.foo++;
assert.sameValue(__map.foo, NaN);