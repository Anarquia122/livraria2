const express = require('express');
const livroDao = require('../modelo/livros-dao');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const livros = await livroDao.obterLivros();
        res.json(livros);
    } catch (error) {
        console.error('Erro ao obter livros: ', error);
        res.status(500).json({ mensagem: 'Erro ao obter livros.' });
    }
});

router.post('/', async (req, res) => {
    const novoLivro = req.body;
    try {
        await livroDao.incluir(novoLivro);
        res.json({ mensagem: 'Livro incluído com sucesso.' })
    } catch (error) {
        console.error('Erro ao incluir livro: ', error)
        res.status(500).json({ mensagem: 'Erro ao incluir livro.' })
    }
});

router.delete('/:id', async (req, res) => {
    const codigoLivro = req.params.id;
    try {
        await livroDao.excluir(codigoLivro);
        res.json({ mensagem: 'Livro excluido com sucesso.' });
    } catch (error) {
        console.error('Erro ao excluir livro: ', error);
        res.status(500).json({ mensagem: 'Erro ao excluir livro.' });
    }
});

module.exports = router;