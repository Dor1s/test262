throw "Test262: This statement should not be evaluated.";
switch (0) { case 1: async function* f() {} default: async function* f() {} }