var object = {
  number: 5,
  string: 'stringValue'
};
assert.sameValue(
  `foo ${object.number} bar`, 'foo 5 bar', 'number value property'
);
assert.sameValue(
  `foo ${object.string} bar`, 'foo stringValue bar', 'string value property'
);
assert.sameValue(
  `foo ${object['string']} bar`,
  'foo stringValue bar',
  'string value property (single-quote string dereference)'
);
assert.sameValue(
  `foo ${object["string"]} bar`,
  'foo stringValue bar',
  'string value property (double-quote string dereference)'
);