import bcrpt from "bcrypt";
import repoUser from "../repositories/repository.user.js";
import jwt from "../token.js";

async function Inserir(nome, email, senha){

    const hashSenha = await bcrpt.hash(senha, 10);
    const user = await repoUser.Inserir(nome, email, hashSenha);

    user.token = jwt.CreateToken(user.id_user);

    return user;
}
async function Login(email, senha){
    
    
    const user = await repoUser.ListarByEmail(email);

    if (user.length == 0)
        return [];
    else {
        if(await bcrpt.compare(senha, user.senha)){
            delete user.senha // para nao retorana a senha

            user.token = jwt.CreateToken(user.id_user);

            return user;
        }else
        return [];
    }
}
    async function Profile(id_user) {
        const user = await repoUser.Profile(id_user);
        return user;
    }
    
    
export default {Inserir, Login, Profile}

