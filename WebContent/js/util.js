function formataValor(idCampo){
	$(idCampo).maskMoney({
		allowZero : true
	});
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
