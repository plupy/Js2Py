// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.14-9-b-i-18
description: >
    Array.prototype.indexOf - element to be retrieved is own accessor
    property without a get function on an Array-like object
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { length: 1 };
        Object.defineProperty(obj, "0", {
            set: function () { },
            configurable: true
        });

        return 0 === Array.prototype.indexOf.call(obj, undefined);
    }
runTestCase(testcase);
