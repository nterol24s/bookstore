export function handler(event, context, callback) {
  console.log("queryStringParameters", event.queryStringParameters);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello, World!" }),
  });
}
