// 1. Lista com os dados dos pacientes (bem simples)
const listaPacientes = [
    { 
        nome: "Paulo Ribeiro Gomes", 
        cpf: "123.456.789-00", 
        end: "Rua das F, 123 - SP", 
        laudo: "Cárie profunda", 
        obs: "Tratamento urgente", 
        ant: "Histórico dental" 
    },
    { 
        nome: "Mariana Silva Torquato", 
        cpf: "987.654.321-11", 
        end: "Av. Paulista, 1000 - SP", 
        laudo: "Limpeza", 
        obs: "Rotina", 
        ant: "Nenhum" 
    },
    { 
        nome: "Pedro Rocha Menezes", 
        cpf: "456.789.123-22", 
        end: "Rua Augusta, 50 - SP", 
        laudo: "Canal", 
        obs: "Avaliação", 
        ant: "Sensibilidade" 
    }
];

let posicaoAtual = 0;

function mostrarPaciente(indice) {
    posicaoAtual = indice;

    const paciente = listaPacientes[indice];

    document.getElementById('p-nome').innerText = paciente.nome;
    document.getElementById('p-cpf').innerText = paciente.cpf;
    document.getElementById('p-end').innerText = paciente.end;
    document.getElementById('p-laudo').innerText = paciente.laudo;
    document.getElementById('p-obs').innerText = paciente.obs;
    document.getElementById('p-ant').innerText = paciente.ant;

    const todasBolinhas = document.querySelectorAll('.ponto');
    
    todasBolinhas.forEach(b => b.classList.remove('ativo'));
    
    todasBolinhas[indice].classList.add('ativo');
}

function proximoPaciente() {
    posicaoAtual = posicaoAtual + 1;

    if (posicaoAtual >= listaPacientes.length) {
        posicaoAtual = 0;
    }

    mostrarPaciente(posicaoAtual);
}

function voltarPaciente() {
    posicaoAtual = posicaoAtual - 1;

    if (posicaoAtual < 0) {
        posicaoAtual = listaPacientes.length - 1;
    }

    mostrarPaciente(posicaoAtual);
}