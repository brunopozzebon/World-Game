var counter = 0;

$("#input").on('input', function(){
    let valor = $(this).val();
    valor = corrigirValor(valor);
    valor = valor.split(' ').join('_');
   	let paises = document.getElementsByClassName(valor);
   	if (paises.length>0) {
	   	if(!($(paises[0])).hasClass("red_background")){
	   		for (var i = 0; i < paises.length; i++) {
	   			let pais = ($(paises)[i]);
	   			$(pais).addClass("red_background");
	   		}
	   		counter++;
	   		$("#counter").text(counter+"/ 194");
	   		$(this).val("");
	   	}else{
		//Add esse pais já foi adicionado
		}
	}
});

function corrigirValor(text){
	text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    text = text.replace(new RegExp('[Ç]','gi'), 'c');
    text = text.trim();
    return text;
}
