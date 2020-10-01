const fetch = require('node-fetch');
module.exports = async function(context, req) {
  try {
  } catch (error) {
    context.res = {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
      body: error
    };
    return;
  }
};