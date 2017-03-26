package br.com.tutu.util;

import java.math.BigDecimal;
import java.util.Calendar;
import java.util.Calendar.Builder;

import br.com.tutu.model.TipoMovimentacao;

public class Util {
	public static Calendar parseDataIntoCalendar(String data){
		String[] parametros_data = data.split("/");
		Builder data_builder = new Calendar.Builder().setDate(Integer.parseInt(parametros_data[2]),
				Integer.parseInt(parametros_data[1]) - 1, Integer.parseInt(parametros_data[0]));
		return data_builder.build();
	}
	
	public static TipoMovimentacao getTipoMovimentacaoFromString(String texto){
		if(texto.equalsIgnoreCase("Receita")){
			return TipoMovimentacao.Receita;
		}
		else if(texto.equalsIgnoreCase("Despesa")){
			return TipoMovimentacao.Despesa;
		}
		else{
			return TipoMovimentacao.Invalido;
		}
	}
	
	//WARNING - validar data no futuro
	//WARNING - Validar idUsuario
	public static boolean validaLinha(BigDecimal valor, TipoMovimentacao tipo, Calendar data, Integer idUsuario){
		if(tipo == TipoMovimentacao.Invalido || valor == null || data == null){
			return false;
		}
		return true;
	}
}
