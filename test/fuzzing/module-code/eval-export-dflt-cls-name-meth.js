export default class { static name() { return 'name method'; } }
import C from './eval-export-dflt-cls-name-meth.js';
assert.sameValue(
  C.name(), 'name method', '`name` property is not over-written'
);