assert.sameValue(eval('1; try { } catch (err) { } finally { }'), undefined);
assert.sameValue(eval('2; try { } catch (err) { 3; } finally { }'), undefined);
assert.sameValue(eval('4; try { } catch (err) { } finally { 5; }'), undefined);
assert.sameValue(eval('6; try { } catch (err) { 7; } finally { 8; }'), undefined);
assert.sameValue(eval('9; try { 10; } catch (err) { } finally { }'), 10);
assert.sameValue(eval('11; try { 12; } catch (err) { 13; } finally { }'), 12);
assert.sameValue(eval('14; try { 15; } catch (err) { } finally { 16; }'), 15);
assert.sameValue(eval('17; try { 18; } catch (err) { 19; } finally { 20; }'), 18);