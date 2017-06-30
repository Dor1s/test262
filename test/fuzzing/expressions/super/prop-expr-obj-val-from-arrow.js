var fromA, fromB;
var A = { fromA: 'a', fromB: 'a' };
var B = { fromB: 'b' };
Object.setPrototypeOf(B, A);
var obj = {
  fromA: 'c',
  fromB: 'c',
  method() {
    fromA = (() => { return super['fromA']; })();
    fromB = (() => { return super['fromB']; })();
  }
};
Object.setPrototypeOf(obj, B);
obj.method();
assert.sameValue(fromA, 'a');
assert.sameValue(fromB, 'b');