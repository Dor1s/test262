const c = null;
let iterCount = 0;
async function * fn() {
  for await ([ c ] of [[1]]) {
    
    iterCount += 1;
  }
}
let promise = fn().next();