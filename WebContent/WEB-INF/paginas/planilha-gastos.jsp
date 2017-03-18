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
<link type="text/css" rel="stylesheet" href="css/jquery-ui.css" />
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
						<th colspan="3">Receitas</th>
					</tr>
					<tr>
						<th>Descrição</th>
						<th>Valor</th>
						<th>Data</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<td>Total</td>
						<td id="valorTotalReceita"></td>
					</tr>
				</tfoot>
				<tbody id="corpoTabelaReceita">
					<tr>
						<td class="idReceita escondido">
							<input type="hidden" name="idReceita" value="-1">
						</td>
						<td class="descricaoReceita">Lorem ipsum</td>
						<td class="valorReceita">123.45</td>
						<td class="dataReceita">01/01/2017</td>
						<td><a href="#"
							class=" btn-floating btn-medium waves-effect waves-light blue botaoEditaReceita">
								<i class="material-icons">edit</i>
						</a></td>
						<td><a href="#"
							class=" btn-floating btn-medium waves-effect waves-light pink botaoExcluiReceita">
								<i class="material-icons">delete</i>
						</a></td>
					</tr>
				</tbody>
			</table>
			<a href="#"
				class=" btn-floating btn-medium waves-effect waves-light green"
				id="botaoAdicionaReceita" title="Adiciona nova receita"> <i class="material-icons">add</i>
			</a>
			<form method="POST" class="row escondido" id="formInclusaoReceita">
				<fieldset class="col s4">
					<div class="input-field">
						<label for="descricaoNovaReceita">Descrição</label> <input
							type="text" name="descricaoNovaReceita" id="descricaoNovaReceita" />
					</div>
					<div class="input-field">
						<label for="valorNovaReceita">Valor</label> <input type="text"
							name="valorNovaReceita" id="valorNovaReceita" />
					</div>
					<div class="input-field">
						<label for="dataNovaReceita">Data</label> <input type="text"
							name="dataNovaReceita" id="dataNovaReceita" />
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
						<th colspan="3">Despesas</th>
					</tr>
					<tr>
						<th>Descrição</th>
						<th>Valor</th>
						<th>Data</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<td>Total</td>
						<td id="valorTotalDespesa"></td>
					</tr>
				</tfoot>
				<tbody id="corpoTabelaDespesa">
					<tr>
						<td class="idDespesa escondido">
							<input type="hidden" name="idDespesa" value="-1" />
						</td>
						<td class="descricaoDespesa">Lorem ipsum</td>
						<td class="valorDespesa">123.45</td>
						<td class="dataDespesa">01/01/2017</td>
						<td><a href="#"
							class=" btn-floating btn-medium waves-effect waves-light blue botaoEditaDespesa">
								<i class="material-icons">edit</i>
						</a></td>
						<td><a href="#"
							class=" btn-floating btn-medium waves-effect waves-light pink botaoExcluiDespesa">
								<i class="material-icons">delete</i>
						</a></td>
					</tr>
				</tbody>
			</table>
			<a href="#"
				class=" btn-floating btn-medium waves-effect waves-light red" id="botaoAdicionaDespesa" title="Adiciona nova despesa"> <i
				class="material-icons">add</i>
			</a>
			<form method="POST" class="row escondido" id="formInclusaoDespesa">
				<fieldset class="col s4">
					<div class="input-field">
						<label for="descricaoNovaDespesa">Descrição</label> <input
							type="text" name="descricaoNovaDespesa" id="descricaoNovaDespesa" />
					</div>
					<div class="input-field">
						<label for="valorNovaDespesa">Valor</label> <input type="text"
							name="valorNovaDespesa" id="valorNovaDespesa" />
					</div>
					<div class="input-field">
						<label for="dataNovaDespesa">Data</label> <input type="text"
							name="dataNovaDespesa" id="dataNovaDespesa" />
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
	<script type="text/javascript" src="js/jquery-ui.js"></script>
	<script type="text/javascript" src="js/planilha-gastos.js"></script>
	<script type="text/javascript" src="js/util.js"></script>
</body>
</html>