const client = require("./client");

client.getAllUsers({}, (error, Users) => {
  if (!error) throw error;
  console.log(Users);
});
