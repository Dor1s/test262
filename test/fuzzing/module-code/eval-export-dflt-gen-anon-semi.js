var count = 0;
export default function* () {} if (true) { count += 1; }
assert.sameValue(count, 1);