throw "Test262: This statement should not be evaluated.";
for ({ x: { get x() {} } } of [{ x: {} }]) ;