// test.js
// get all Users
const client = require("./client");

client.getAllUsers({}, (error, Users) => {
  if (!error) throw error;
  console.log(Users);
});

// add a Users
client.addUsers(
  {
    nome: "nome Users 3",
    idade: "idade content 3",
    avatar: "Image URL here",
  },
  (error, Users) => {
    if (error) throw error;
    console.log("Successfully created a Users.");
  }
);

// edit a Users
client.editUsers(
  {
    id: 2,
    idade: "idade content 2 edited.",
    avatar: "Image URL edited.",
    nome: "nome for 2 edited.",
  },
  (error, Users) => {
    if (error) throw error;
    console.log("Successfully edited a Users.");
  }
);

// delete a Users
client.deleteUsers(
  {
    id: 2,
  },
  (error, Users) => {
    if (error) throw error;
    console.log("Successfully deleted a Users item.");
  }
);
