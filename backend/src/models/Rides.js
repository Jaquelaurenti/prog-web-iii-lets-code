const mongoose = require('mongoose');

const rideSchema = mongoose.Schema({
  // vincular o usuario através do objeto USER
  user: {
    type: Object,
    required: true,
  },
  // vincular o veículo através do objeto Vehicle
  vehicle: {
    type: Object,
    required: true,
  },
  startPlace: {
    type: String,
    required: true,
  },
  finishPlace: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: false,
  },
  finishTime: {
    type: Date,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }

});

// Registrando o schema e atribuindo a uma tabela
mongoose.model('Ride', rideSchema);


