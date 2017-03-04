$(function() {
	// Criando máscara para aceitar somente numeros no campo valor
	$("#valorReceita").maskMoney({
		allowZero : true
	});
	$("#valorDespesa").maskMoney({
		allowZero : true
	});

	$("#botaoAdicionaReceita").click(function(event) {
		adicionaMovimentacao(event, "Receita");
	});
	$("#confirmaNovaReceita").click(function(event){
		confirmaNovaMovimentacao(event, "Receita");
	});
	$("#cancelaNovaReceita").click(cancelaNovaReceita);

	$("#botaoAdicionaDespesa").click(function(event) {
		adicionaMovimentacao(event, "Despesa");
	});
	$("#confirmaNovaDespesa").click(function(event){
		confirmaNovaMovimentacao(event, "Despesa");
	});
	$("#cancelaNovaDespesa").click(cancelaNovaDespesa);
});

function adicionaMovimentacao(event, movimentacao){
	event.preventDefault();
	var idFormulario = buildIdComponente("formInclusao", movimentacao);
	$(idFormulario).slideDown(600);
}

function confirmaNovaMovimentacao(event, movimentacao) {
	event.preventDefault();
	//Variáveis contendo os ids dos componentes HTML
	var idInputDescricao = buildIdComponente("descricao", movimentacao);
	var idInputValor = buildIdComponente("valor", movimentacao);
	var idTabela = buildIdComponente("corpoTabela", movimentacao);
	var idFormulario = buildIdComponente("formInclusao", movimentacao);

	let
	descricao = $(idInputDescricao).val();
	let
	valor = $(idInputValor).val();
	$(idTabela).append(novaLinha(descricao, valor));

	zeraValoresFormulario(idFormulario);
	$(idFormulario).slideUp(600);
}

function cancelaNovaReceita() {
	zeraValoresFormulario("#formInclusaoReceita");
	$("#formInclusaoReceita").slideUp(600);
}

function novaLinha(descricao, valor) {
	var meuTr = $("<tr>");
	var tdDescricao = $("<td>").text(descricao);
	var tdValor = $("<td>").text(valor);

	var tdEdit = $("<td>");
	var linkEdit = $("<a>").attr("href", "#").addClass(
			"btn-floating btn-medium waves-effect waves-light blue");
	var iconeEdit = $("<i>").addClass("material-icons").text("edit");
	linkEdit.append(iconeEdit);
	tdEdit.append(linkEdit);

	var tdDelete = $("<td>");
	var linkDelete = $("<a>").attr("href", "#").addClass(
			"btn-floating btn-medium waves-effect waves-light pink");
	var iconeDelete = $("<i>").addClass("material-icons").text("delete");
	linkDelete.append(iconeDelete);
	tdDelete.append(linkDelete);

	meuTr.append(tdDescricao);
	meuTr.append(tdValor);
	meuTr.append(tdEdit);
	meuTr.append(tdDelete);
	return meuTr;
}

function buildIdComponente(componente, movimentacao){
	return "#" + componente + movimentacao;
}

function zeraValoresFormulario(idFormulario) {
	var seletorFormulario = idFormulario + " input";
	$(seletorFormulario).val("");
}
