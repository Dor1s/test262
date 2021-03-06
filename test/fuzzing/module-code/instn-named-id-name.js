var _if = 1;
var _import = 2;
var _export = 3;
var _await = 4;
var _arguments = 5;
var _eval = 6;
var _default = 7;
var _as = 8;
export {
    _if as if,
    _import as import,
    _export as export,
    _await as await,
    _arguments as arguments,
    _eval as eval,
    _default as default,
    _as as as
  };
import {
    if as if_,
    import as import_,
    export as export_,
    await as await_,
    arguments as arguments_,
    eval as eval_,
    default as default_,
    as as as
  } from './instn-named-id-name.js';
assert.sameValue(if_, 1);
assert.sameValue(import_, 2);
assert.sameValue(export_, 3);
assert.sameValue(await_, 4);
assert.sameValue(arguments_, 5);
assert.sameValue(eval_, 6);
assert.sameValue(default_, 7);
assert.sameValue(as, 8);