assert.throws(ReferenceError, function() {
  eval("var x = asdf\u000Aghjk");
});