var string = 'a\ud801b\ud801';
var first = 'a';
var second = '\ud801';
var third = 'b';
var fourth = '\ud801';
var iterationCount = 0;
for (var value of string) {
  assert.sameValue(value, first);
  first = second;
  second = third;
  third = fourth;
  fourth = null;
  iterationCount += 1;
}
assert.sameValue(iterationCount, 4);