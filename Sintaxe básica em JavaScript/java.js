  // tipos primitivos
  // boolean
  var boolean = false;
  console.log(`A variável ${boolean} tem o tipo ${typeof(boolean)}`);


  // number
  var numero = 1;
  console.log(`A variável ${numero} tem o tipo ${typeof(numero)}`);


  // string
  var nome = 'diana';
  console.log(`A variável ${nome} tem o tipo ${typeof(nome)}`);


  // function
  var funcao = function() {};
  console.log(`A variável ${funcao} tem o tipo ${typeof(funcao)}`);


  /* // como declarar
  var; // variável global ou local - valor inicial nulo
  let; // variavel local de bloco - valor inicial nulo
  const; // variável local de bloco - valor inicial obrigatório */


  // usando var global
  var nome = 'diana';
  var nome = 'Diana';
  // usando var local
  function nomeDaFuncao() {
      var sobrenome = 'Martine';
      console.log(sobrenome);
  }
  console.log(nome);
  nomeDaFuncao();

  // as propriedades de var se aplicam a let, mas por convenção usamos let no escopo local


  // usando const
  const constante = 'constante';
  // valor não pode ser alterado; */



  // atribuição
  var atribuicao = 'diana';


  // comparação
  var comparacao = "0" == 0;
  console.log(comparacao);


  // comparação identica
  var comparacaoIdentica = "0" === 0;
  console.log(comparacaoIdentica);


  // operadores aritméticos
  // adição
  var adicao = 1 + 1;
  console.log(adicao);


  //subtração
  var subtracao = 2 - 1;
  console.log(subtracao);


  //multiplicação
  var multiplicacao = 2 * 3;
  console.log(multiplicacao);


  //divisão real
  var divisaoReal = 6 / 2;
  console.log(divisaoReal);


  //divisão inteira
  var divisaoInteira = 5 % 2;
  console.log(divisaoInteira);;


  //potenciação
  var potenciacao = 2 ** 10;
  console.log(potenciacao);


  // operadores relacionais
  // maior que
  var maiorQue = 5 > 2;
  console.log(maiorQue);

  // menor que
  var menorQue = 5 < 2;
  console.log(menorQue);

  // maior ou igual a
  var maiorOuIgual = 5 >= 2;
  console.log(maiorOuIgual);

  // menor ou igual a
  var menorOuIgual = 5 <= 2;
  console.log(menorOuIgual);


  // operadores lógicos
  // && - todos os valores devem ser true
  var e = true && true;
  console.log(e);


  // || - somente um valor deve ser true
  var ou = true || false;
  console.log(ou);


  // ! - inverte os valores
  var nao = !true;
  console.log(nao);




  // o que são vetores ou arrays

  // como declarar um array
  let array = ['string', 1, true];
  // deve ser declarado entre colchetes "[]";
  console.log(array);

  // como um array pode guardar difentes valores inclusive outros arrays
  //let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];

  // como acessar o índice de um array
  console.log(array[0]);


  // manipulando um array

  //forEach - realiza uma função para cada item do array
  //array.forEach(function(item, index){console.log(item, index);})

  //push - add item no final do array
  //array.push('novo item');
  //console.log(array);

  //pop - remove o último item do array
  //array.pop();
  //console.log(array);

  //shift - remove o primeiro item do array
  //array.shift();
  //console.log(array);

  //unshift - add item no início do array
  //array.unshift('novo item');
  //console.log(array);

  //indexOf - retorna o índice de um item do array
  //console.log(array.indexOf(true));

  //splice - remove ou substitui item por índice
  //array.splice(0, 3);
  //console.log(array);

  //slice - retorna uma parte de um array existente
  //let novoArray = array.slice(0, 3);
  //console.log(novoArray);


  // o que são objetos
  // como declarar um objeto
  let object = { propriedade1: 'valor1', propriedade2: 'valor2' }
      // deve ser declarado entre chaves "{}";
  console.log(object);

  // assim como arrays as propriedades de objetos podem guardar quaisquer valores
  // let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: { objetoInterno: 'objeto Interno' } };

  // como acessar propriedades de objetos
  // usando ponto "."
  console.log(object.objectInterno);

  // manipulando objeto
  // desestruturando objeto
  let string = object.string;
  let number = object.number;
  let boolean = object.boolean;


  // desestruturando usando chaves
  // let { string, number, boolean } = object;
  // console.log(string, number, boolean);


  // estruturas condicionais

  // estruturas de decisão

  // if

  var jogador1 = 0;
  var jogador2 = 1;
  var placar;

  // aninhando if's
  // if ternário
  jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são válidos') : console.log('os jogadores não são válidos')
  if (jogador1 > 0 && jogador2 == 0) {
      console.log('o jogador 1 marcou ponto');
      placar = jogador1 > jogador2;
  }
  // usando o else if
  else if (jogador2 > 0 && jogador1 == 0) {
      console.log('o jogador 2 marcou ponto');
      placar = jogador2 > jogador1;
  }
  // usando o else
  else {
      console.log('ninguem marcou ponto');
  }

  // usando switch case
  switch (placar) {
      case placar = jogador1 > jogador2:
          console.log('jogador 1 ganhou');
          break;
      case placar = jogador2 > jogador1:
          console.log('jogador 2 ganhou');
          break;
      default:
          console.log('ninguem marcou ponto')
  }


  // estruturas de repetição
  // let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']
  // let object = { propriedade1: '12', propriedade2: 'valor2', propriedade3: 'valor3'}

  // for - executa até que seja false
  for (let i = 0; i < array.length; i++) {
      console.log(i);
  }


  // for/in - executa repetição a partir de uma propriedade
  // com array
  for (i in array) {
      console.log(i);
  }
  // com object
  for (i in object) {
      console.log(i);
  }

  // for/of - executa repetição a partir de um valor
  // com array
  for (i of array) {
      console.log(i);
  }
  // com object não funciona pois não é iterável
  for (i of object.propriedade1) {
      console.log(i);
  }


  // while - executa enquanto for verdadeira
  // var a = 0;
  while (a < 10) {
      a++;
      console.log(a)
  }

  // do - executa até que seja falsa
  do {
      a++;
      console.log(a);
  } while (a < 10);


  // funções - functions

  // como declarar
  // deve ser declarada usando a palavra function seguida de "()" e "{}"
  function funcao() {
      console.log('mensagem de uma função');
  }
  // chamando a função
  funcao();


  // função com parâmetros
  // definindo parâmetros
  function mensagem(primeiro, segundo) {
      console.log(primeiro, segundo)
  }
  // chamando a função atribuindo valor aos parâmetros
  mensagem('Tudo certo', 'jovem!');


  // tipos de função

  // função declarativa
  // deve ser declarada usando a palavra reservada function seguida do nome da funçao, parênteses "()" e chaves "{}"
  // deve ser nomeada obrigatioriamente

  function nomeDaFuncao() {
      alert('Sou uma função declarativa!');
  }
  // devemos chamar a função para ver o resultado
  // chamando a função
  nomeDaFuncao();


  // expressão de função
  // são funções atribuídas à expressões
  // a nomeação é opcional

  // com nomeação
  var funcao = function funcao() {
      alert('Sou uma expressão de função nomeada!');
  }

  // sem nomeação
  var funcao = function() {
      alert('Sou uma expressão de função não nomeada!')
  }


  // arrow Function
  // função de expressão de sintaxe curta
  // sempre anônima, não pode ser nomeada
  // deve ser declarada com parênteses "()", seguido de "=>" e depois chaves "{}"
  var funcao = () => {
      alert('Sou uma função anônima!')
  };
  funcao();