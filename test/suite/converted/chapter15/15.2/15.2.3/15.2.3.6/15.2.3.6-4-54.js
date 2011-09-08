/// Copyright (c) 2009 Microsoft Corporation 
/// 
/// Redistribution and use in source and binary forms, with or without modification, are permitted provided
/// that the following conditions are met: 
///    * Redistributions of source code must retain the above copyright notice, this list of conditions and
///      the following disclaimer. 
///    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
///      the following disclaimer in the documentation and/or other materials provided with the distribution.  
///    * Neither the name of Microsoft nor the names of its contributors may be used to
///      endorse or promote products derived from this software without specific prior written permission.
/// 
/// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
/// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
/// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
/// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
/// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
/// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
/// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
/// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/**
 * @path: chapter15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-54.js;
 * @description: Object.defineProperty - 'name' property doesn't exist in 'O', test [[Set]] of 'name' property of 'Attributes' is set as undefined value if absent in accessor descriptor 'desc' (8.12.9 step 4.b.i);
 */


function testcase() {
        var obj = {};

        Object.defineProperty(obj, "property", {
            get: function () {
                return "property";
            },
            enumerable: false,
            configurable: false
        });


        if (obj.property !== "property") {
            return false;
        }
        var desc = Object.getOwnPropertyDescriptor(obj, "property");
        if (typeof desc.set !== "undefined") {
            return false;
        }
        for (var p in obj) {
            if (p === "property") {
                return false;
            }
        }
        delete obj.property;
        if (!obj.hasOwnProperty("property")) {
            return false;
        }

        return true;
    }
assertTrue(testcase.call(this));