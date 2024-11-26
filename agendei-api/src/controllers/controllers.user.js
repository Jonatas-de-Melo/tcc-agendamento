import serviceUser from "../services/service.user.js";

async function Inserir(req, res){

    const { nome, email, senha} = req.body;

    const user = await serviceUser.Inserir(nome, email, senha);

    res.status(201).json(user);
}
async function Login(req, res){

    const {email, senha} = req.body;

    const user = await serviceUser.Login(email, senha);

    if (user.length == 0)
    res.status(401).json({error: "E-mail ou senha inválida"});
    else
        res.status(200).json(user);
}
async function Profile(req, res){


    const id_user = req.id_user;
    const user = await serviceUser.Profile(id_user);

    res.status(200).json(user);
}

    

export default {Inserir, Login,Profile}