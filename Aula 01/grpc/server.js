const grpc = require("@grpc/grpc-js");
const PROTO_PATH = "./users.proto";
var protoLoader = require("@grpc/proto-loader");

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};
var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const UsersProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();
const Users = [
  { id: "1", nome: "Note 1", idade: "Content 1", avatar: "Post image 1" },
  { id: "2", nome: "Note 2", idade: "Content 2", avatar: "Post image 2" },
];

server.addService(UsersProto.UsersService.service, {
  getAllUsers: (_, callback) => {
    callback(null, Users);
  },
  getUsers: (_, callback) => {
    const UsersId = 1;//_.request.id;
    const UsersItem = Users.find(({ id }) => UsersId == id);
    callback(null, UsersItem);
  },
  deleteUsers: (_, callback) => {
    const UsersId = 1//_.request.id;
    Users = Users.filter(({ id }) => id !== UsersId);
    callback(null, {});
  },
  editUsers: (_, callback) => {
    const UsersId = _.request.id;
    const UsersItem = Users.find(({ id }) => UsersId == id);
    UsersItem.idade = _.request.idade;
    UsersItem.avatar = _.request.avatar;
    UsersItem.nome = _.request.nome;
    callback(null, UsersItem);
  },
  addUsers: (call, callback) => {
    let _Users = { id: Date.now(), ...call.request };
    Users.push(_Users);
    callback(null, _Users);
  },
});

server.bindAsync(
  "127.0.0.1:50051",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    console.log("Server at port:", port);
    console.log("Server running at http://127.0.0.1:50051");
    server.start();
  }
);
