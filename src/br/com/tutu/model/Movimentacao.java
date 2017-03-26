package br.com.tutu.model;

import java.math.BigDecimal;
import java.util.Calendar;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Movimentacao {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String descricao;
	private BigDecimal valor;
	private boolean movimentacao_fixa;
	@Enumerated(EnumType.STRING)
	private TipoMovimentacao tipo_movimentacao;
	@Temporal(TemporalType.DATE)
	private Calendar data;
	@ManyToOne
	private Usuario usuario;
	
	public Movimentacao() {
		// TODO Auto-generated constructor stub
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public BigDecimal getValor() {
		return valor;
	}

	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}

	public boolean isMovimentacao_fixa() {
		return movimentacao_fixa;
	}

	public void setMovimentacao_fixa(boolean movimentacao_fixa) {
		this.movimentacao_fixa = movimentacao_fixa;
	}

	public TipoMovimentacao getTipo_movimentacao() {
		return tipo_movimentacao;
	}

	public void setTipo_movimentacao(TipoMovimentacao tipo_movimentacao) {
		this.tipo_movimentacao = tipo_movimentacao;
	}

	public Calendar getData() {
		return data;
	}

	public void setData(Calendar data) {
		this.data = data;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public int getId() {
		return id;
	}
}
