var __map={};
assert.sameValue(++__map.foo, NaN, "++__map.foo");
if (!("foo" in __map)) {
  $ERROR('#2: var __map={}; "foo" in __map');
}