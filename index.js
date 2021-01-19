
const alunos = {
    "name":"faleconosco",
    "method":"get",
    "action":"enviado.html",
    "autocomplete":true,
    "items":[
       {
          "element":"input",
          "type":"text",
          "name":"nome",
          "placeholder":"Digite seu nome",
          "id":"nome"
       },
       {
          "element":"input",
          "type":"text",
          "name":"cpf",
          "placeholder":"Digite seu cpf",
          "id":"cpf"
       },
       {
          "element":"select",
          "name":"gender",
          "children":[
             {
                "element":"option",
                "value":"F",
                "innerhtml":"Feminino"
             },
             {
                "element":"option",
                "value":"M",
                "innerhtml":"Masculino"
             }
          ]
       },
       {
          "element":"input",
          "type":"text",
          "name":"endereco",
          "placeholder":"Endereço completo: ",
          "id":"endereco"
       },
       {
          "element":"input",
          "type":"text",
          "name":"celular",
          "placeholder":"Celular: (xx) xxxxx-xxxx",
          "id":"celular"
       },
       {
          "element":"input",
          "type":"radio",
          "value":"ADS",
          "name":"curso",
          "id":"ads",
          "poslabel":"Análise e Desenvolvimento de Sistemas"
       },
       {
          "element":"input",
          "type":"radio",
          "value":"EC",
          "name":"curso",
          "id":"ec",
          "poslabel":"Engenharia de Computação"
       },
       {
          "element":"input",
          "type":"checkbox",
          "value":"algoritmos",
          "name":"disciplinas",
          "id":"algoritmos",
          "poslabel":"Algoritmos e Lógica de Programação"
       },
       {
          "element":"input",
          "type":"checkbox",
          "value":"estruturas",
          "name":"disciplinas",
          "id":"estruturas",
          "poslabel":"Estruturas de Dados"
       },
       {
          "element":"input",
          "type":"submit",
          "value":"Enviar",
          "name":"enviar"
       }
    ]
}
//fiz a mudança dos arquivos json manualmente, ou seja, mudando o conteudo de alunos copiando e colando.
const main = document.querySelector('.principal');


const form = montaForm(alunos);
form.classList.add('formulario');
console.log(form);

main.appendChild(form);


function montaForm(alunos){
    let formNovo = document.createElement('form');
    formNovo.action = alunos.action;
    formNovo.name = alunos.name;
    formNovo.method = alunos.method;
    formNovo.autocomplete = alunos.autocomplete;
    
    alunos.items.forEach(item => {
        if(item.prelabel!=undefined){
            let label = document.createElement('label');
            label.textContent = item.prelabel;
            label.classList.add('titulo__input');
            formNovo.appendChild(label);
        }
        
        formNovo.appendChild(montaInput(item));

        if(item.poslabel!=undefined){
            let label =  document.createElement('label');
            label.textContent = item.poslabel;
            label.classList.add('diferencial');

            formNovo.appendChild(label);
        }
    });
    
    return formNovo;
}

function montaInput(item){
    const pato = document.createElement(item.element);
    pato.type = item.type;
    
    pato.name = item.name;
    pato.id = item.id;

    pato.classList.add("campo");

    if(item.placeholder!="") pato.placeholder = item.placeholder;
    
    if(item.value!=undefined) pato.value = item.value;
    

    if(item.element == 'select'){
        for(let i=0; i<item.children.length;i++){
            let option = document.createElement('option');
            option.value = item.children[i].value;
            option.textContent = item.children[i].innerhtml;
            pato.appendChild(option);
        }
    }
    if(item.type=='radio'){
        pato.classList.remove("campo");
        pato.classList.add("diferencial");
    }
    
    
    return pato;
    
}

