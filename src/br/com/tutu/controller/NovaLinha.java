package br.com.tutu.controller;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.Calendar;
import java.util.Calendar.Builder;

import javax.persistence.EntityManager;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.tutu.dao.MovimentacaoDAO;
import br.com.tutu.model.Movimentacao;
import br.com.tutu.model.TipoMovimentacao;
import br.com.tutu.model.Usuario;
import br.com.tutu.util.JPAUtil;

/**
 * Servlet implementation class NovaLinha
 */
@WebServlet("/NovaLinha")
public class NovaLinha extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String descricao = req.getParameter("descricao");
		String valor = req.getParameter("valor");
		String data = req.getParameter("data");
		//Cria nova linha no BD e recupera o ID, enviado de volta para a pagina
		System.out.println(valor);
		System.out.println(data);
		EntityManager manager = new JPAUtil().getEntityManager();
		MovimentacaoDAO dao = new MovimentacaoDAO(manager);
		Integer id = dao.criaMovimentacao(descricao, valor, data);
		
		resp.setContentType("text/plain");
		resp.setCharacterEncoding("utf-8");
		resp.getWriter().write(id.toString());
	}
	
	

}
