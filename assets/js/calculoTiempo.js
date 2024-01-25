export function calcularTiempoTranscurrido(fechaInicial) {
    const milisegundosPorSegundo = 1000;
    const milisegundosPorMinuto = milisegundosPorSegundo * 60;
    const milisegundosPorHora = milisegundosPorMinuto * 60;
    const milisegundosPorDia = milisegundosPorHora * 24;
    const milisegundosPorSemana = milisegundosPorDia * 7;
    const milisegundosPorMes = milisegundosPorDia * 30; // Aproximado, 30 días por mes
    const milisegundosPorAnio = milisegundosPorDia * 365; // Aproximado, 365 días por año

    const fechaActual = new Date();
    const milisegundosTranscurridos = fechaActual - fechaInicial;

    const segundos = Math.floor(milisegundosTranscurridos / milisegundosPorSegundo);
    const minutos = Math.floor(milisegundosTranscurridos / milisegundosPorMinuto);
    const horas = Math.floor(milisegundosTranscurridos / milisegundosPorHora);
    const dias = Math.floor(milisegundosTranscurridos / milisegundosPorDia);
    const semanas = Math.floor(milisegundosTranscurridos / milisegundosPorSemana);
    const meses = Math.floor(milisegundosTranscurridos / milisegundosPorMes);
    const anios = Math.floor(milisegundosTranscurridos / milisegundosPorAnio);

    return {
        segundos,
        minutos,
        horas,
        dias,
        semanas,
        meses,
        anios
    };
}