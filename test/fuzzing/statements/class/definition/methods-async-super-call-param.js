class A {
  async method() {
    return 'sup';
  }
}
class B extends A {
  async method(x = super.method()) {
    assert.sameValue(await x, 'sup');
  }
}
var child = new B();
child.method().then($DONE, $DONE);