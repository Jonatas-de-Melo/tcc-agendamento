/*import repoAppo from "../repositories/repository.appo.js";



async function Listar(id_user){

    const appos = await repoAppo.Listar(id_user);

    return appos;
}

async function Inserir(id_user,id_profissional, id_servico, data, hora){

    const appo = await repoAppo.Inserir(id_user, id_profissional, id_servico, data, hora);

    return appo;

}
async function Excluir(id_user, id_appo){

    const appo = await repoAppo.Excluir(id_user, id_appo);

    return appo;

}

export default {Listar, Inserir,Excluir}*/

import repoAppo from "../repositories/repository.appo.js";

async function Listar(id_user) {
    const appos = await repoAppo.Listar(id_user);
    return appos;
}

async function Inserir(id_user, id_profissional, id_servico, data, hora) {
    // Verificar disponibilidade antes de inserir
    const isAvailable = await repoAppo.VerificarDisponibilidade(id_profissional, data, hora);
    
    if (!isAvailable) {
        throw new Error("Horário indisponível. Por favor, escolha outro horário.");
    }

    const appo = await repoAppo.Inserir(id_user, id_profissional, id_servico, data, hora);
    return appo;
}

async function Excluir(id_user, id_appo) {
    const appo = await repoAppo.Excluir(id_user, id_appo);
    return appo;
}

export default { Listar, Inserir, Excluir };
