package br.com.tutu.controller;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.Calendar;

import javax.persistence.EntityManager;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.com.tutu.dao.MovimentacaoDAO;
import br.com.tutu.model.TipoMovimentacao;
import br.com.tutu.util.JPAUtil;
import br.com.tutu.util.Util;

/**
 * Servlet implementation class NovaLinha
 */
@WebServlet("/NovaLinha")
public class NovaLinha extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		Integer id = gravaLinhaBanco(req);
		if(id >= 0){
			resp.setContentType("text/plain");
			resp.setCharacterEncoding("utf-8");
			resp.getWriter().write(id.toString());
		}
		else{
			resp.sendError(400);
		}
	}
	
	//Chama o métodos DAO de gravação no banco e retorna o id do elemento gravado, ou -1 em caso de algum parâmetro inválido
	private Integer gravaLinhaBanco(HttpServletRequest req) {
		// recupera os parametros enviados pela página
		String descricao = req.getParameter("descricao");
		BigDecimal valor = new BigDecimal(req.getParameter("valor"));
		Calendar data =  Util.parseDataIntoCalendar(req.getParameter("data"));
		TipoMovimentacao tipo = Util.getTipoMovimentacaoFromString(req.getParameter("movimentacao"));
		Integer idUsuario = new Integer(req.getParameter("idUsuario"));
		boolean fixa = new Boolean(req.getParameter("fixa"));
		
		if(Util.validaLinha(valor, tipo, data, idUsuario)){
			// Cria nova linha no BD e recupera o ID, enviando de volta para a pagina
			EntityManager manager = new JPAUtil().getEntityManager();
			MovimentacaoDAO dao = new MovimentacaoDAO(manager);
			return dao.criaMovimentacao(descricao, valor, data, tipo, idUsuario, fixa);			
		}
		else{
			return -1;
		}
	}
}
