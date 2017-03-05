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
		confirmaMovimentacao(event, "Receita");
	});
	$("#cancelaNovaReceita").click(function(event){
		cancelaMovimentacao(event, "Receita");
	});

	$("#botaoAdicionaDespesa").click(function(event) {
		adicionaMovimentacao(event, "Despesa");
	});
	$("#confirmaNovaDespesa").click(function(event){
		confirmaMovimentacao(event, "Despesa");
	});
	$("#cancelaNovaDespesa").click(function(event){
		cancelaMovimentacao(event, "Despesa");
	});
});

function adicionaMovimentacao(event, movimentacao){
	event.preventDefault();
	var idFormulario = buildIdComponente("formInclusao", movimentacao);
	$(idFormulario).slideToggle(600);
}

function confirmaMovimentacao(event, movimentacao) {
	event.preventDefault();
	//Variáveis contendo os ids dos componentes HTML
	var idInputDescricao = buildIdComponente("descricao", movimentacao);
	var idInputValor = buildIdComponente("valor", movimentacao);
	var idTabela = buildIdComponente("corpoTabela", movimentacao);
	var idFormulario = buildIdComponente("formInclusao", movimentacao);

	var descricao = $(idInputDescricao).val();
	var valor = $(idInputValor).val();
	if(!valorValido(valor)){
		alert("Valor da movimentação inválido");
	}
	else{
		$(idTabela).append(novaLinha(descricao, valor));
	}
	fechaFormulario(idFormulario);
}

function cancelaMovimentacao(event, movimentacao) {
	event.preventDefault();
	var idFormulario = buildIdComponente("formInclusao", movimentacao);
	fechaFormulario(idFormulario);
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

function valorValido(valor){
	if(valor === ""){
		return false;
	}
	return true;
}

function fechaFormulario(idFormulario){
	zeraValoresFormulario(idFormulario);
	$(idFormulario).slideUp(600);
}

function buildIdComponente(componente, movimentacao){
	return "#" + componente + movimentacao;
}

function zeraValoresFormulario(idFormulario) {
	var seletorFormulario = idFormulario + " input";
	$(seletorFormulario).val("");
}
