assert.sameValue(eval('1; try { } catch (err) { }'), undefined);
assert.sameValue(eval('2; try { 3; } catch (err) { }'), 3);
assert.sameValue(eval('4; try { } catch (err) { 5; }'), undefined);
assert.sameValue(eval('6; try { 7; } catch (err) { 8; }'), 7);