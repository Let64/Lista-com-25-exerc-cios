//Atividade 1. Nível Básico
let alunos = ["Letícia", "Gabriela", "Maria", "Emanuelly", "Pamela"];
console.log(alunos[0]);
console.log(alunos[4]);
console.log(alunos);

//Atividade 2. Lista de frutas
let frutas = ["Maçã", "Uva", "Morango","Manga"];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

//3. Acessando posições
let cores = ["Verde", "Azul", "Amarelo", "Rosa", "Roxo"];
console.log(cores[0]);
console.log(cores[2]);
console.log(cores[4]);

//4. Alterando um valor
let produtos = ["Pastel", "Suco", "Coxinha"];
produtos[1] = "Refrigerante";
console.log(produtos);

//5. Quantidade de elementos
let cidades = ["Campinas", "Valinhos", "Piracicaba","Vinhedo","Hortolandia", "Sorocaba"];
console.log(" A lista possui " + (cidades.length) + " cidades ");

//Nível 2 — Manipulação de arrays
let jogos = ["Mario world", "FIFA", "Valorant"];
jogos.push(" Fortnite")
console.log(jogos);

//7. Adicionando no início
let materias = ["História", "Ed Fsica", " Bioogia"];
materias. unshift("Química");
console.log(materias);

//8  Removendo o último item
let cantina = ["Coxinha", "Coca cola", "Salgado", "Chocolate"];
cantina.pop();
console.log(cantina);

//9. Removendo o primeiro item
let nomes = ["Maria B", "Letícia", "Pamela", "Emanuelly"];
nomes.shift();
console.log(nomes);

// 10. Lista atualizada
let produtoss = ["Pastel", "Suco", "Coxinha", "Chocolate"];
produtoss.push("Pão de Queijo");
produtoss.shift();
produtoss[2] = "Esfiha";
console.log(produtoss);
console.log(" A lista possui " + (produtoss.length) + " produtos ");

// Nível 3 — Percorrendo arrays com for
//11. Mostrando todos os alunos
let alunos1 = ["Bianca", "Iara", "Ana Laura", "Gabriela"];
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}
//12. Lista numerada
let filmes = ["Missão impossivel", "Estrelas além do tempo", "Homem aranha", "Pantera negra", "A empregada"];
for (let i = 0; i < filmes.length; i++) {
    console.log((i + 1) + " . " + filmes[i])
}

//13. Produtos da cantina
let produtos2 = ['Pastel', 'Suco', 'Coxinha', 'Chocolate'];
for (let i = 0; i < produtos2.length; i++) {
    console.log(" Produtos " + (i + 1) + " : " + produtos[i]);
}

//14. Notas dos alunos
let notas1 = ["10", "9", "7", "8", "6"];
for (let i = 0;  i < notas1.length; i++){
    console.log(notas1[i])
}

//15. Verificando presença
let presentes = ["Paloma está presente", "Fofinha está presente", "Isabella está presente", "Gabriela está presente", "Laura está presente"]
for (let i = 0; i < presentes.length; i++) {
    console.log(presentes[i])
}

// Nível 4 — Cálculos com arrays
//16. Somando os números
let numeros1 = [10,20,30,40,50];
let soma = 0;
for (let i = 0; i < numeros1.length; i++) {
    soma = soma +  numeros1[i];
}
console.log(" A soma dos números é: " + soma);

//17. Média dos números
let numeros2 = [5,10,4,8,6];
let soma2 = 0;
let media = 0;
for (let i = 0; i < numeros2.length; i++) {
    soma2 = soma2 + numeros2[i];
}
media = soma2 / numeros2.length;
console.log(" A média é: " + media);

//18. Maior número
let numeros3 = [15, 8, 22, 5, 12];
let maiornumero = numeros3[0];
for (let i = 1; i < numeros3.length; i++){
    if (numeros3[i] > maiornumero){
        maiornumero = numeros3[i];
    }
}
console.log(" O maior número é: " + maiornumero);

//19. Menor número
let numeros3 = [15, 8, 22, 5, 12];
let menornumero = numeros3[0];
for (let i = 0; i < numeros3.length; i++){
    if (numeros3[i] < menornumero){
        menornumero = numeros3[i];
    }
}
console.log(" O menor número é :" + menornumero);

// 20. Quantidade de números pares
let numeros4 = [1,2,3,4,5,6,7,8];
let quantidadePares = 0;
for (let i = 0; i < numeros4.length; i++) 
    if (numeros4[i] % 2 ===0){
        quantidadePares = quantidadePares + 1;
    }
console.log(" A quantidade de números pares é: " + quantidadePares);

//