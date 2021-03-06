var namedSym = Symbol('test262');
var anonSym = Symbol();
var o, setter;
o = {
  set id(_) {},
  set [anonSym](_) {},
  set [namedSym](_) {}
};
setter = Object.getOwnPropertyDescriptor(o, 'id').set;
assert.sameValue(setter.name, 'set id');
verifyNotEnumerable(setter, 'name');
verifyNotWritable(setter, 'name');
verifyConfigurable(setter, 'name');
setter = Object.getOwnPropertyDescriptor(o, anonSym).set;
assert.sameValue(setter.name, 'set ');
verifyNotEnumerable(setter, 'name');
verifyNotWritable(setter, 'name');
verifyConfigurable(setter, 'name');
setter = Object.getOwnPropertyDescriptor(o, namedSym).set;
assert.sameValue(setter.name, 'set [test262]');
verifyNotEnumerable(setter, 'name');
verifyNotWritable(setter, 'name');
verifyConfigurable(setter, 'name');