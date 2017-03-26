package br.com.tutu.dao;

import java.math.BigDecimal;
import java.util.Calendar;
import java.util.Calendar.Builder;

import javax.persistence.EntityManager;

import br.com.tutu.model.Movimentacao;
import br.com.tutu.model.TipoMovimentacao;
import br.com.tutu.model.Usuario;
import br.com.tutu.util.JPAUtil;
import br.com.tutu.util.Util;

public class MovimentacaoDAO {
	private EntityManager manager;
	public MovimentacaoDAO(EntityManager manager) {
		this.manager = manager;
	}
	
	//Retorna o id gerado no BD
	public int criaMovimentacao(String descricao, BigDecimal valor, Calendar data, TipoMovimentacao tipo, Integer idUsuario, boolean fixa){
		Movimentacao mov = new Movimentacao();
		mov.setDescricao(descricao);
		mov.setValor(valor);
		mov.setData(data);
		mov.setMovimentacao_fixa(false);
		mov.setTipo_movimentacao(tipo);
		mov.setMovimentacao_fixa(fixa);
		Usuario user = manager.find(Usuario.class, idUsuario);
		mov.setUsuario(user);
		
		manager.getTransaction().begin();
		
		manager.persist(mov);
		manager.getTransaction().commit();
		
		manager.close();
		return mov.getId();
	}
	
	

}
