  function foo() {
    __ES3_1_test_suite_test_11_13_1_unique_id_3__ = 42;
  }
  foo();
  var desc = Object.getOwnPropertyDescriptor(this, '__ES3_1_test_suite_test_11_13_1_unique_id_3__');
assert.sameValue(desc.value, 42, 'desc.value');
assert.sameValue(desc.writable, true, 'desc.writable');
assert.sameValue(desc.enumerable, true, 'desc.enumerable');
assert.sameValue(desc.configurable, true, 'desc.configurable');