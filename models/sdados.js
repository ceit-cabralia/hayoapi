function make(Schema, mongoose, Job) {
    var SSchema = new Schema({
        nome: {
            type: String,
            unique: true
        },
        mapa: String,
        imagens: String,
        imagensD1: String,
        imagensD2: String

    });
    return mongoose.model('Sobre', SSchema);
}

module.exports.make = make;