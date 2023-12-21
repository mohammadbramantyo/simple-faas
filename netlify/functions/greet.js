
exports.handler = async (event, context) => {
    const { name } = event.queryStringParameters || {};
    const greetingName = name || 'Anonymus';
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        message:`Greetings, ${greetingName}!`}
        ),
    };
  };