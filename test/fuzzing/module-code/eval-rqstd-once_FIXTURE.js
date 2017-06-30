export default null;
var global = Function('return this;')();
if (global.test262) {
  throw new Error('Module was evaluated more than once.');
}
global.test262 = 262;
if (global.test262 !== 262) {
  throw new Error('Module was unable to signal evaluation.');
}