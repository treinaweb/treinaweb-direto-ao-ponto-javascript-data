const data = new Date('2023-04-16T12:00:00.000Z');

const dataFormatada = data.toLocaleDateString(['pt-BR', 'en-US'], {
    // dateStyle: 'medium',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    weekday: 'long',
});

console.log(dataFormatada);