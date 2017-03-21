package br.com.tutu.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
		
		System.out.println(valor);
		System.out.println(data);
		resp.setContentType("text/plain");
		resp.setCharacterEncoding("utf-8");
		resp.getWriter().write("novo");
	}

}
