function fn({}) { return true; }
assert(fn(0));
assert(fn(NaN));
assert(fn(''));
assert(fn(false));
assert(fn({}));
assert(fn([]));