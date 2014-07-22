// Users model
function make(Schema, mongoose, Job) {
    var PSchema = new Schema({
        nome: {
            type: String,
            unique: true
        },
        endereco: String,
        imagens: String,
        imagensD1: String,
        imagensD2: String,
        descricao: String
    });
    return mongoose.model('Ponto', PSchema);
}


module.exports.make = make;