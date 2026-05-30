// Test Case Pass/Fail Verdict

// Problem: Compare actual result with expected result and print test verdict.

// Sample Input/Output:

// expected = "Login Successful"
// actual   = "Login Successful"
// Output: ✅ Test Passed

// expected = "Login Successful"
// actual   = "Invalid Credentials"
// Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials


let expected = "Login Successful"
let actual   = "Login Successful"

if(expected === actual)
    {
        console.log("Login Successful", "Test_passed");
    }
    else 
        {
            console.log("Login Un-Successful", "Test Failed — Expected: Login Successful, Got: Invalid Credentials");
        }