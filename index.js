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