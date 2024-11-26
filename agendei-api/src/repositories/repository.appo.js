import { query } from "../database/sqlite.js";


async function VerificarDisponibilidade(id_profissional, data, hora) {
    const sql = `
        SELECT * FROM appos 
        WHERE id_profissional = ? AND data = ? AND hora = ?
    `;
    const result = await query(sql, [id_profissional, data, hora]);
    return result.length === 0; // Retorna true se o horário estiver livre
}



async function Listar(id_user){


    
let sql = `SELECT a.id_appo, s.descricao as servico, d.nome as profissional, d.funcao, a.data, a.hora, u.nome as user, ds.preco
FROM appos a
JOIN servicos s ON (s.id_servico = a.id_servico)
JOIN profissionais d ON (d.id_profissional = a.id_profissional)
JOIN users u ON (u.id_user = a.id_user)
JOIN profissional_servicos ds ON (ds.id_profissional = a.id_profissional AND ds.id_servico = a.id_servico)
WHERE a.id_user = ?
order by a.data, a.hora`;





const appos = await query(sql, id_user);

    return appos;
}

async function Inserir(id_user,id_profissional, id_servico, data, hora){
   
    let sql = `insert into appos(id_user,id_profissional, id_servico, data, hora) values(?,?,?,?,?) 
    returning id_appo`;
    
   
    const appo = await query(sql, [id_user,id_profissional, id_servico, data, hora]);
    
        return appo[0];
    }

    async function Excluir(id_user, id_appo){
   
        let sql = `delete from appos where id_appo=? and id_user=?`;
        
       
        await query(sql, [id_appo, id_user,]);
        
            return {id_appo};
        }

       
export default {VerificarDisponibilidade, Listar, Inserir, Excluir}