// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.3.4.5-11-1
description: >
    Function.prototype.bind - internal property [[Prototype]] of 'F'
    is set as Function.prototype
includes: [runTestCase.js]
---*/

function testcase() {

        var foo = function () { };
        try {
            Function.prototype.property = 12;
            var obj = foo.bind({});

            return obj.property === 12;
        } finally {
            delete Function.prototype.property;
        }
    }
runTestCase(testcase);
