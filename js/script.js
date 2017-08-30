$(document).ready(function() {       
    var tamanhoTela = window.getComputedStyle(document.body, ':after').getPropertyValue('content');
    
    function isPainelExibido(painel) {
        if( painel === undefined ) return;
        
        var nao_encontrado = -1;            
        var painelExibido = ( painel.id.indexOf("-ativo") !== nao_encontrado )? true : false;

        return painelExibido;
    }
    
    function toggleIdPainel(target) {
        
        var painel = $(".js-popup-painel")[0];
        var idBotao =  "botao-mobile-menu" ;

        var painelAtivo = "box-menu-mobile-ativo";
        var painelInativo = "box-menu-mobile";

        if( painel.id == painelAtivo ) {
            painel.id = painelInativo;
        } else if( painel.id == painelInativo && target.id == idBotao ) {
            painel.id = painelAtivo;
        }
    }
    
    function acaoBotaoMenuMobile() {
        $(document).click(function(e){
            var target = e.target;
            
            if( !isPainelExibido(target) ) {
                toggleIdPainel(target);
            } else {
                toggleIdPainel(target);
            }
        });
    }
    
    function mudarCabecalhoOnScroll() {
        $(document).scroll(function() {
            var scroll_start = 0;
            var start_change = $("#cabecalho");
            var offset = start_change.offset();
            var scrollClass = "nav-scroll";
            
            if(start_change.length) {
                scroll_start = $(this).scrollTop();
                
                if( scroll_start == 0 ) {
                    $("header").removeClass(scrollClass);
                    
                } else {
                    $("header").addClass(scrollClass);
                }
            }
        });
    }
    
    if( tamanhoTela.indexOf("mobile") != -1 ) {
        acaoBotaoMenuMobile();
    } else if( tamanhoTela.indexOf("desktop") != -1 )  {
        mudarSecao();
        mudarCabecalhoOnScroll();
    }
    
    function mudarSecao() {
        $("ul").find("a").click(function(e) {
            
            var botao_menu = $(".botao-menu");
            
            if( e.target === botao_menu[0] || e.target === botao_menu[1] ) {
                
                e.preventDefault();
            
                var section = $(this).attr("href");

                $("html, body").animate({
                    scrollTop: $(section).offset().top
                });
            }            
        });
    }
});