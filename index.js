// const data = new Date('2023-04-16T12:10:05.123Z');

// // altera o dia mês e ano
// data.setFullYear(2022);
// data.setMonth(0);
// data.setDate(24);

// altera a hora, minuto, segundo e milisegundos
// data.setHours(20 - 3, 21, 10);
// data.setMinutes(40);
// data.setSeconds(15);
// data.setMilliseconds(120)

// console.log(data);


const data = new Date('2023-04-16T12:10:05.123Z');
console.log(data);
setTimeout(() => {
    const novoDia = data.getDate() - 5;

    data.setDate(novoDia);
    console.log(data);
}, 2000)