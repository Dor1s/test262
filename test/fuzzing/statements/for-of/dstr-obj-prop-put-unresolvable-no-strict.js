{
var counter = 0;
for ({ x: unresolvable } of [{}]) {
  
  counter += 1;
}
assert.sameValue(counter, 1);
}
assert.sameValue(unresolvable, undefined);