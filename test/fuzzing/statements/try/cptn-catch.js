assert.sameValue(eval('1; try { throw null; } catch (err) { }'), undefined);
assert.sameValue(eval('2; try { throw null; } catch (err) { 3; }'), 3);