// 1 janeiro de 1970 as 00:00:00 UTC

// formas de pegar o timestemp
// const data = new Date();
// const timestemp1 = Date.now();

// console.log(timestemp1);
// console.log(data.getTime());
// console.log(+new Date());

// calculando quantos segundos passaram
// const dataInicio = Date.now();
// setTimeout(() => {
//     const milisegundos = Date.now() - dataInicio;

//     console.log(milisegundos / 1000);
// }, 5000)

const data1 = new Date('2022-12-15');
const data2 = new Date('2023-12-15');
const diffTime = data2.getTime() - data1.getTime();
const diffDays = diffTime / (1000 * 60 * 60 * 24);
console.log(diffDays);



