const [{ x, y, z } = { x: 44, y: 55, z: 66 }] = [];
assert.sameValue(x, 44);
assert.sameValue(y, 55);
assert.sameValue(z, 66);