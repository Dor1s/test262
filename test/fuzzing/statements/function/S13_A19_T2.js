(function (){
    // since "var" does not override function declaration __decl is set to function
    //////////////////////////////////////////////////////////////////////////////
    //CHECK#1
    if (typeof __decl !== "function") {
    	$ERROR('#1: typeof __decl === "function". Actual: typeof __decl ==='+typeof __decl);
    }
    //
    //////////////////////////////////////////////////////////////////////////////
    
    var __decl = 1;
    
    //since statement was evaluted __decl turns to 1 from function
    //////////////////////////////////////////////////////////////////////////////
    //CHECK#2
    if (__decl !== 1) {
    	$ERROR('#2: __decl === 1. Actual: __decl ==='+__decl);
    }
    //
    //////////////////////////////////////////////////////////////////////////////
    function __decl(){return 1;}
})();