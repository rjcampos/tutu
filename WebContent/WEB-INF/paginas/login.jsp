<!DOCTYPE html>
<html>
<head>
<title>Login</title>
<meta charset="utf-8" />
<link rel="stylesheet" href="css/reset.css" />
<!--Import Google Icon Font-->
<link href="http://fonts.googleapis.com/icon?family=Material+Icons"
	rel="stylesheet" />
<!--Import materialize.css-->
<link type="text/css" rel="stylesheet" href="css/materialize.min.css"
	media="screen,projection" />
<link type="text/css" rel="stylesheet" href="css/estilos.css" />
</head>

<body>
	<header> </header>
	<main>
	<div class="container section">
		<h3 class="flow-text center-align">Insira seu login e senha:</h3>
		<div class="row">
			<div class="col s6 offset-s3">
				<form method="POST">
					<fieldset>
						<div class="input-field">
							<label for="login">Login</label> <input type="text" name="login"
								id="login" />
						</div>
						<div class="input-field">
							<label for="senha">Senha</label> <input type="password"
								name="senha" id="senha" />
						</div>
						<input type="submit" value="Entrar" />
					</fieldset>
				</form>
			</div>
		</div>
	</div>
	</main>
	<footer class="page-footer">
		<div class="container">
			<p>Feito por: Raimundo Campos - Todos os direitos reservados</p>
		</div>
	</footer>
	<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="js/materialize.min.js"></script>
</body>
</html>