var count = 0;
export default class C {} if (true) { count += 1; }
assert.sameValue(count, 1);