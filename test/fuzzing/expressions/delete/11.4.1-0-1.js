function testcase() {
  var x = 1;
  var y = 2;
  var z = 3;
  assert((!delete x || delete y), '(!delete x || delete y)');
  assert(delete delete z, 'delete delete z');
 }
testcase();