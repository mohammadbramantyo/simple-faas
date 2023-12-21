// netlify/functions/addNumbers.js
exports.handler = async (event, context) => {
    const { a, b } = event.queryStringParameters || {};
    
    // Check the existence of a and b
    if (!a || !b) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Both 'a' and 'b' parameters are required." }),
      };
    }
  
    // Convert the parameters to numbers
    const numA = parseFloat(a);
    const numB = parseFloat(b);
  
    if (isNaN(numA) || isNaN(numB)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid parameters. 'a' and 'b' must be valid numbers." }),
      };
    }
  
    const sum = numA + numB;
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        result: `The result for ${a} + ${b} is ${sum}`
      }),
    };
  };
  