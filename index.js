const data1 = new Date();
const data2 = new Date("December 17, 2022 03:24:00.001z");
const data3 = new Date("2021-11-15T13:15:01Z");
var mes = 5
const data4 = new Date(2020, mes - 1, 10, 11 - 3, 13, 15);
const data5 = Date.UTC(2020, mes - 1, 10, 11, 13, 15);
const data6 = new Date(2000);

console.log('data 1:', data1);
console.log('data 2:', data2);
console.log('data 3:', data3);
console.log('data 4:', data4);
console.log('data 6:', data6);
console.log(data5);
