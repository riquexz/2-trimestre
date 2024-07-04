const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = documento.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:"Quem é o melhor do mundo?",
    alternativas:[
      {
        texto: "messi",
        afirmação: "afirmação"
      },
      {
  texto: "messi",
  afirmação: "afirmação"
      }
  ]
},
 {
    enunciado:"quem é mais bonito?",
    alternativas:[
  {
  texto: "neymar",
  afirmação: "afirmação"
  },
      {
  texto: "cr7",
  afirmação: "afirmação"
  ]
},
 {
    enunciado:"quem tem mais bola de ouro?"
    alternativas:[
  {
  texto: "messi",
  afirmação: "afirmação"
  },
     {
  texto: "cr7",
  afirmação: "afirmação"
  ]
},
 {
    enunciado:"quem tem copa do mundo?"
    alternativas:[
  {
  texto: "messi",
  afirmação: "afirmação"
  },
     {
  texto: "cr7",
  afirmação: "afirmação"
  ]
},
 {
    enunciado:"messi é the goat?"
    alternativas:[
  {
  texto: "messi",
  afirmação: "afirmação"
  },
     {
    texto: "messi",
    afirmação: "afirmação"
  }
  ]
},
];

let atual = 0;
let perguntaAtual;
let historiaFinal = ""; 

function mostraPergunta() {
 /*    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }   */ 
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
 /* caixaAlternativas.textContent = ""; */
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmacoes; /* mudar para opcaoSelecionada.afirmacao*/
            historiaFinal = afirmacoes; /* += afirmacoes + " "; */
            atual++;
            mostraPergunta();
      }
/*
function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="";
}
*/
mostraPergunta();
