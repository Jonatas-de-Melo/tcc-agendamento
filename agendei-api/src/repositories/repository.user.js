import { query } from "../database/sqlite.js";



async function Inserir(nome, email, senha){
   
    let sql = `insert into users(nome, email, senha) values(?,?,?) 
    returning id_user`;
    
   
    const user = await query(sql, [nome, email, senha]);
    
        return user[0];
    }
    async function ListarByEmail(email){
   
        let sql = `select * from users where email = ?`;
        
       
        const user = await query(sql, [email]);
        
        if(user.length == 0)
            return [];
        else
            return user[0];
        }  
        
        async function Profile(id_user){
   
            let sql = `select id_user, nome, email from users where id_user = ?`;
            
           
            const user = await query(sql, [id_user]);
            
            
                return user[0];
            
        }

export default {Inserir, ListarByEmail,Profile}