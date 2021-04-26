// calculadora de imc

const massa = 66
const altura = 1.81

const imc = massa / (altura * altura)

console.log(imc)

// objetos

const pessoa = {
  nome: "Joana",
  idade: 72,
  ehMaiordeIdade: true,
  altura: 1.68 
};

console.log(pessoa)
console.log(pessoa.altura)
console.log(pessoa.idade)

// condicionais

if (pessoa.idade >= 18) {
  console.log('É maior de idade')
} else {console.log('É menor de idade')}


// condicionais 2

if (pessoa.idade < 18) {
  console.log(pessoa.nome + ' é menor de idade');
  } else if (pessoa.idade < 60) {
    console.log(`${pessoa.nome} é adulto`);
  } else {
    console.log(`${pessoa.nome} é uma pessoa de ${pessoa.idade} anos`)
  }

// concatenar strings e string template:

let texto = pessoa.nome + ' tem ' + pessoa.idade
console.log(texto)

// operadores lógicos

const crianca = {
  nome: 'Jose',
  idade: 19,
  altura: 1.27,
  temPassaporte: false
}

// idade minima = 12 anos
//altura minima = 1.40


if (crianca.idade > 12) {
  if (crianca.altura > 1.40) {
    console.log(`${pessoa.nome} pode brincar`);
  } else {
    console.log(`${crianca.nome} nao pode brincar porque nao tem a altura minima`)
  }
}

//operadores logicos

// && AND
// || OR
// ! NOT (PARA BOLEANOS)

if (crianca.idade > 12 || crianca.altura > 1.40) {
  console.log(`${crianca.nome} pode brincar`)
} else {
  console.log(`${crianca.nome} nao pode brincar`)
}

if (crianca.temPassaporte) {
  console.log('pode viajar');
  } else {
    console.log('nao pode viajar')
  }
//USANDO O NOT ! PARA BOLEANOS
if (!crianca.temPassaporte) {
  console.log(`${crianca.nome} ESTA BARRADA`)
}

// arrays ou vetores

const listaDeCompras = ['arroz', 'batata', 'maça', 'pera'];
console.log(listaDeCompras[2]);

//loops while

let indice = 0
while (indice < listaDeCompras.length) {
  console.log(listaDeCompras[indice]);
  indice += 1;
}
// loops for

for (let indice = 0; indice < listaDeCompras.length; indice++) {console.log(listaDeCompras[indice])
}

