const data = new Date('2023-04-16T12:00:00.000Z');

const dataFormatada = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short', timeStyle: 'short'
}).format(data);



console.log(dataFormatada);