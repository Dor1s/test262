function testcase() {
        var interface = 2;
        "use strict";
        var public = 1;
        assert.sameValue(public, 1, 'public');
        assert.sameValue(interface, 2, 'interface');
    }
testcase();