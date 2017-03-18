//melhorar mensagem de valor invalido
//criar coluna data e coluna hidden id

/*WARNING - fazer o cálculo do total com java no backend por causa da falta de precisão do javascript*/
$(function() {
	$(document).tooltip();

	// Criando máscara para aceitar somente numeros no campo valor
	formataValor("#valorNovaReceita");
	formataValor("#valorNovaDespesa");

	iniciaBotoes("Receita");
	iniciaBotoes("Despesa")

	iniciaInputs("Receita");
	iniciaInputs("Despesa");

	atualizaTotal("Receita");
	atualizaTotal("Despesa");
});

function iniciaBotoes(movimentacao){
	//Associando eventos aos botões
	$("#botaoAdiciona" + movimentacao).click(function(event) {
		adicionaMovimentacao(event, movimentacao);
	});
	$("#confirmaNova" + movimentacao).click(function(event){
		confirmaMovimentacao(event, movimentacao);
	});
	$("#cancelaNova" + movimentacao).click(function(event){
		cancelaMovimentacao(event, movimentacao);
	});
	$(".botaoEdita" + movimentacao).click(function(event){
		editaMovimentacao(event, movimentacao, $(this));
	});
	$(".botaoExclui" + movimentacao).click(function(event){
		excluiMovimentacao(event, movimentacao, $(this));
	});
}

function iniciaInputs(movimentacao){
	var idInputDescricao = buildIdComponente("descricaoNova", movimentacao);
	var idInputValor = buildIdComponente("valorNova", movimentacao);

	var idInputData = buildIdComponente("dataNova", movimentacao);
	//WARNING - iniciar input com datepicker

	associaTeclasNovaMovimentacao(idInputDescricao, movimentacao);
	associaTeclasNovaMovimentacao(idInputValor, movimentacao);
	associaTeclasNovaMovimentacao(idInputData, movimentacao);
}

function associaTeclasNovaMovimentacao(id, movimentacao){
	$(id).keydown(function(e){
			if(e.which == 13){
				confirmaMovimentacao(e, movimentacao);
			}
			else if(e.which == 27){
				cancelaMovimentacao(e, movimentacao);
			}
	});
}

function adicionaMovimentacao(event, movimentacao){
	event.preventDefault();
	var idFormulario = buildIdComponente("formInclusao", movimentacao);
	$(idFormulario).slideToggle(600);
	$(buildIdComponente("descricaoNova", movimentacao)).focus();
}

function confirmaMovimentacao(event, movimentacao) {
	event.preventDefault();
	//Variáveis contendo os ids dos componentes HTML
	var idInputDescricao = buildIdComponente("descricaoNova", movimentacao);
	var idInputValor = buildIdComponente("valorNova", movimentacao);
	var idInputData = buildIdComponente("dataNova", movimentacao);
	var idTabela = buildIdComponente("corpoTabela", movimentacao);
	var idFormulario = buildIdComponente("formInclusao", movimentacao);

	var descricao = $(idInputDescricao).val();
	var valor = $(idInputValor).val();
	var data = $(idInputData).val();
	//WARNING - Validar data
	if(!valorValido(valor)){
		alert("Valor da movimentação inválido");
	}
	else{
		var linha = novaLinha(descricao, valor, data, movimentacao);
		var classEdit = buildClassComponente("botaoEdita", movimentacao);
		var classDelete = buildClassComponente("BotaoExclui", movimentacao);
		linha.find(classEdit).click(function(event){
			editaMovimentacao(event, movimentacao, $(this));
		});
		linha.find(classDelete).click(function(event){
			excluiMovimentacao(event, movimentacao, $(this));
		});
		$(idTabela).append(linha);
		atualizaTotal(movimentacao);
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
	var classeTdData = buildClassComponente("data", movimentacao);

	var tdDescricao = botao.parent().siblings(classeTdDescricao);
	var tdValor = botao.parent().siblings(classeTdValor);
	var tdData = botao.parent().siblings(classeTdData);

	var descricao = tdDescricao.text();
	var valor = tdValor.text();
	var data = tdData.text();

	var tdEditaDescricao = buildEditField(descricao, "editaDescricao", movimentacao);
	var tdEditaValor = buildEditField(valor, "editaValor", movimentacao);
	var tdEditaData = buildEditField(data, "editaData", movimentacao);

	var classeEditaValor = buildClassComponente("editaValor", movimentacao);
	var classeEditaDescricao = buildClassComponente("editaDescricao", movimentacao);
	var classeEditaData = buildClassComponente("editaData", movimentacao);

	tdDescricao.replaceWith(tdEditaDescricao);
	tdValor.replaceWith(tdEditaValor);
	tdData.replaceWith(tdEditaData);
	//Aplica máscara no campo de edição do valor
	formataValor(classeEditaValor);
	//WARNING - aplicar datepicker ao campo de edição da data
	botao.addClass("escondido");

	tdEditaDescricao.find(classeEditaDescricao).focus();
}

function excluiMovimentacao(event, movimentacao, botao){
	event.preventDefault();
	atualizaTotal(movimentacao);
	var linha = botao.parent().parent();
	linha.fadeOut(600);
	setTimeout(function(){
			linha.remove();
			atualizaTotal(movimentacao);
	}, 1000);
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
			atualizaTotal(movimentacao);
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
	var classeEditaData = buildClassComponente("editaData", movimentacao);
	//Navega no DOM para localizar os inputs especificos daquela linha
	var inputEditaDescricao = input.parent().parent().find(classeEditaDescricao);
	var inputEditaValor = input.parent().parent().find(classeEditaValor);
	var inputEditaData = input.parent().parent().find(classeEditaData);

	var novoTdDescricao = $("<td>").addClass("descricao" + movimentacao).text(inputEditaDescricao.val());
	var novoTdValor = $("<td>").addClass("valor" + movimentacao).text(inputEditaValor.val());
	var novoTdData = $("<td>").addClass("data" + movimentacao).text(inputEditaData.val());

	inputEditaDescricao.parent().replaceWith(novoTdDescricao);
	inputEditaValor.parent().replaceWith(novoTdValor);
	inputEditaData.parent().replaceWith(novoTdData);
}

function novaLinha(descricao, valor, data, movimentacao) {
	//WARNING - faz alguma coisa e recupera o id da linha

	var classeBotaoEdit = "botaoEdita" + movimentacao;
	var classeBotaoDelete = "BotaoExclui" + movimentacao;
	var classeTdId = "id" + movimentacao;
	var classeTdDescricao = "descricao" + movimentacao;
	var classeTdValor = "valor" + movimentacao;
	var classeTdData = "data" + movimentacao;

	var meuTr = $("<tr>");
	//Cria td com o id da linha
	var tdId = $("<td>").addClass(classeTdId + " escondido");
	//WARNING - Substituir valor pelo recuperado via AJAX
	var inputId = $("<input>").attr("type", "hidden").attr("name", "id" + movimentacao).attr("value", "-1");
	tdId.append(inputId);

	var tdDescricao = $("<td>").addClass(classeTdDescricao).text(descricao);
	var tdValor = $("<td>").addClass(classeTdValor).text(valor);
	var tdData = $("<td>").addClass(classeTdData).text(data);

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

	meuTr.append(tdId);
	meuTr.append(tdDescricao);
	meuTr.append(tdValor);
	meuTr.append(tdData);
	meuTr.append(tdEdit);
	meuTr.append(tdDelete);
	return meuTr;
}

function fechaFormulario(idFormulario){
	zeraValoresFormulario(idFormulario);
	$(idFormulario).slideUp(600);
}

function zeraValoresFormulario(idFormulario) {
	var seletorFormulario = idFormulario + " input";
	$(seletorFormulario).val("");
}

/*Provisório - fazer o cálculo do total com java no backend por causa da falta de precisão do javascript. Formatar o valor calculado para ser exibido na tela*/
function atualizaTotal(movimentacao){
	var classColuna = buildClassComponente("valor", movimentacao);
	var total = 0;
	$(classColuna).each(function(){
		total += converteTextoEmNumero($(this).text());
	});
	var numeroRedondo = total.toFixed(2);
	var idTotal = buildIdComponente("valorTotal", movimentacao);
	$(idTotal).text(numeroRedondo);
	formataValor(idTotal);
}
