function f() {
  var args = arguments;
  var af = _ => {
    return arguments;
  };
  return args === af();
}
assert(f());