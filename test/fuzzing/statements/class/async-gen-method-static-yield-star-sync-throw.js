var log = [];
var obj = {
  [Symbol.iterator]() {
    var throwCount = 0;
    return {
      name: "syncIterator",
      get next() {
        log.push({ name: "get next" });
        return function() {
          return {
            value: "next-value-1",
            done: false
          };
        };
      },
      get throw() {
        log.push({
          name: "get throw",
          thisValue: this
        });
        return function() {
          log.push({
            name: "call throw",
            thisValue: this,
            args: [...arguments]
          });
          throwCount++;
          if (throwCount == 1) {
            return {
              name: "throw-result-1",
              get value() {
                log.push({
                  name: "get throw value (1)",
                  thisValue: this
                });
                return "throw-value-1";
              },
              get done() {
                log.push({
                  name: "get throw done (1)",
                  thisValue: this
                });
                return false;
              }
            };
          }
          return {
            name: "throw-result-2",
            get value() {
              log.push({
                name: "get throw value (2)",
                thisValue: this
              });
              return "throw-value-2";
            },
            get done() {
              log.push({
                name: "get throw done (2)",
                thisValue: this
              });
              return true;
            }
          };
        };
      }
    };
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
iter.next().then(v => {
  assert.sameValue(log[0].name, "before yield*");
  assert.sameValue(log[1].name, "get next");
  assert.sameValue(v.value, "next-value-1");
  assert.sameValue(v.done, false);
  assert.sameValue(log.length, 2, "log.length");
  iter.throw("throw-arg-1").then(v => {
    assert.sameValue(log[2].name, "get throw");
    assert.sameValue(log[2].thisValue.name, "syncIterator", "get throw thisValue");
    assert.sameValue(log[3].name, "call throw");
    assert.sameValue(log[3].thisValue.name, "syncIterator", "throw thisValue");
    assert.sameValue(log[3].args.length, 1, "throw args.length");
    assert.sameValue(log[3].args[0], "throw-arg-1", "throw args[0]");
    assert.sameValue(log[4].name, "get throw done (1)");
    assert.sameValue(log[4].thisValue.name, "throw-result-1", "get throw done thisValue");
    assert.sameValue(log[5].name, "get throw value (1)");
    assert.sameValue(log[5].thisValue.name, "throw-result-1", "get throw value thisValue");
    assert.sameValue(v.value, "throw-value-1");
    assert.sameValue(v.done, false);
    assert.sameValue(log.length, 6, "log.length");
    iter.throw("throw-arg-2").then(v => {
      assert.sameValue(log[6].name, "get throw");
      assert.sameValue(log[6].thisValue.name, "syncIterator", "get throw thisValue");
      assert.sameValue(log[7].name, "call throw");
      assert.sameValue(log[7].thisValue.name, "syncIterator", "throw thisValue");
      assert.sameValue(log[7].args.length, 1, "throw args.length");
      assert.sameValue(log[7].args[0], "throw-arg-2", "throw args[0]");
      assert.sameValue(log[8].name, "get throw done (2)");
      assert.sameValue(log[8].thisValue.name, "throw-result-2", "get throw done thisValue");
      assert.sameValue(log[9].name, "get throw value (2)");
      assert.sameValue(log[9].thisValue.name, "throw-result-2", "get throw value thisValue");
      assert.sameValue(log[10].name, "after yield*");
      assert.sameValue(log[10].value, "throw-value-2");
      assert.sameValue(v.value, "return-value");
      assert.sameValue(v.done, true);
      assert.sameValue(log.length, 11, "log.length");
    }).then($DONE, $DONE);
  }).catch($DONE);
}).catch($DONE);
assert.sameValue(callCount, 1);