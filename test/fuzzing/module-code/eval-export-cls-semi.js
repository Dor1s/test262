var count = 0;
export class C {} if (true) { count += 1; }
assert.sameValue(count, 1);