class C {}
var descr = Object.getOwnPropertyDescriptor(C, 'prototype');
assert.sameValue(descr.configurable, false, "The value of `descr.configurable` is `false`");
assert.sameValue(descr.enumerable, false, "The value of `descr.enumerable` is `false`");
assert.sameValue(descr.writable, false, "The value of `descr.writable` is `false`");