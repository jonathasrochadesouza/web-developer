$(function(){
    $(".coordenadas").mouseenter(function() {
        console.log("O mouse entrou!")
        $(".valores").fadeIn();
    });
    
    $(".coordenadas").mousemove(function(e) {
        console.log(e.clientX, e.clientY);
        var posicoes = $(this).offset();
        var x = e.clientX - posicoes.left;
        var y = e.clientY - posicoes.top;
        
        $(".valores").html(`coordenadas x: ${x} e y: ${y}`);
    });
    
    $(".coordenadas").mouseout(function() {
        console.log("O mouse saiu!")
        $(".valores").fadeOut().html(``);
        
    });

})