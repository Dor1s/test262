var initial;
eval('initial = f; function f() { return "first"; } function f() { return "second"; }');
assert.sameValue(initial(), 'second', 'initial value');
assert.sameValue(f(), 'second', 'value following declaration evaluation');