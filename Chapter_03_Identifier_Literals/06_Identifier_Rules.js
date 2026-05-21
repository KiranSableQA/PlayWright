// ============================================
// IDENTIFIER RULES IN JAVASCRIPT
// ============================================

// Rule 1: Can start with letter (a-z, A-Z)
var s = 10;
var myVariable = 20;
var MyVariable = 30; 
var firstName = "Kiran";

// Rule 2: Can start with underscore (_)
var _s = 10;
var _privateVar = 100;
var _count = 0;
var __doubleUnderscore = 50;

// Rule 3: Can start with dollar sign ($)
var $ = 10;
var $s = 10;
var $price = 99.99;
var $totalAmount = 5000;

// Rule 4: Can contain letters, digits, underscore, and dollar sign (after first character)
var hjh123 = 10;
var name123 = "John";
var _age_2024 = 25;
var $value_100 = 1000;
var user_name_1 = "Alice";

// Rule 5: Case-sensitive (myVar and myvar are different)
var kiran_Sable = 10;
var kiran_sable = 20;
console.log(kiran_Sable); // 10
console.log(kiran_sable); // 20

// Rule 6: Can have multiple underscores, dollar signs
var __init__ = true;
var _$_special = "value";
var $$ = 100;

// Rule 7: Valid combinations
var myVar2 = 30;
var _privateMethod = function() {};
var $jQueryElement = "element";
var user_age_2024 = 35;

// ============================================
// INVALID IDENTIFIER EXAMPLES (will cause errors)
// ============================================

// INVALID: Cannot start with a digit
// var 123abc = 10;  // ❌ SyntaxError
// var 5myVar = 20;  // ❌ SyntaxError

// INVALID: Cannot contain spaces
// var my variable = 10;  // ❌ SyntaxError
// var my var = 20;       // ❌ SyntaxError

// INVALID: Cannot use hyphens (-)
// var my-variable = 10;  // ❌ SyntaxError
// var user-name = "John"; // ❌ SyntaxError

// INVALID: Cannot use dots (.)
// var my.variable = 10;   // ❌ SyntaxError
// var obj.prop = 20;      // ❌ SyntaxError

// INVALID: Cannot use operators or special characters
// var my+var = 10;        // ❌ SyntaxError
// var my*var = 20;        // ❌ SyntaxError
// var my@var = 30;        // ❌ SyntaxError
// var my&var = 40;        // ❌ SyntaxError
// var my%var = 50;        // ❌ SyntaxError

// INVALID: Cannot be reserved keywords
// var var = 10;           // ❌ SyntaxError
// var let = 20;           // ❌ SyntaxError
// var const = 30;         // ❌ SyntaxError
// var if = 40;            // ❌ SyntaxError
// var else = 50;          // ❌ SyntaxError
// var function = 60;      // ❌ SyntaxError
// var return = 70;        // ❌ SyntaxError
// var for = 80;           // ❌ SyntaxError
// var while = 90;         // ❌ SyntaxError
// var class = 100;        // ❌ SyntaxError

// ============================================
// RESERVED KEYWORDS (Cannot be used as identifiers)
// ============================================
// break, case, catch, class, const, continue, debugger, default, delete,
// do, else, export, extends, finally, for, function, if, import, in,
// instanceof, let, new, return, super, switch, this, throw, try,
// typeof, var, void, while, with, yield
