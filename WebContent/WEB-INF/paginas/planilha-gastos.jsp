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
<link type="text/css" rel="stylesheet" href="css/estilos.css" />
<link type="text/css" rel="stylesheet" href="css/planilha-gastos.css" />
</head>
<body>
	<main>
	<div class="container section">
		<div class="dados-sessao">
			<p>Logado como: usuario</p>
			<p>Mês/ano</p>
		</div>
		<section class="receitas">
			<table class="bordered highlight">
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
				<tbody id="corpoTabelaReceita">
					<tr>
						<td>Lorem ipsum</td>
						<td>123.45</td>
						<td><a href="#"
							class=" btn-floating btn-medium waves-effect waves-light blue">
								<i class="material-icons">edit</i>
						</a></td>
						<td><a href="#"
							class=" btn-floating btn-medium waves-effect waves-light pink">
								<i class="material-icons">delete</i>
						</a></td>
					</tr>
				</tbody>
			</table>
			<a href="#"
				class=" btn-floating btn-medium waves-effect waves-light green"
				id="botaoAdicionaReceita"> <i class="material-icons">add</i>
			</a>
			<form method="POST" class="row escondido" id="formInclusaoReceita">
				<fieldset class="col s4">
					<div class="input-field">
						<label for="descricaoReceita">Descrição</label> <input
							type="text" name="descricaoReceita" id="descricaoReceita" />
					</div>
					<div class="input-field">
						<label for="valorReceita">Valor</label> <input type="text"
							name="valorReceita" id="valorReceita" />
					</div>
					<a href="#" class=" btn-floating btn-small waves-effect waves-light green" id="confirmaNovaReceita">
						<i class="material-icons">done</i>
					</a> 
					<a href="#" class=" btn-floating btn-small waves-effect waves-light red" id="cancelaNovaReceita">
						<i class="material-icons">cancel</i>
					</a>
				</fieldset>
			</form>
		</section>


		<section class="despesas">
			<table class="bordered highlight">
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
				<tbody id="corpoTabelaDespesa">
					<tr>
						<td>Lorem ipsum</td>
						<td>123.45</td>
						<td><a href="#"
							class=" btn-floating btn-medium waves-effect waves-light blue">
								<i class="material-icons">edit</i>
						</a></td>
						<td><a href="#"
							class=" btn-floating btn-medium waves-effect waves-light pink">
								<i class="material-icons">delete</i>
						</a></td>
					</tr>
				</tbody>
			</table>
			<a href="#"
				class=" btn-floating btn-medium waves-effect waves-light red" id="botaoAdicionaDespesa"> <i
				class="material-icons">add</i>
			</a>
			<form method="POST" class="row escondido" id="formInclusaoDespesa">
				<fieldset class="col s4">
					<div class="input-field">
						<label for="descricaoDespesa">Descrição</label> <input
							type="text" name="descricaoDespesa" id="descricaoDespesa" />
					</div>
					<div class="input-field">
						<label for="valorDespesa">Valor</label> <input type="text"
							name="valorDespesa" id="valorDespesa" />
					</div>
					<a href="#" class=" btn-floating btn-small waves-effect waves-light green" id="confirmaNovaDespesa">
						<i class="material-icons">done</i>
					</a> 
					<a href="#" class=" btn-floating btn-small waves-effect waves-light red" id="cancelaNovaDespesa">
						<i class="material-icons">cancel</i>
					</a>
				</fieldset>
			</form>
		</section>
	</div>
	</main>
	<footer class="page-footer">
		<div class="container">
			<p>Feito por: Raimundo Campos - Todos os direitos reservados</p>
		</div>
	</footer>
	<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="js/materialize.min.js"></script>
	<script type="text/javascript" src="js/jquery.maskMoney.js"></script>
	<script type="text/javascript" src="js/planilha-gastos.js"></script>
</body>
</html>