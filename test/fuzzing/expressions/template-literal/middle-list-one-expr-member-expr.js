var object = {
  number: 5,
  string: 'stringValue'
};
assert.sameValue(
  `${0} ${object.number} bar`, '0 5 bar', 'number value property'
);
assert.sameValue(
  `${0} ${object.string} bar`, '0 stringValue bar', 'string value property'
);
assert.sameValue(
  `${0} ${object['string']} bar`,
  '0 stringValue bar',
  'string value property (single-quote string dereference)'
);
assert.sameValue(
  `${0} ${object["string"]} bar`,
  '0 stringValue bar',
  'string value property (double-quote string dereference)'
);