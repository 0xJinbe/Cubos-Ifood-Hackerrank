// FILTRAR ELEMENTOS QUE COMECEM COM A LETRA A

const lista = ["arroz", 'batata', 'Amora'];

const resultado = [];

for (let item of lista) {
  if (item[0] === 'a' || item[0] === 'A') {
    resultado.push(item) // push == append
  }
}
console.log(resultado)

// funções

function imprimirOLAnatela() {
  console.log('OLÁ!')
}

imprimirOLAnatela() // call function

function cumprimentarPessoa(nome) {
  console.log(' OLÁ ' + nome)
}

cumprimentarPessoa('Claudio')
cumprimentarPessoa('Larissa')

// exemplo de exercicio hackerhank

function solucao(resultado1, resultado2, resultado3){
  if(resultado1 === resultado2 && resultado2 === resultado3){
    console.log(true)
  } else {
    console.log(false)
  }
}
solucao('A','A','A') // parametros iguais imprime true
solucao('A', 'B', 'A') //parametros diferentes imprime false


// exercicio tabuada

function tabuada(n) {
  for (let i = 1; i <= 10; i++ ) {
    console.log(n * i)
  }
}
tabuada(9)

// imprimir valor de desconto na compra

function imprimirValorDesconto (valorDaCompra, hora, cupom) {
  let valorDesconto; 
  if (cupom == 'RANGOBARATO') {
    if (hora >= 12 && hora < 14) {
      if (valorDaCompra >= 100) {
        valorDesconto = valorDaCompra * 20/100;
      } else {
        valorDesconto = valorDaCompra * 10/100;       
      }
      console.log(`O valor do desconto é ${valorDesconto}.`);
    } else {
      console.log('Esse cupom não é valido esse horario...');
    }
  } else {
    console.log('Não possui nenhum cupom aplicavel')
  }
}


imprimirValorDesconto(100, 13, 'RANGOBARATO')

// inversor de frases

const texto = 'Eu gosto de estudar JS.'

let palavra = ""
const novaFrase = []
for (let i = 0; i < texto.length; i ++) {
  if (texto[i] === " ") {
    console.log(palavra)
    novaFrase.push(palavra);
    palavra = "";
    continue;
  }
  palavra += texto[i];
}
novaFrase.push(palavra);

const fraseInvertida = [];
for (let i = novaFrase.length -1; i >= 0; i--) {
  fraseInvertida.push(novaFrase[i]);
}
console.log(fraseInvertida)

// exercicio qual dia da semana

function diaDaSemana(dias) {
  const resto = dias % 7;

  if (resto == 0) {
    console.log('Domingo')
  } else if (resto == 1) {
    console.log('Segunda')
  } else if (resto == 2) {
    console.log('Terça')
  } else if (resto == 3) {
    console.log('Quarta')
  } else if (resto == 4) {
    console.log('Quinta')
  } else if (resto == 5) {
    console.log('Sexta')
  } else if (resto == 6) {
    console.log('Sabado')
  } 
}
diaDaSemana(150)

//codigo arrobash

function arrobash(textoCodificado){
  
  const dicionario = {
    "###": 'C',
    "##@": 'U',
    "#@#": 'B',
    "@##": 'D',
    "@#@": 'E',
    "#@@": 'A',
    "@@@": 'Y',
    "@@#": 'M',
  };
  let resposta = "";
  for(i = 0; i < textoCodificado.lenght; i+=3) {
    const pedaco = textoCodificado[i] + textoCodificado[i+1] + textoCodificado[i+2];
    resposta += dicionario[pedaço]
  }
  console.log(resposta)
}  
arrobash('#@@####@@@##@#@@@#@@@')

// relatorio de pessoas por idade

const pessoas = [
  {
    nome: 'José',
    idade: 30
  },
  {
    nome: 'Maria',
    idade: 16
  },
  {
    nome: 'Pedro',
    idade: 18
  },
  {
    nome: 'Andre',
    idade: 12
  }
];


function criarRelatorio(lista) {
  let maiores = 0;
  let menores = 0;

  for(let item of lista) {
    const idade = item.idade;
    if (idade >= 18 ){
      maiores ++;
    } else {
      menores ++;
    }
  }


  const resposta = {
  qtdMaiores: maiores,
  qtdMenores: menores,
  percMaiores: maiores / 4, // ou maiores/pessoas.lenght
  percMenores: menores / 4
  }
  console.log(resposta)
}

criarRelatorio(pessoas);