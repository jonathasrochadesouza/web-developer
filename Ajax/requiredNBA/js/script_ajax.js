$(function(){
    const tbody = $(".table tbody");
    
    function obterDados(){
        $.ajax('https://www.balldontlie.io/api/v1/players/1', {
            type: 'GET',
            beforeSend: function(){
                $('.table').after('<p class="loading"> Aguarde! Carregando...</p>');
            },
            error: function(){
                $('.table').after('<p class="loading"> Deu ruim </p>');
            },
            success: function(dados){
                mostrarDados(dados);
            },
            complete: function(){
                $('.loading').remove();
            }
        })
        
        function mostrarDados(dados){
            $.each(dados, function(i, el){
                tbody.append(`<tr class="linha">
                                <td class="nome">${data.first_name}</td>
                              </tr>`)
            })
        }
    }
    obterDados();
    tbody.on('click', (e) => {    
        $linha = $(e.target).closest(".linha");
        $("#name").val($linha.children(".nome").text());
    })
})