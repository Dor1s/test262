    var called = false;
    
    function test1(flag) {
        if (flag!==true) {
            test2();
        } else {
            called = true;
        }
    }
    function test2() {
        if(arguments.callee.caller===undefined) {
          called=true; // Extension not supported - fake it
        } else {
          arguments.callee.caller(true);
        }
    }
    
    test1();
assert(called, 'called !== true');