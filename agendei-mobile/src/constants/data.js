//USADO PARA TESTE 



export const profissionais = [ 
    {
        id_profissional: 1,
        nome: "Armando Matheus",
        funcao: "Troca de Oleo",
        icon: "M"
    },
    {
        id_profissional: 2,
        nome: "Ana Beatriz Rutini",
        funcao: "orçamento",
        icon: "M"
    },
    {
        id_profissional: 3,
        nome: "Antônio Almeida Souza ",
        funcao: "Geral",
        icon: "M"
    },
    {
        id_profissional: 4,
        nome: "Roberto Martins",
        funcao: "Socorro",
        icon: "M"
    },
    {
        id_profissional: 5,
        nome: "Nonato da Silveira",
        funcao: "Socorro-Rural",
        icon: "M"
    },
    {
        id_profissional: 6,
        nome: "Jonatan Silvestre",
        funcao: "Geral",
        icon: "M"
    }
  
///serviços prestados
    /*Manutenção preventiva 
Reparos e substituição de peças 
Serviços de freio, suspensão, alinhamento e balanceamento de rodas 
Troca de óleo e filtros 
Serviços de ar condicionado, elétrica e eletrônica automotiva 
Diagnóstico e solução de problemas 
 */

];
//agendados
export const agendado = [
    {
        id_agendado: 1, 
        servico: "Troca de óleo",
        profissional: "Armando Matheus",
        funcao: "Manutenção preventiva",
        data: "2024-10-25",
        hora: "08:30",
    },
    {
        id_agendado: 2,
        servico: "Serviços de ar condicionado",
        profissional: "Armando Matheus",
        funcao: "Manutenção preventiva",
        data: "2024-10-28",
        hora: "15:40",
    },
    {
        id_agendado: 3,
        servico: "Serviços de ar condicionado",
        profissional: "Ana Beatriz Rutini",
        funcao: "Manutenção preventiva",
        data: "2024-11-05",
        hora: "14:15",
    },
    {
        id_agendado: 4,
        servico: "onçameto",
        profissional: "Antônio Almeida Souza",
        funcao: "Diagnóstico e solução de problemas",
        data: "2024-11-18",
        hora: "11:00",
    },
    {
        id_agendado: 5,
        servico: "onçameto",
        profissional: "Antônio Almeida Souza",
        funcao: " suspensão",
        data: "2024-12-02",
        hora: "10:40",
    },
    {
        id_agendado: 6,
        servico: "onçameto",
        profissional: "Roberto Martins",
        funcao: "elétrica",
        data: "2024-12-14",
        hora: "17:30",
    }
]

export const servicos = [
    {
        id_servico: 1,
        descricao: "Troca de óleo",
        preco: 499.99
    },
    {
        id_servico: 2,
        descricao: "Serviços de ar condicionado",
        preco: 650
    },
    {
        id_servico: 3,
        descricao: "Manutenção preventivao",
        preco: 5000
    },
    {
        id_servico: 4,
        descricao: "elétrica",
        preco: 1700
    }
];