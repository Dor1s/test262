var log = [];
var obj = {
  get [Symbol.iterator]() {
    log.push({
      name: "get [Symbol.iterator]",
      thisValue: this
    });
    return function() {
      log.push({
        name: "call [Symbol.iterator]",
        thisValue: this,
        args: [...arguments]
      });
      var nextCount = 0;
      return {
        name: "syncIterator",
        get next() {
          log.push({
            name: "get next",
            thisValue: this
          });
          return function() {
            log.push({
              name: "call next",
              thisValue: this,
              args: [...arguments]
            });
            nextCount++;
            if (nextCount == 1) {
              return {
                name: "next-result-1",
                get value() {
                  log.push({
                    name: "get next value (1)",
                    thisValue: this
                  });
                  return "next-value-1";
                },
                get done() {
                  log.push({
                    name: "get next done (1)",
                    thisValue: this
                  });
                  return false;
                }
              };
            }
            return {
              name: "next-result-2",
              get value() {
                log.push({
                  name: "get next value (2)",
                  thisValue: this
                });
                return "next-value-2";
              },
              get done() {
                log.push({
                  name: "get next done (2)",
                  thisValue: this
                });
                return true;
              }
            };
          };
        }
      };
    };
  },
  get [Symbol.asyncIterator]() {
    log.push({ name: "get [Symbol.asyncIterator]" });
    return null;
  }
};
var callCount = 0;
class C { static async *gen() {
    callCount += 1;
    log.push({ name: "before yield*" });
      var v = yield* obj;
      log.push({
        name: "after yield*",
        value: v
      });
      return "return-value";
}}
var gen = C.gen;
var iter = gen();
assert.sameValue(log.length, 0, "log.length");
iter.next("next-arg-1").then(v => {
  assert.sameValue(log[0].name, "before yield*");
  assert.sameValue(log[1].name, "get [Symbol.asyncIterator]");
  assert.sameValue(log[2].name, "get [Symbol.iterator]");
  assert.sameValue(log[2].thisValue, obj, "get [Symbol.iterator] thisValue");
  assert.sameValue(log[3].name, "call [Symbol.iterator]");
  assert.sameValue(log[3].thisValue, obj, "[Symbol.iterator] thisValue");
  assert.sameValue(log[3].args.length, 0, "[Symbol.iterator] args.length");
  assert.sameValue(log[4].name, "get next");
  assert.sameValue(log[4].thisValue.name, "syncIterator", "get next thisValue");
  assert.sameValue(log[5].name, "call next");
  assert.sameValue(log[5].thisValue.name, "syncIterator", "next thisValue");
  assert.sameValue(log[5].args.length, 1, "next args.length");
  assert.sameValue(log[5].args[0], undefined, "next args[0]");
  assert.sameValue(log[6].name, "get next done (1)");
  assert.sameValue(log[6].thisValue.name, "next-result-1", "get next done thisValue");
  assert.sameValue(log[7].name, "get next value (1)");
  assert.sameValue(log[7].thisValue.name, "next-result-1", "get next value thisValue");
  assert.sameValue(v.value, "next-value-1");
  assert.sameValue(v.done, false);
  assert.sameValue(log.length, 8, "log.length");
  iter.next("next-arg-2").then(v => {
    assert.sameValue(log[8].name, "get next");
    assert.sameValue(log[8].thisValue.name, "syncIterator", "get next thisValue");
    assert.sameValue(log[9].name, "call next");
    assert.sameValue(log[9].thisValue.name, "syncIterator", "next thisValue");
    assert.sameValue(log[9].args.length, 1, "next args.length");
    assert.sameValue(log[9].args[0], "next-arg-2", "next args[0]");
    assert.sameValue(log[10].name, "get next done (2)");
    assert.sameValue(log[10].thisValue.name, "next-result-2", "get next done thisValue");
    assert.sameValue(log[11].name, "get next value (2)");
    assert.sameValue(log[11].thisValue.name, "next-result-2", "get next value thisValue");
    assert.sameValue(log[12].name, "after yield*");
    assert.sameValue(log[12].value, "next-value-2");
    assert.sameValue(v.value, "return-value");
    assert.sameValue(v.done, true);
    assert.sameValue(log.length, 13, "log.length");
  }).then($DONE, $DONE);
}).catch($DONE);
assert.sameValue(callCount, 1);