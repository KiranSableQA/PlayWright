// Question 3 — Bug Severity Classifier

// Problem: Given a bug's impact score (1–10), classify the severity.
// 9–10 → Critical (block release)
// 7–8 → High
// 4–6 → Medium
// 1–3 → Low

// Anything else → Invalid score
// Sample Input/Output:
// Input: 9
// Output: Severity: Critical — Block release
// Input: 5
// Output: Severity: Medium


let score=9;


// Function to classify bug severity based on impact score in Javascript
if(score) {
    if (score >= 9 && score <= 10) {
        console.log("Severity: Critical — Block release");
    } else if (score >= 7 && score < 9) {
        console.log("Severity: High");
    } else if (score >= 4 && score < 7) {
        console.log("Severity: Medium");
    } else if (score >= 1 && score < 4) {
        console.log("Severity: Low");
    } else {
        console.log("Invalid score");
    }
}