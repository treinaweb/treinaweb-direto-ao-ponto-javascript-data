// const data = new Date('2023-04-16T12:10:05.123Z');

// // pegar as horas subtraindo o UTC
// const hora = data.getHours();
// const horaSemUTC = data.getUTCHours();

// const minutos = data.getMinutes();
// const minutosSemUTC = data.getUTCMinutes();

// const seconds = data.getSeconds();

// const milisegundos = data.getMilliseconds();

// console.log(data);
// // console.log('Horas Com UTC', hora);
// // console.log('Horas Sem UTC', horaSemUTC);

// // console.log('Minutos Com UTC', minutos);
// // console.log('Minutos Sem UTC', minutosSemUTC);

// console.log('segundos ', seconds);

// console.log('milisegundos ', milisegundos);

const data = new Date('2023-04-16T05:12:10.123Z');
const hora = data.getUTCHours().toString().padStart(2, '0');
const minutos = data.getMinutes().toString().padStart(2, '0');;
const seconds = data.getSeconds().toString().padStart(2, '0');;

console.log(`${hora}:${minutos}:${seconds}`);