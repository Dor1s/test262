function* g() {}
assert(g() instanceof g, 'Instance created via function invocation');