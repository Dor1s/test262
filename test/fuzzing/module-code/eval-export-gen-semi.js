var count = 0;
export function* g() {} if (true) { count += 1; }
assert.sameValue(count, 1);