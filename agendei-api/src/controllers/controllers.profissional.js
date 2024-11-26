import serviceProfissional from "../services/service.profissional.js";

async function Listar(req, res){


    const nome = req.query.nome;
    const profissionais = await serviceProfissional.Listar(nome);

    res.status(200).json(profissionais);
}

async function Inserir(req, res){

/*
    const nome = req.body.nome;
    const funcao = req.body.funcao;
    const icon = req.body.icon;*/

    const { nome, funcao, icon} = req.body;

    const profissional = await serviceProfissional.Inserir(nome, funcao, icon);

    res.status(201).json(profissional);
}

async function Editar(req, res){

        const id_profissional = req.params.id_profissional;
        const { nome, funcao, icon} = req.body;
        
        const profissional = await serviceProfissional.Editar(id_profissional, nome, funcao, icon);
    
        res.status(200).json(profissional);
    }

    async function Excluir(req, res){

        const id_profissional = req.params.id_profissional;
      
        
        const profissional = await serviceProfissional.Excluir(id_profissional);
    
        res.status(200).json(profissional);
    }
    async function ListarServicos(req, res){


        const id_profissional = req.params.id_profissional;
        const serv = await serviceProfissional.ListarServicos(id_profissional);
    
        res.status(200).json(serv);
    }
    

export default {Listar, Inserir, Editar, Excluir, ListarServicos}