  var bIsFooCalled = false;
  var foo = function(){bIsFooCalled = true;};
  var d = delete foo();
assert.sameValue(d, true, 'd');
assert.sameValue(bIsFooCalled, true, 'bIsFooCalled');