throw "Test262: This statement should not be evaluated.";
for ({ x: { x = yield } } of [{ x: {} }]) ;