//Criando o Schema

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

/**
 * @swagger
 * components:
 *  schemas:
 *      Ride:
 *        type: object
 *        properties:
 *          user:
 *              $ref: '#/components/schemas/User'
 *          vehicle:
 *             $ref: '#/components/schemas/Vehicle'
 *          startPlace:
 *              type: string
 *          finishPlace:
 *              type: string
 *          status :
 *              type: string
 *          startTime:
 *              type: date
 *          finishTime:
 *              type: date
 *
 *        required:
 *          - User
 *          - Vehicle
 *          - StartPlace
 *          - FinishPlace
 *          - Status
 *
 */
const RideSchema = new mongoose.Schema({
  user: {
    type: Object,
    required: true
  },
  vehicle: {
    type: Object,
    required: true
  },
  startPlace: {
    type: String,
    required: true
  },
  finishPlace: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    required: false
  },
  finishTime: {
    type: Date,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Registrando o mongoose paginate da Aplicação
RideSchema.plugin(mongoosePaginate);

// Registrando o schema
module.exports = mongoose.model('Ride', RideSchema);
