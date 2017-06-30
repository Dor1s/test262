var g = function*() {};
assert(g() instanceof g, 'Instance created via function invocation');