import repoProfissional from "../repositories/repository.profissional.js";



async function Listar(nome){

    const profissionais = await repoProfissional.Listar(nome);

    return profissionais;
}

async function Inserir(nome, funcao, icon){

    const profissional = await repoProfissional.Inserir(nome, funcao, icon);

    return profissional;
}
async function Editar(id_profissional, nome, funcao, icon){

    const profissional = await repoProfissional.Editar(id_profissional, nome, funcao, icon);

    return profissional;
}
async function Excluir(id_profissional){

    const profissional = await repoProfissional.Excluir(id_profissional);

    return profissional;
}

async function ListarServicos(id_profissional){

    const serv = await repoProfissional.ListarServicos(id_profissional);

    return serv;
}

export default {Listar, Inserir, Editar, Excluir, ListarServicos}