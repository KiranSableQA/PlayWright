// HTTP Status Code Categorizer

/*
Problem: Given an HTTP status code, print which category it belongs to.
200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid
*/


let statusCode = 200;

if (statusCode === 200)
    {
      console.log("Success")
    }
    else if (statusCode === 300)
    {
        console.log("Redirection")
    }
    else if (statusCode === 404)
    {
        console.log("Client Error")
    } 
    else if (statusCode === 500)
    {
        console.log("Server Error")
    }
    else 
        {
              console.log("invalid ")
        }