var fromA, fromB;
class A {}
class B extends A {}
class C extends B {
  method() {
    fromA = eval('super.fromA;');
    fromB = eval('super.fromB;');
  }
}
A.prototype.fromA = 'a';
A.prototype.fromB = 'a';
B.prototype.fromB = 'b';
C.prototype.fromA = 'c';
C.prototype.fromB = 'c';
C.prototype.method();
assert.sameValue(fromA, 'a');
assert.sameValue(fromB, 'b');