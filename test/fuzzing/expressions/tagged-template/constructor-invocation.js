function Constructor(x) {
  arg = x;
}
var tag = function(x) {
  templateObject = x;
  return Constructor;
};
var arg = null;
var instance, templateObject;
instance = new tag`first template`;
assert(instance instanceof Constructor);
assert.sameValue(templateObject[0], 'first template');
assert.sameValue(arg, undefined);
instance = new tag`second template`('constructor argument');
assert.sameValue(templateObject[0], 'second template', 'tagging function');
assert.sameValue(arg, 'constructor argument');