class C {
  get ['a']() {
    return 'A';
  }
}
assert.sameValue(new C().a, 'A', "The value of `new C().a` is `'A'`");
class C2 {
  get b() {
    $ERROR("The first `b` getter definition in `C2` is unreachable");
  }
  get ['b']() {
    return 'B';
  }
}
assert.sameValue(new C2().b, 'B', "The value of `new C2().b` is `'B'`");
class C3 {
  get c() {
    $ERROR("The first `c` getter definition in `C3` is unreachable");
  }
  get ['c']() {
    $ERROR("The second `c` getter definition in `C3` is unreachable");
  }
  get ['c']() {
    return 'C';
  }
}
assert.sameValue(new C3().c, 'C', "The value of `new C3().c` is `'C'`");
class C4 {
  get ['d']() {
    $ERROR("The first `d` getter definition in `C4` is unreachable");
  }
  get d() {
    return 'D';
  }
}
assert.sameValue(new C4().d, 'D', "The value of `new C4().d` is `'D'`");