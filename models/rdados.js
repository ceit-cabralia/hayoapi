function make(Schema, mongoose, Job) {
    var RSchema = new Schema({
        tipo: String,
        nome: {
            type: String,
            unique: true
        },
        imagens: String,
        imagensD1: String,
        imagensD2: String,
        endereco: String,
        telefone: String,
        descricao: String
    });
    return mongoose.model('Restaurante', RSchema);
}

module.exports.make = make;