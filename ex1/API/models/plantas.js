var mongoose = require('mongoose');


var plantasSchema = new mongoose.Schema({
        _id: Number,
        registo: Number,
        cod_rua: Number,
        rua: String,
        local: String,
        freguesia: String,
        especie: String,
        nome: String,
        origem: String,
        data_plantacao: String,
        estado: String,
        caldeira: String,
        tutor: String,
        implantacao: String,
        gestor: String,
        data_atual: String,
        intervencoes: Number
});


module.exports = new mongoose.model('plantas',plantasSchema);