const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
  model:{
    type: String, 
    required: true,
  },
  licensePlate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});


// Registrando o schema e atribuindo a uma tabela
mongoose.model('Vehicle',vehicleSchema);

