/*
var nome = "Arthur Futata";
var idade = 16;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
// alert comenta na pagina

//console.log imprime o resultado no conole (F12).
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil")); //Replace.var() vc consegue trocar coisas da frase.
console.log(frase.toUpperCase()); // Uppercase
console.log(frase.toLowerCase()); // Lowercase

//arrays e dicionario

var lista = ["Maça", "Pêra", "Laranja"];
lista.push("Uva"); // Push adiciona um item no final da lista
lista.pop("Uva"); // Pop retira um item do final da lista
console.log(lista); //imprime toda a lista
console.log(lista[1]); // imprime o item 1 da array
console.log(lista.length); // imprime o numero de itens que possuo na minha lista
console.log(lista.reverse()); // tras os elementos ao contrário na lista
console.log(lista.toString()); // imprime elementos da string
console.log(lista.join(" - ")); // adiciona o que você quiser no espaço das strings

//dicionário

var fruta = { nome: "maça", cor: "Vermelha" };
console.log(fruta);

//lista de dicionário

var frutas = [{ nome: "maça", cor: "Vermelha" }, { nome: "uva", cor: "roxa" }];
console.log(frutas);

// Condicionais, Laços de repetição e Date

var idade = prompt("Qual sua idade?"); // Prompt vai subir uma pergunta ao usuário
//var idade = 18; 
//Condicional if e else
if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
};

var count = 0;
while (count <= 5) { //repetição while
    console.log(count);
    count++; // count++ vai contar de 1 em 1
}

var count // repetição for
for (count = 0; count <= 5; count++) {
    alert(count);
};

//date
var d = new Date();
alert(d.getMount() + 1); //trazer mês
//tem como trazer minutos, horas ,ano etc.

//funções

function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

alert(soma(5, 10));
alert("Vai Japão", "Japão", "Brasil");
*/