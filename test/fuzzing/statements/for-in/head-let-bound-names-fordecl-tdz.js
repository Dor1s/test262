assert.throws(ReferenceError, function() {
  let x = 1;
  for (let x in { x }) {}
});