var calls = 0;
class C {
  set ['a'](_) {
    calls++;
  }
}
new C().a = 'A';
assert.sameValue(calls, 1, "The value of `calls` is `1`, after executing `new C().a = 'A';`");
calls = 0;
class C2 {
  set b(_) {
    $ERROR("The first `b` setter definition in `C2` is unreachable");
  }
  set ['b'](_) {
    calls++;
  }
}
new C2().b = 'B';
assert.sameValue(calls, 1, "The value of `calls` is `1`, after executing `new C2().b = 'B';`");
calls = 0;
class C3 {
  set c(_) {
    $ERROR("The first `c` setter definition in `C3` is unreachable");
  }
  set ['c'](_) {
    $ERROR("The second `c` setter definition in `C3` is unreachable");
  }
  set ['c'](_) {
    calls++
  }
}
new C3().c = 'C';
assert.sameValue(calls, 1, "The value of `calls` is `1`, after executing `new C3().c = 'C';`");
calls = 0;
class C4 {
  set ['d'](_) {
    $ERROR("The first `d` setter definition in `C4` is unreachable");
  }
  set d(_) {
    calls++
  }
}
new C4().d = 'D';
assert.sameValue(calls, 1, "The value of `calls` is `1`, after executing `new C4().d = 'D';`");