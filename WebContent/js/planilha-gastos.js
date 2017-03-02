$(function(){
	$("#novaReceitaValor").maskMoney({prefix:'R$', allowZero:true});
	$("#botaoAdicionaReceita").click(adicionaLinha);	
});

function adicionaLinha(){
	console.log("adiciona");
	/*Exibindo formulario de inclusao de nova receita*/
	$("#formInclusaoReceita").slideDown(600);
	
}