  var o = {};
  var f = function () {
	/* capture foo binding before executing with */
	return foo;
      }
  with (o) {
    var foo = "12.10-0-1";
  }
assert.sameValue(f(), "12.10-0-1", 'f()');