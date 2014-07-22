function make(Schema, mongoose, Job) {
    var USchema = new Schema({
        tipo: String,
        nome: {
            type: String,
            unique: true
        },
        endereco: String,
        imagens: String,
        imagensD1: String,
        imagensD2: String,
        telefone: String,
        descricao: String
    });

    return mongoose.model('Utilidade', USchema);
}

module.exports.make = make;