import { query } from "../database/sqlite.js";

async function Listar(nome){

let filtro = [];
    
let sql = "select * from profissionais ";

if (nome){
    sql = sql + "where nome like ? ";
    filtro.push('%' + nome + '%');
}


sql = sql + "order by nome" 
const profissionais = await query(sql, filtro);

    return profissionais;
}

async function Inserir(nome, funcao, icon){
   
    let sql = `insert into profissionais(nome, funcao, icon) values(?,?,?) 
    returning id_profissional`;
    
   
    const profissional = await query(sql, [nome, funcao, icon]);
    
        return profissional[0];
    }

    async function Editar(id_profissional, nome, funcao, icon){
   
        let sql = `update profissionais set nome=?, funcao=?, icon=?
        where id_profissional=?`;
        
       
         await query(sql, [nome, funcao, icon, id_profissional]);
        
            return {id_profissional};
        }
   async function Excluir(id_profissional){
   
        let sql = `delete from profissionais where id_profissional = ?`;
        
       
         await query(sql, [id_profissional]);
        
            return {id_profissional};
        }       
        async function ListarServicos(id_profissional){

           
                
            let sql = ` select d.id_servico, s.descricao, d.preco
                            from profissional_servicos d
                            join servicos s on (s.id_servico = d.id_servico)
                            where d.id_profissional = ?
                            order by s.descricao`;
            
            const serv = await query(sql, [id_profissional]);
            
                return serv;
            }         
export default {Listar, Inserir, Editar, Excluir, ListarServicos}