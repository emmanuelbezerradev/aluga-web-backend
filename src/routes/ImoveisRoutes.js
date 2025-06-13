const express = require("express");
const imoveisController = require('../controller/ImoveisControler');
const { buscarImoveis } = require("../controller/ImoveisControler");
const router = express.Router();


// Buscar imóveis com filtros (GET /imoveis?cidade=...&tipo=...&quartos=...)
router.get("/", async (req, res) => {
    const resultado = await buscarImoveis();
    res.json(resultado);

});

// Buscar um imóvel pelo ID (GET /imoveis/:id)
router.get("/:id", async (req, res) => {
    const resultado = await imoveisController.buscarUmImovel(req.params.id);
    res.json(resultado);
});

// Criar imóvel (POST /imoveis)
router.post("/", async (req, res) => {
    const resultado = await imoveisController.criarImovel(req.body);
    res.json(resultado);
});

router.post('/imoveis', async (req, res) => {
    const resultado = await imoveisController.criarImovelComImagem(req);
    res.json(resultado);
});

// Editar imóvel (PUT /imoveis/:id)
router.put("/:id", async (req, res) => {
    const resultado = await imoveisController.editarImovel(req.params.id, req.body);
    res.json(resultado);
});

// Deletar imóvel (DELETE /imoveis/:id)
router.delete("/:id", async (req, res) => {
    const resultado = await imoveisController.deletarImovel(req.params.id);
    res.json(resultado);
});

module.exports = router;