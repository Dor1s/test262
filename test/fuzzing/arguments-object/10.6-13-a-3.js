    var called = false;
    
    function test1(flag) {
        if (flag!==true) {
            test2();
        } else {
            called = true;
        }
    }
    function test2() {  
       if (arguments.callee.caller===undefined) {
         called = true;  //Extension not supported - fake it
       } else {     
         var explicit = arguments.callee.caller;
         explicit(true);
       }
    }
    
    test1();
assert(called, 'called !== true');