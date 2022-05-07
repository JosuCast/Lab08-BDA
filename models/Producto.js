var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    nombre:{type:String,required:true,max:20},
    marca:{type:String,required:true,max:20},
    stock:{type:String,required:true,max:20},
    provedor:{type:String,required:true,max:20},
    created_at:{type:String,default:Date.Now}
});

module.exports = mongoose.model('Producto', ProductoSchema);