<!DOCTYPE html>
<html>
<head>
<title>Planilha de gastos</title>
<meta charset="utf-8">
<link rel="stylesheet" href="css/reset.css" />
<!--Import Google Icon Font-->
<link href="http://fonts.googleapis.com/icon?family=Material+Icons"
	rel="stylesheet" />
<!--Import materialize.css-->
<link type="text/css" rel="stylesheet" href="css/materialize.min.css"
	media="screen,projection" />
</head>
<body>
	<h1>Planilha</h1>
	<p>Usuario</p>
	<p>Mês/ano</p>
	<section class="receitas">
		<input type="submit" value="Adicionar" />
		<table>
			<thead>
				<tr>
					<th colspan="2">Receitas</th>
				</tr>
				<tr>
					<th>Descrição</th>
					<th>Valor</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
					<td>Total</td>
					<td>5000</td>
				</tr>
			</tfoot>
			<tbody>
				<tr>
					<td>Lorem ipsum</td>
					<td>123.45</td>
					<td><input type="button" value="Editar" /></td>
					<td><input type="button" value="Apagar" /></td>
				</tr>
			</tbody>
		</table>
	</section>
	<section class="despesas">
		<input type="submit" value="Adicionar" />
		<table>
			<thead>
				<tr>
					<th colspan="2">Despesas</th>
				</tr>
				<tr>
					<th>Descrição</th>
					<th>Valor</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
					<td>Total</td>
					<td>5000</td>
				</tr>
			</tfoot>
			<tbody>
				<tr>
					<td>Lorem ipsum</td>
					<td>123.45</td>
					<td><input type="button" value="Editar" /></td>
					<td><input type="button" value="Apagar" /></td>
				</tr>
			</tbody>
		</table>
	</section>
	<footer>
		<p>Feito por: Raimundo Campos - Todos os direitos reservados</p>
		<p>Contato: raimundojr89@gmail.com</p>
	</footer>
	<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="js/materialize.min.js"></script>
</body>
</html>