var templateObject = null;
var threwError = false;
(function(parameter) {
  templateObject = parameter;
})``;
assert(templateObject !== null);
templateObject.test262Prop = true;
assert.sameValue(
  templateObject.test262Prop, undefined, 'The template object is frozen'
);
templateObject.raw.test262Prop = true;
assert.sameValue(
  templateObject.raw.test262Prop, undefined, 'The "raw" object is frozen'
);
assert(
  templateObject.raw !== undefined , 'Template object defines a `raw` property'
);