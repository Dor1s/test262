class AB extends ArrayBuffer {}
var ab = new AB(4);
var sliced = ab.slice(0, 1);
assert(sliced instanceof AB);
assert(sliced instanceof ArrayBuffer);