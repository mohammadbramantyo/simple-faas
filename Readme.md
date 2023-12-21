# Simple Faas application

This program contain function that are deployed as a serverless funuction on netlify function

## Usage

This repo conatins 3 simple functions

1. **Hello functions**  
    Description: A Function that return a static hello message  
    Access: `https://simple-faas.netlify.app/.netlify/functions/hello`   
    Return: A Hello json
2. **Greeting**  
    Description: A Function that return greeting message base on the name  
    Access: `https://simple-faas.netlify.app/.netlify/functions/greet?name={name}` name can be optional.  
    Return: A greeting message with the name.
3. **AddNumbers**  
    Description: A function that adds two number `a` and `b`  
    Access: `https://simple-faas.netlify.app/.netlify/functions/addNumbers?a={num1}&b={num2}`  
    Return: A result of adding `a` and `b`