assert.sameValue(
  eval('1; try { throw null; } catch (err) { } finally { }'), undefined
);
assert.sameValue(
  eval('2; try { throw null; } catch (err) { 3; } finally { }'), 3
);
assert.sameValue(
  eval('4; try { throw null; } catch (err) { } finally { 5; }'), undefined
);
assert.sameValue(
  eval('6; try { throw null; } catch (err) { 7; } finally { 8; }'), 7
);