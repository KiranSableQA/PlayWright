/*Question 4 — Build Health Reporter

Problem: Given the percentage of test cases passed in a CI build, report build health.
100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)*/

let score =65;

if(score >100 )
    {
console.log("Report --> Green Build")
    }
   else if(score <=99 && score >=90)
    {
console.log("Report --> Stable")
    }
     else if(score >89 && score >70)
    {
console.log("Report --> Unstable")
    }
//   else if(score < 70)
//     {
// console.log("Report --> Unstable")
//     }
    else 
        {
            console.log("Unstable")
        }