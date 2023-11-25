const { mongoose, banco } = require('./conexao');

const LivroSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo: {
        type: String,
        required: true,
    },
    codEditora: {
        type: Number,
        required: true,
    },
    resumo: {
        type: String,
        required: true,
    },
    autores: {
        type: [String],
        required: true,
    },
});

const Livro = mongoose.model('Livro', LivroSchema);

module.exports = Livro;