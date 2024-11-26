import {Router} from "express";
import controllersProfissional from "./controllers/controllers.profissional.js";
import controllersUser from "./controllers/controllers.user.js";
import controllersAppo from "./controllers/controllers.appo.js";
import jwt from "./token.js";

const router = Router();


// Rotas Funssionarios
router.get("/profissionais", jwt.ValidateToken, controllersProfissional.Listar );
router.post("/profissionais", jwt.ValidateToken, controllersProfissional.Inserir);
router.put("/profissionais/:id_profissional", jwt.ValidateToken, controllersProfissional.Editar);
router.delete("/profissionais/:id_profissional", jwt.ValidateToken, controllersProfissional.Excluir);   

router.get("/profissionais/:id_profissional/servicos", jwt.ValidateToken, controllersProfissional.ListarServicos );


// Rotas usuarios
router.post("/users/register", controllersUser.Inserir);
router.post("/users/login", controllersUser.Login);
router.get("/users/profile",  jwt.ValidateToken, controllersUser.Profile);






// Rotas de agendamentos appos
router.get("/appos", jwt.ValidateToken, controllersAppo.ListarByUser );
router.post("/appos", jwt.ValidateToken, controllersAppo.Inserir );
router.delete("/appos/:id_appo", jwt.ValidateToken, controllersAppo.Excluir );

// Rotas de serviços (prestados)




export default router;