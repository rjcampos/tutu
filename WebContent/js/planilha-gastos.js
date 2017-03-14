//criar coluna data e coluna hidden id
//melhorar mensagem de valor invalido
$(function() {
	// Criando máscara para aceitar somente numeros no campo valor
	$("#valorNovaReceita").maskMoney({
		allowZero : true
	});
	$("#valorNovaDespesa").maskMoney({
		allowZero : true
	});

	//Associando eventos aos botões
	$("#botaoAdicionaReceita").click(function(event) {
		adicionaMovimentacao(event, "Receita");
	});
	$("#confirmaNovaReceita").click(function(event){
		confirmaMovimentacao(event, "Receita");
	});
	$("#cancelaNovaReceita").click(function(event){
		cancelaMovimentacao(event, "Receita");
	});
	$(".botaoEditaReceita").click(function(event){
		editaMovimentacao(event, "Receita", $(this));
	});
	$(".botaoExcluiReceita").click(function(event){
		excluiMovimentacao(event, "Receita");
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
	$(".botaoEditaDespesa").click(function(event){
		editaMovimentacao(event, "Despesa", $(this));
	});
	$(".botaoExcluiDespesa").click(function(event){
		excluiMovimentacao(event, "Despesa");
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
	var idInputDescricao = buildIdComponente("descricaoNova", movimentacao);
	var idInputValor = buildIdComponente("valorNova", movimentacao);
	var idTabela = buildIdComponente("corpoTabela", movimentacao);
	var idFormulario = buildIdComponente("formInclusao", movimentacao);

	var descricao = $(idInputDescricao).val();
	var valor = $(idInputValor).val();
	if(!valorValido(valor)){
		alert("Valor da movimentação inválido");
	}
	else{
		var linha = novaLinha(descricao, valor, movimentacao);
		var classEdit = buildClassComponente("botaoEdita", movimentacao);
		var classDelete = buildClassComponente("BotaoExclui", movimentacao);
		linha.find(classEdit).click(function(event){
			editaMovimentacao(event, movimentacao, $(this));
		});
		linha.find(classDelete).click(function(event){
			excluiMovimentacao(event, movimentacao, $(this));
		});
		$(idTabela).append(linha);
	}
	fechaFormulario(idFormulario);
}

function cancelaMovimentacao(event, movimentacao) {
	event.preventDefault();
	var idFormulario = buildIdComponente("formInclusao", movimentacao);
	fechaFormulario(idFormulario);
}

function editaMovimentacao(event, movimentacao, botao){
	event.preventDefault();
	var classeTdDescricao = buildClassComponente("descricao", movimentacao);
	var classeTdValor = buildClassComponente("valor", movimentacao);

	var tdDescricao = botao.parent().siblings(classeTdDescricao);
	var tdValor = botao.parent().siblings(classeTdValor);
	var descricao = tdDescricao.text();
	var valor = tdValor.text();

	var tdEditaDescricao = buildEditField(descricao, "editaDescricao", movimentacao);
	var tdEditaValor = buildEditField(valor, "editaValor", movimentacao);
	var classeEditaValor = buildClassComponente("editaValor", movimentacao);

	tdDescricao.replaceWith(tdEditaDescricao);
	tdValor.replaceWith(tdEditaValor);
	//Aplica máscara no campo de edição do valor
	$(classeEditaValor).maskMoney({
		allowZero : true
	});
	botao.addClass("escondido");
}

function buildEditField(value, nomeCampo, movimentacao){
	var classeCampo = nomeCampo + movimentacao;
	var tdEdicao = $("<td>");
	var inputEdicao = $("<input>").attr("type", "text").attr("name", classeCampo).attr("class", classeCampo).attr("value", value);
	inputEdicao.keydown(function(e){
		if(e.which == 13){
			event.preventDefault();
			mostraBotaoEdicao($(this), movimentacao);
			insereNovosValores(movimentacao, $(this));
		}
	});
	tdEdicao.append(inputEdicao);
	return tdEdicao;
}

function mostraBotaoEdicao(input, movimentacao){
	var classeBotao = buildClassComponente("botaoEdita", movimentacao);
	var botao = input.parent().parent().find(classeBotao);
	botao.removeClass("escondido");
}

function insereNovosValores(movimentacao, input){
	var classeEditaDescricao = buildClassComponente("editaDescricao", movimentacao);
	var classeEditaValor = buildClassComponente("editaValor", movimentacao);
	//Navega no DOM para localizar os inputs especificos daquela linha
	var inputEditaDescricao = input.parent().parent().find(classeEditaDescricao);
	var inputEditaValor = input.parent().parent().find(classeEditaValor);
	var novoTdDescricao = $("<td>").addClass("descricao" + movimentacao).text(inputEditaDescricao.val());
	var novoTdValor = $("<td>").addClass("valor" + movimentacao).text(inputEditaValor.val());
	inputEditaDescricao.parent().replaceWith(novoTdDescricao);
	inputEditaValor.parent().replaceWith(novoTdValor);
}

function excluiMovimentacao(event, movimentacao){
	event.preventDefault();
	console.log("exclui");
}

function novaLinha(descricao, valor, movimentacao) {
	var classeBotaoEdit = "botaoEdita" + movimentacao;
	var classeBotaoDelete = "BotaoExclui" + movimentacao;
	var classeTdDescricao = "descricao" + movimentacao;
	var classeTdValor = "valor" + movimentacao;

	var meuTr = $("<tr>");
	var tdDescricao = $("<td>").addClass(classeTdDescricao).text(descricao);
	var tdValor = $("<td>").addClass(classeTdValor).text(valor);

	var tdEdit = $("<td>");
	var linkEdit = $("<a>").attr("href", "#").addClass(
			"btn-floating btn-medium waves-effect waves-light blue").addClass(classeBotaoEdit);
	var iconeEdit = $("<i>").addClass("material-icons").text("edit");
	linkEdit.append(iconeEdit);
	tdEdit.append(linkEdit);

	var tdDelete = $("<td>");
	var linkDelete = $("<a>").attr("href", "#").addClass(
			"btn-floating btn-medium waves-effect waves-light pink").addClass(classeBotaoDelete);
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

function buildClassComponente(componente, movimentacao){
	return "." + componente + movimentacao;
}

function zeraValoresFormulario(idFormulario) {
	var seletorFormulario = idFormulario + " input";
	$(seletorFormulario).val("");
}
