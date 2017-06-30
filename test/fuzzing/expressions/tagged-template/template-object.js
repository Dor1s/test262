var templateObject;
(function(parameter) {
  templateObject = parameter;
})`${1}`;
assert(Array.isArray(templateObject.raw), 'The template object is an array');
assert(templateObject.hasOwnProperty('raw'));
verifyNotEnumerable(templateObject, 'raw');
verifyNotWritable(templateObject, 'raw')
verifyNotConfigurable(templateObject, 'raw');
assert(Array.isArray(templateObject), 'The "raw" object is an array');
verifyEnumerable(templateObject, '0');
verifyNotWritable(templateObject, '0')
verifyNotConfigurable(templateObject, '0');
verifyNotEnumerable(templateObject, 'length');
verifyNotWritable(templateObject, 'length')
verifyNotConfigurable(templateObject, 'length');
verifyEnumerable(templateObject.raw, '0');
verifyNotWritable(templateObject.raw, '0')
verifyNotConfigurable(templateObject.raw, '0');
verifyNotEnumerable(templateObject.raw, 'length');
verifyNotWritable(templateObject.raw, 'length')
verifyNotConfigurable(templateObject.raw, 'length');