var count = 0;
export default function f() {} if (true) { count += 1; }
assert.sameValue(count, 1);