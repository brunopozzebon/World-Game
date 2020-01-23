var counter = 0;

$("#input").on('input', function(){
    let value = $(this).val();
    value = simplifyEntry(value);
    value = value.split(' ').join('_');
   	let contries = document.getElementsByClassName(value);
   	if (contries.length>0) {
	   	if(!($(contries[0])).hasClass("colored")){
	   		for (var i = 0; i < contries.length; i++) {
	   			let contry = ($(contries)[i]);
	   			$(contry).addClass("colored");
	   		}
	   		counter++;
	   		$("#counter").text(counter+"/ 194");
	   		$(this).val("");
	   	}else{
				$('.alert').addClass('show');
					setTimeout(()=>{
						$('.alert').removeClass('show')
					}, 2000);
		}
	}
});

function simplifyEntry(text){
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
