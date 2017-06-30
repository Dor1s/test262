var templateObject = null;
var threwError = false;
(function(parameter) {
  templateObject = parameter;
})``;
assert(templateObject !== null);
assert.throws(TypeError, function() {
  templateObject.test262Prop = true;
});
assert(
  templateObject.raw !== undefined , 'Template object defines a `raw` property'
);
assert.throws(TypeError, function() {
  templateObject.raw.test262Prop = true;
});