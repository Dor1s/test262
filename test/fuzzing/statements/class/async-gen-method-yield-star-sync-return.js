var log = [];
var obj = {
  [Symbol.iterator]() {
    var returnCount = 0;
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
      get return() {
        log.push({
          name: "get return",
          thisValue: this
        });
        return function() {
          log.push({
            name: "call return",
            thisValue: this,
            args: [...arguments]
          });
          returnCount++;
          if (returnCount == 1) {
            return {
              name: "return-result-1",
              get value() {
                log.push({
                  name: "get return value (1)",
                  thisValue: this
                });
                return "return-value-1";
              },
              get done() {
                log.push({
                  name: "get return done (1)",
                  thisValue: this
                });
                return false;
              }
            };
          }
          return {
            name: "return-result-2",
            get value() {
              log.push({
                name: "get return value (2)",
                thisValue: this
              });
              return "return-value-2";
            },
            get done() {
              log.push({
                name: "get return done (2)",
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
class C { async *gen() {
    callCount += 1;
    log.push({ name: "before yield*" });
      yield* obj;
}}
var gen = C.prototype.gen;
var iter = gen();
assert.sameValue(log.length, 0, "log.length");
iter.next().then(v => {
  assert.sameValue(log[0].name, "before yield*");
  assert.sameValue(log[1].name, "get next");
  assert.sameValue(v.value, "next-value-1");
  assert.sameValue(v.done, false);
  assert.sameValue(log.length, 2, "log.length");
  iter.return("return-arg-1").then(v => {
    assert.sameValue(log[2].name, "get return");
    assert.sameValue(log[2].thisValue.name, "syncIterator", "get return thisValue");
    assert.sameValue(log[3].name, "call return");
    assert.sameValue(log[3].thisValue.name, "syncIterator", "return thisValue");
    assert.sameValue(log[3].args.length, 1, "return args.length");
    assert.sameValue(log[3].args[0], "return-arg-1", "return args[0]");
    assert.sameValue(log[4].name, "get return done (1)");
    assert.sameValue(log[4].thisValue.name, "return-result-1", "get return done thisValue");
    assert.sameValue(log[5].name, "get return value (1)");
    assert.sameValue(log[5].thisValue.name, "return-result-1", "get return value thisValue");
    assert.sameValue(v.value, "return-value-1");
    assert.sameValue(v.done, false);
    assert.sameValue(log.length, 6, "log.length");
    iter.return("return-arg-2").then(v => {
      assert.sameValue(log[6].name, "get return");
      assert.sameValue(log[6].thisValue.name, "syncIterator", "get return thisValue");
      assert.sameValue(log[7].name, "call return");
      assert.sameValue(log[7].thisValue.name, "syncIterator", "get return thisValue");
      assert.sameValue(log[7].args.length, 1, "return args.length");
      assert.sameValue(log[7].args[0], "return-arg-2", "return args[0]");
      assert.sameValue(log[8].name, "get return done (2)");
      assert.sameValue(log[8].thisValue.name, "return-result-2", "get return done thisValue");
      assert.sameValue(log[9].name, "get return value (2)");
      assert.sameValue(log[9].thisValue.name, "return-result-2", "get return value thisValue");
      assert.sameValue(v.value, "return-value-2");
      assert.sameValue(v.done, true);
      assert.sameValue(log.length, 10, "log.length");
    }).then($DONE, $DONE);
  }).catch($DONE);
}).catch($DONE);
assert.sameValue(callCount, 1);