{
var counter = 0;
for ([ unresolvable ] of [[]]) {
  
  counter += 1;
}
assert.sameValue(counter, 1);
}
assert.sameValue(unresolvable, undefined);