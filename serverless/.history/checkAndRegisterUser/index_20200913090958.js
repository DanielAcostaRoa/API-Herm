const fetch = require('node-fetch');
module.exports = async function(context, req) {
  try {
    const { session_variables } = req.body;
    const username = session_variables['x-hasura-user-id'];
    const accessToken = session_variables['x-hasura-access-token'];
    const accessTokenSecret = session_variables['x-hasura-access-token-secret'];
    let affected_rows = 0;
  } 
  catch (error) {
    context.res = {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
      body: error
    };
    return;
  }
};