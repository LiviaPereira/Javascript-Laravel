console.log("Olá");

//declaração de variáveis
let limiteDeIdade = 18;
console.log(limiteDeIdade + 1);

let nomeDaMelhorAssis = "Camila";
console.log(nomeDaMelhorAssis);

nomeDaMelhorAssis = "Natalia";
console.log(nomeDaMelhorAssis);

//DECLARACÃO DE CONSTANTES
const N_DIAS_DA_SEMANA = 7;
console.log(N_DIAS_DA_SEMANA);

//objetos literais
let tarefa = {
    descricao: "Pagar boleto da academia sem ir",
    feito: true
}

console.log(tarefa);

let cachorro = {
    nome: "Bartolomeu",
    idade: 3,
    darPata: function(){
        return "Estou dando a pata!!!";
    },
    apresentar: function(){
        return "Meu nome é " + this.nome + ". Minha idade é " + this.idade + " anos";
    }

}

console.log(cachorro.nome);
console.log(cachorro.darPata());

let apresentacao = cachorro.apresentar();
console.log(apresentacao);
//console.log(cachorro.apresentar());

//declaração de arrays
let tarefas = [
    {
        descricao: "Varrer a casa antes das crianças acordarem",
        feito: false,
        instrumentos: [
            "Vassoura",
            "Pá"
        ]
    },
    {
        descricao: "Lavar os pratos antes de dormir",
        feito: false,
        instrumentos: [
            "coragem",
            "bucha",
            "detergente"
        ]

    }
];

console.log(tarefas);

//para acessar a propriedade feito da segunda tarefa;
console.log(tarefas[1].feito);

//quais instrumentos para realizar a segunda tarefa
console.log(tarefas[1].instrumentos.length);