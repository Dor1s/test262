var o = {};
o.attr = function() {};
assert.sameValue(Object.hasOwnProperty.call(o.attr, 'name'), false);