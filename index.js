// const data = new Date('2023-04-16T12:00:05Z');

// // dia do mês é de 01 ao 30
// const dia = data.getDate();

// // dia da semana que segunda começa com o valor sendo 0
// const diaSemana = data.getDay();

// // Mês do ano que janeiro começa com o valor sendo 0
// const mes = data.getMonth();

// // Retorna o ano
// const ano = data.getFullYear();

// console.log('Dia do mês ', dia);
// console.log('Dia da semana ', diaSemana);
// console.log('Mes do ano ', mes);
// console.log('Ano ', ano);


// 16/04/2023
// new Date(2023, 4 - 1, 16)
const data = new Date('2023-04-16T12:00:05Z');
const dia = data.getDate().toString().padStart(2, '0'); // 01 

const mes = (data.getMonth() + 1).toString().padStart(2, '0');

const ano = data.getFullYear();
console.log(data);
console.log(`${dia}/${mes}/${ano}`);