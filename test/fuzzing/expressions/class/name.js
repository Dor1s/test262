assert.sameValue(Object.hasOwnProperty.call(class {}, 'name'), false);
assert.sameValue(class cls {}.name, 'cls');
verifyNotEnumerable(class cls {}, 'name');
verifyNotWritable(class cls {}, 'name');
verifyConfigurable(class cls {}, 'name');
assert.sameValue(
  Object.hasOwnProperty.call(class { constructor() {} }, 'name'), false
);
assert.sameValue(class cls { constructor() {} }.name, 'cls');
verifyNotEnumerable(class cls { constructor() {} }, 'name');
verifyNotWritable(class cls { constructor() {} }, 'name');
verifyConfigurable(class cls { constructor() {} }, 'name');