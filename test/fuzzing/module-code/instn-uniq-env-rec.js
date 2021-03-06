import './instn-uniq-env-rec-other_FIXTURE.js'
var first = 1;
let second = 2;
const third = 3;
class fourth {}
function fifth() { return 'fifth'; }
function* sixth() { return 'sixth'; }
assert.sameValue(first, 1);
assert.sameValue(second, 2);
assert.sameValue(third, 3);
assert.sameValue(typeof fourth, 'function', 'class declaration');
assert.sameValue(typeof fifth, 'function', 'function declaration');
assert.sameValue(fifth(), 'fifth');
assert.sameValue(typeof sixth, 'function', 'generator function declaration');
assert.sameValue(sixth().next().value, 'sixth');
typeof seventh;
assert.throws(ReferenceError, function() {
  seventh;
});
typeof eight;
assert.throws(ReferenceError, function() {
  eighth;
});
typeof ninth;
assert.throws(ReferenceError, function() {
  ninth;
});
typeof tenth;
assert.throws(ReferenceError, function() {
  tenth;
});
typeof eleventh;
assert.throws(ReferenceError, function() {
  eleventh;
});
typeof twelfth;
assert.throws(ReferenceError, function() {
  twelfth;
});