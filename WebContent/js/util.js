function formataValor(idCampo){
	$(idCampo).maskMoney({
		allowZero : true
	});
}

function formataInputData(idInput){
  $(idInput).datepicker({
    dateFormat: "dd/mm/yy",
  }).mask("99/99/9999");
}

function buildIdComponente(componente, movimentacao){
	return "#" + componente + movimentacao;
}

function buildClassComponente(componente, movimentacao){
	return "." + componente + movimentacao;
}

function valorValido(valor){
	if(valor === ""){
		return false;
	}
	return true;
}

function converteTextoEmNumero(texto){
  texto = texto.replace(/,/g, "");
  return parseFloat(texto);
}
