const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = documento.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:"Quem é o melhor do mundo?"
    alternativas:[
  "messi",
  "messi",
  ]
},
 {
    enunciado:"quem é mais bonito?"
    alternativas:[
  "neymar",
  "cr7",
  ]
},
 {
    enunciado:"quem tem mais bola de ouro?"
    alternativas:[
  "messi",
  "cr7",
  ]
},
 {
    enunciado:"quem tem copa do mundo?"
    alternativas:[
  "messi",
  "cr7",
  ]
},
 {
    enunciado:"messi é the goat?"
    alternativas:[
  "messi",
  "messi",
  ]
},
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
