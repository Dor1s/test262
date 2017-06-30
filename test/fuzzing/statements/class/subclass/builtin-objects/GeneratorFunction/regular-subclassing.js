var GeneratorFunction = Object.getPrototypeOf(function* () {}).constructor;
class Gfn extends GeneratorFunction {}
var gfn = new Gfn('a', 'yield a; yield a * 2;');
var iter = gfn(42);
assert.sameValue(iter.next().value, 42);
assert.sameValue(iter.next().value, 84);