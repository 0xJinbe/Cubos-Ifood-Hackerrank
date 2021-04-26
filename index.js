// FILTRAR ELEMENTOS QUE COMECEM COM A LETRA A

const lista = ["arroz", 'batata', 'Amora'];

const resultado = [];

for (let item of lista) {
  if (item[0] === 'a' || item[0] === 'A') {
    resultado.push(item)
  }
}
console.log(resultado)

// funções