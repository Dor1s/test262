var count = 0;
export default function* g() {} if (true) { count += 1; }
assert.sameValue(count, 1);