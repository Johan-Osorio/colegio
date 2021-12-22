function cal_promedio(n1, n2, n3){
    var n1 = parseInt(document.getElementById('parcial1').value);
    var n2 = parseInt(document.getElementById('parcial2').value);
    var n3 = parseInt(document.getElementById('parcial3').value);
    let p = (n1+n2+n3)/3;
    document.getElementById('promedio').innerText= p;
    if (p >= 14){
        document.getElementById('destino').innerText='aprobado';
    }
    else {
        document.getElementById('destino').innerText='desaprobado';
    }
}