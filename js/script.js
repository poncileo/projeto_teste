$(document).ready(function() {       
    var tamanhoTela = window.getComputedStyle(document.body, ':after').getPropertyValue('content');
    
    function isPainelExibido(painel) {
        if( painel === undefined ) return;
        
        var nao_encontrado = -1;            
        var painelExibido = ( painel.id.indexOf("-ativo") !== nao_encontrado )? true : false;

        return painelExibido;
    }
    
    function toggleIdPainel() {
        var painel = $(".js-popup-painel")[0];
        
        var painelAtivo = "box-menu-mobile-ativo";
        var painelInativo = "box-menu-mobile";

        if( painel.id == painelAtivo ) {
            painel.id = painelInativo;
        } else {
            painel.id = painelAtivo;
        }
    }
    
    function acaoBotaoMenuMobile() {
        $(document).click(function(e){
            var target = e.target;
            
            if( isPainelExibido(target) ) {
                toggleIdPainel();
            } else {
                toggleIdPainel();
            }
        });
    }
    
    if( tamanhoTela.indexOf("mobile") != -1 ) {
        acaoBotaoMenuMobile();
    }
});