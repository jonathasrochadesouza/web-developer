function Soma() {
    var resul;
    resul = parseInt(document.getElementById('soma1').value) +
            parseInt(document.getElementById('soma2').value);

    var caracteres1;
    caracteres1 = document.getElementById('soma1').value.length;
    
    var caracteres2;
    caracteres2 = document.getElementById('soma2').value.length;

    alert('Resultado: ' + resul + 
          '\nQuantidade de caracteres do primeiro campo: ' + caracteres1 +
          '\nQuantidade de caracteres do segundo campo: ' + caracteres2);
}