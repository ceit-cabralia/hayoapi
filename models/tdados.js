function make(Schema, mongoose, Job) {
    var TSchema = new Schema({
        tipo: String,
        nome: {
            type: String,
            unique: true
        },
        imagens: String,
        imagensD1: String,
        imagensD2: String,
        telefone: String,
        descricao: String
    });

    return mongoose.model('Transporte', TSchema);
}

module.exports.make = make;