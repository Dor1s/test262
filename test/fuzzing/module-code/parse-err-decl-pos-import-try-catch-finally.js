throw "Test262: This statement should not be evaluated.";
try { } catch (err) { } finally {
  import v from './decl-pos-import-try-catch-finally.js';
}