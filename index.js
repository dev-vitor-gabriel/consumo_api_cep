$(document).ready(function() {

     $("button").click(function(){
        let textCep = $('#textInput').val();
        $.ajax({
            url: 'https://viacep.com.br/ws/' + textCep +'/json/',
            method: 'GET',
            datatype: 'json',
        success: function(result){
        //    let montaHtml = MontaDadosCep(result);
           $('#conteudoCep').html(MontaDadosCep(result));
        }});
    });
});

function MontaDadosCep(result) {
    return `<label>CEP: ${result.cep}</label>
    <label>Logradouro: ${result.logradouro}</label>
    <label>Complemento: ${result.complemento}</label>
    <label>Bairro: ${result.bairro}</label>
    <label>Localidade: ${result.localidade}</label>
    <label>UF: ${result.uf}</label>
    <label>IBGE: ${result.ibge}</label>
    <label>DDD: ${result.ddd}</label>`;
}
