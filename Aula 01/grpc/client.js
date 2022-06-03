const grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./Users.proto";

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const UsersService = grpc.loadPackageDefinition(packageDefinition).UsersService;

const client = new UsersService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

module.exports = client;
