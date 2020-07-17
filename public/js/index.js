//ALTERE A FUNÇÃO ABAIXO PARA QUE ELA 
//ADICIONE UM ITEM COM O TEXTO PRESENTE NO CAMPO INPUT
//DICA INPUT.VALUE IRA CONTER O TEXTO DIGITADO NO CAMPO

//ARRAY DE TAREFAS
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

    },
    {
        descricao: "Desentupir vaso sanitário",
        feito:true,
        instrumentos: [
            "desentupidor",
            "candida"
        ]
    }
];

function mostrarTarefa(tarefa){
    // criar um li
    let li = document.createElement('li');
    
    // criar um input do tipo checkbox
    let checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");

    //marcar o checkbox se a tarefa tiver feita == true
    checkbox.checked = tarefa.feito;

    // criar span
    let span = document.createElement('span');
    

    // adicionar texto ao span
    span.innerText = tarefa.descricao;

    // adicionar checkbox ao li
    li.appendChild(checkbox);

    // adicionar span ao li
    li.append(span);

    // adicionar o li a ul
    let lista = document.querySelector(".lista");
    lista.appendChild(li);
}



function mostrarTarefas(tarefas){
    for(t of tarefas){
        mostrarTarefa(t);
    }
}




// function adicionaNaLista(tarefa){
// // capturar o input da descrição da tarefa
// let input = document.getElementById("descricao");


// //captura a lista de tarefas
// let lista = document.querySelector(".lista");

// // criar um elemento
// let item = document.createElement("li");

// //escrevendo texto nesse elemento
// item.innerText = input.value; 

// //adicionando o elemento a lista
// lista.appendChild(item);


// // let form = document.querySelector('button');
// // button.onclick = adicionaNaLista;

// // limpando o campo depois de adicionar
// input.value =  '';

// input.focus();

// alert("Tarefa adicionada com sucesso!");

// }

function adicionarTarefa(texto){

        //criar uma tarefa com o conteúdo do campo
        let tarefa = {
            descricao: texto,
            feito:false,
            instrumentos: []
            
        }

        // adicionar essa tarefa ao array de tarefas
        tarefas.push(tarefa)


        //mostrar a tarefa criada
        mostrarTarefa(tarefa);

        // limpando o campo
        document.getElementById("descricao").value = '';
}


mostrarTarefa(tarefas);


let button = document.querySelector('button');
button.onclick = function(evt){
    let texto = document.getElementById('descricao').value;
    adicionarTarefa(texto);
}


//exibir caracteres pressionando
let input = document.getElementById('descricao');
input.onkeypress = function(evt){
    evt.preventDefault();
    console.log(evt);

    //capturar keycode pressionado
    let keyCode = evt.keyCode;


    //capturar caractere digitado
    let char = evt.key;


    // se keycode for 13,
    if(keyCode == 13){ // a tecla pressionada foi enter?

        adicionarTarefa(evt.target.value);

        // //criar uma tarefa com o conteúdo do campo
        // let tarefa = {
        //     descricao: evt.target.value,
        //     feito:false,
        //     instrumentos: []
            
        // }

        // // adicionar essa tarefa ao array de tarefas
        // tarefas.push(tarefa)


        // //mostrar a tarefa criada
        // mostrarTarefa(tarefa);

        // // limpando o campo
        // evt.target.value = '';

        } else {
            // adicionar ao final do valor do input o caractere
            // pressionado
            evt.target.value = evt.target.value + char;
        }



}

// setTimeout(() => {
//     input.focus();
// }, 10

// );