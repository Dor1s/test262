class classBinding { valueOf() { return 33; } }
assert.sameValue(new classBinding().valueOf(), 33);
classBinding = 44;
assert.sameValue(classBinding, 44);