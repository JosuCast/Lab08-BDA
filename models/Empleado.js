var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadoSchema = new Schema({
    nombre:{type:String,required:true,max:20},
    apellido:{type:String,required:true,max:20},
    dni:{type:String,required:true,max:8},
    celular:{type:String,required:true,max:9},
    email: {type: String, required: true},
    direccion: {type: String, required: true},
    created_at:{type:String,default:Date.Now}
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);