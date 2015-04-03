/**
 * @fileoverview Tests for `no-invalid-define` rule
 * @author Casey Visco <cvisco@gmail.com>
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require("eslint"),
    ESLintTester = require("eslint-tester"),
    fixtures = require("../fixtures");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint.linter);

eslintTester.addRuleTest("lib/rules/no-invalid-define", {

    valid: [
        fixtures.define.OBJECT,
        fixtures.define.FUNCTION,
        fixtures.define.COMMONJS_1,
        fixtures.define.COMMONJS_2,
        fixtures.define.COMMONJS_3,
        fixtures.define.AMD,
        fixtures.define.AMD_EMPTY,
        fixtures.define.AMD_NAMED,
        fixtures.define.AMD_NAMED_EMPTY
    ],

    invalid: [
        {
            code: fixtures.define.EMPTY,
            errors: [{
                message: "Invalid module definition",
                type: "CallExpression"
            }]
        },
        {
            code: fixtures.define.NONSENSE,
            errors: [{
                message: "Invalid module definition",
                type: "CallExpression"
            }]
        }
    ]

});