const Livro = require('./livro-schema');
const mongoose = require('mongoose')

const obterLivros = async () => {
    try {
        const livros = await Livro.find();
        return livros;
    } catch (error) {
        console.error('Erro ao obter os livros: ', error);
        throw error;
    }
};

const incluir = async (livro) => {
    try {
        const novoLivro = new Livro({
            ...livro,
            _id: new mongoose.Types.ObjectId(),
        });
        console.log('Novo livro antes de salvar', novoLivro)
        
        await novoLivro.save();
    } catch (error) {
        console.error('Erro ao incluir livro: ', error);
        throw error;
    }
};

const excluir = async (codigo) => {
    try {
        await Livro.deleteOne({ _id: codigo });
    } catch (error) {
        console.error('Erro ao excluir livro: ', error);
        throw error;
    }
};

module.exports = { obterLivros, incluir, excluir };