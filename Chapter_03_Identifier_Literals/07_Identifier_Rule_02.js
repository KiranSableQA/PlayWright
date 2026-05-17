
// ============================================
// IDENTIFIER NAMING CONVENTIONS IN JAVASCRIPT
// ============================================

// ============================================
// 1. camelCase (Recommended for variables & functions)
// ============================================
// Description: First word starts lowercase, each subsequent word starts with uppercase
// Usage: Variables, functions, object properties

var firstName = "Kiran";
var name = "Kiran";
var lastName = "Sable";
var userAge = 25;
var phoneNumber = "9876543210";
var totalAmount = 5000;
var isActive = true;
var getCurrentTime = function() { return new Date(); };
var calculateTotalPrice = function(quantity, price) { return quantity * price; };


// ============================================
// 2. snake_case (Common in Python, SQL, sometimes JS)
// ============================================
// Description: Words separated by underscores, all lowercase
// Usage: Sometimes for constants or database fields

var first_name = "Kiran";
var last_name = "Sable";
var user_age = 25;
var phone_number = "9876543210";
var total_amount = 5000;
var is_active = true;
var get_current_time = function() { return new Date(); };
var calculate_total_price = function(quantity, price) { return quantity * price; };


// ============================================
// 3. PascalCase (UpperCamelCase - for Classes & Constructors)
// ============================================
// Description: First word starts uppercase, each subsequent word starts with uppercase
// Usage: Constructor functions, Classes, object types

var FirstName = "Kiran";
var LastName = "Sable";
var UserAge = 25;
var PhoneNumber = "9876543210";
var TotalAmount = 5000;
var IsActive = true;

// Constructor function example
var UserProfile = function(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

var User = new UserProfile("Kiran", "Sable", 25);


// ============================================
// 4. CONSTANT_CASE (For constants)
// ============================================
// Description: All uppercase letters, words separated by underscores
// Usage: Constants that don't change

var FIRST_NAME = "Kiran";
var LAST_NAME = "Sable";
var USER_AGE = 25;
var PHONE_NUMBER = "9876543210";
var TOTAL_AMOUNT = 5000;
var IS_ACTIVE = true;

var MAX_USER_COUNT = 100;
var MIN_PASSWORD_LENGTH = 8;
var DEFAULT_TIMEOUT = 3000;
var API_BASE_URL = "https://api.example.com";
var DB_HOST = "localhost";
var DB_PORT = 5432;


// ============================================
// 5. flatcase (All lowercase - rare in JS)
// ============================================
// Description: All lowercase, no separators between words
// Usage: Rarely used in JavaScript

var firstname = "Kiran";
var lastname = "Sable";
var userage = 25;
var phonenumber = "9876543210";
var totalamount = 5000;


// ============================================
// 6. KEBAB-CASE (Not valid for identifiers - for reference only)
// ============================================
// Description: Words separated by hyphens, all lowercase
// Note: Cannot be used for variable/function names, but used in HTML/CSS

// var first-name = "Kiran";      // ❌ INVALID - causes error
// var last-name = "Sable";       // ❌ INVALID - causes error
// var user-age = 25;             // ❌ INVALID - causes error
// var phone-number = "9876543210"; // ❌ INVALID - causes error

// Usage in HTML attributes/CSS is valid:
// <div data-first-name="Kiran"></div>  ✅ Valid in HTML
// .user-profile { color: blue; }       ✅ Valid in CSS


// ============================================
// BEST PRACTICES & RECOMMENDATIONS
// ============================================

// ✅ RECOMMENDED: Use camelCase for variables and functions (JavaScript convention)
var userFirstName = "Kiran";
var calculateTotal = function(items) { /* logic */ };
var isUserAdmin = true;

// ✅ RECOMMENDED: Use PascalCase for constructors and classes
var UserAccount = function() { };
var ProductItem = function() { };

// ✅ RECOMMENDED: Use CONSTANT_CASE for constants
var MAX_LOGIN_ATTEMPTS = 5;
var SESSION_TIMEOUT = 1800000;

// ❌ AVOID: Mixing naming conventions in the same project
// var firstName = "John";  // camelCase
// var user_age = 25;       // snake_case - inconsistent!
// var IsActive = true;     // PascalCase - inconsistent!

// ✅ GOOD: Consistent naming throughout project
var firstName = "John";
var userAge = 25;
var isActive = true;
var calculateTotal = function() { };


// ============================================
// COMPARISON TABLE
// ============================================
/*
Naming Convention | Example            | Use Case
=====================================
camelCase        | firstName          | Variables, Functions, Methods
snake_case       | first_name         | Rare in modern JS
PascalCase       | FirstName          | Classes, Constructors
CONSTANT_CASE    | FIRST_NAME         | Constants
flatcase         | firstname          | Rarely used
kebab-case       | first-name         | HTML/CSS only (invalid in JS)

JavaScript Best Practice: camelCase for variables/functions, PascalCase for classes
*/