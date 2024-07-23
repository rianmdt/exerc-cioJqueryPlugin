$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true
        
    })


    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-000')

    $('form').validate({
        rules:{
            nome:{required: true

            },
            email:{required: true},

            telefone:{required: true},

            cpf:{required: true},

            endereco:{
                required: true
            },
            cep:{
                required: true
            }
            
        }
    })
});