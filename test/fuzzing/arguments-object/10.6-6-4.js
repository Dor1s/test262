function testcase() {
      var arguments= undefined;
	(function (a,b,c) { assert.sameValue(arguments.length, 0); })();
 }
testcase();