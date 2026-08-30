// Função tradicional:
function func(x, y) {
  return x + y;
}
let soma = func(6, 7);
console.log("Soma: " + soma);

// Função anônima:
let subtracao = function(x, y) {
  return x - y;
};
console.log("Subtração: " + subtracao(6, 7));

// Arrow function:
let multiplicacao = (x, y) => { return x * y; };
console.log("Multiplicação: " + multiplicacao(6, 7));

// Arrow function:
let divisao = (x, y) => x / y;
console.log("Divisão: " + divisao(6, 7).toFixed(3));
