async function* f() {
  for await (var x of []) let // ASI
  {}
}