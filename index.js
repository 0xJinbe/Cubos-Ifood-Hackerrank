// calculadora de imc

const massa = 66
const altura = 1.81

const imc = massa / (altura * altura)

console.log(imc)

// objetos

const pessoa = {
  nome: "Joana",
  idade: 64,
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

if (pessoa.idade <= 18) {console.log('Entrou no if')} else {console.log('Entrou no else')}

// condicionais 2

if (pessoa.idade < 18) {
  console.log('A pessoa é menor de idade');
  } else if (pessoa.idade < 60) {
    console.log('A pessoa é adulta');
  } else {
    console.log('A pessoa é idosa')
  }