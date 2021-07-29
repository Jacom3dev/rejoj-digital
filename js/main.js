const mostrarReloj = ()=>{
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos =formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`;

    const meses = ['Ene','Feb','Marz','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
    const dias =['Dom','Lun','Mar','Mie','Jue','Vie','Sab']

    let diaSemana = dias[fecha.getDay()]
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()]
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`
    document.getElementById('fecha').innerHTML = fechaTexto
    document.getElementById('contenedor').classList.toggle('animar')
}

const formatoHora = (hr)=>{
    if (hr<10) {
        hr = '0' + hr
    }

    return hr
}
setInterval(mostrarReloj, 1000);