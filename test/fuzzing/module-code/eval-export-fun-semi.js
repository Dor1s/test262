var count = 0;
export function f() {} if (true) { count += 1; }
assert.sameValue(count, 1);