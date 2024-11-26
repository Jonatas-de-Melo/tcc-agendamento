/*import serviceAppo from "../services/service.appo.js";

async function ListarByUser(req, res){

    const id_user = req.id_user;
    
    const appos = await serviceAppo.Listar(id_user);

    res.status(200).json(appos);
}

async function Inserir(req, res){
    
        const id_user = req.id_user;
        const {id_profissional, id_servico, data, hora} = req.body;
    
        const appo = await serviceAppo.Inserir(id_user,id_profissional, id_servico, data, hora);
    
        res.status(201).json(appo);
    }

    async function Excluir(req, res){
    
        const id_user = req.id_user;
        const id_appo = req.params.id_appo;
    
        const appo = await serviceAppo.Excluir(id_user, id_appo);
    
        res.status(200).json(appo);
    }

export default {ListarByUser, Inserir,Excluir};*/
import serviceAppo from "../services/service.appo.js";

async function ListarByUser(req, res) {
    const id_user = req.id_user;
    const appos = await serviceAppo.Listar(id_user);
    res.status(200).json(appos);
}

async function Inserir(req, res) {
    const id_user = req.id_user;
    const { id_profissional, id_servico, data, hora } = req.body;

    try {
        const appo = await serviceAppo.Inserir(id_user, id_profissional, id_servico, data, hora);
        res.status(201).json(appo);
    } catch (error) {
        if (error.message === "Horário indisponível. Por favor, escolha outro horário.") {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Ocorreu um erro, tente mais tarde." });
        }
    }
}

async function Excluir(req, res) {
    const id_user = req.id_user;
    const id_appo = req.params.id_appo;
    const appo = await serviceAppo.Excluir(id_user, id_appo);
    res.status(200).json(appo);
}

export default { ListarByUser, Inserir, Excluir };
