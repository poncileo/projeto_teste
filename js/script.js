$(document).ready(function(){
    var tamanhoTela = window.getComputedStyle(document.body, ':after').getPropertyValue('content');
    
    function mudarClasseMenuMobile(box_menu) {
    
        var classeMenuAtivo = "box-menu-mobile-ativo";
        var classeMenuInativo = "box-menu-mobile";
        
        if( $(box_menu).hasClass(classeMenuAtivo) ) {
            $(box_menu).removeClass(classeMenuAtivo);
            $(box_menu).addClass(classeMenuInativo);
        } else {
            $(box_menu).removeClass(classeMenuInativo);
            $(box_menu).addClass(classeMenuAtivo);
        }
    }
    
    function definirExibicaoPainelMobile(painel){
        
        var classePainelAtivo = "js-popup-painel-ativo";
        var classePainelInativo = "js-popup-painel";

        if( $(painel).hasClass(classePainelAtivo) ) {
            $(painel).style.display = "none";
             $(painel).removeClass(classePainelAtivo);
            $(painel).addClass(classePainelInativo);
        } else {
            $(painel).style.display = "block";
            $(painel).removeClass(classePainelInativo);
            $(painel).addClass(classePainelAtivo);
        }
    }
    
    function isElementoDoPainel(elemento, painel) {
        if( painel === undefined ) return;
        
        if( $(elemento).parents( "#" + painel.id.toString() ).length > 0 ) return true;
        
        return false;
    }
    
    function acaoBotaoMobile(painel,) {
        $(document.body).click(function(e){
            var elementoClicado = e.target;
            
            if( elementoClicado != painel && isElementoDoPainel(elementoClicado, painel) ) {
                //Evita o fechamento do painel caso o clique ocorra em um de seus elementos filho
                elementoClicado = $(elementoClicado).parents(".painel-mobile")[0];
            }
            
            if( $(elementoClicado) == ".botao-mobile-menu"  ) {
                definirExibicaoPainelMobile(painel);
            }
        });
    }
     if( tamanhoTela.indexOf("mobile") != -1 ) {
        
        mudarClasseMenuMobile();
        
    }
});