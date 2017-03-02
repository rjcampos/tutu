$(function(){
	$("#novaReceitaValor").maskMoney({prefix:'R$', allowZero:true});
	$("#botaoAdicionaReceita").click(adicionaLinha);
	
	
	$("#cancelaNovaReceita").click(cancelaNovaReceita);
});

function adicionaLinha(){
	console.log("adiciona");
	/*Exibindo formulario de inclusao de nova receita*/
	$("#formInclusaoReceita").slideDown(600);
}

function cancelaNovaReceita(){
	zeraValoresFormulario("#formInclusaoReceita");
	$("#formInclusaoReceita").slideUp(600);
}

function zeraValoresFormulario(idFormulario){
	var seletorFormulario = idFormulario + " input"; 
	$(seletorFormulario).val("");
}