<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://javiercaliz.github.io/CalendarCode/style.css">
    

    <link rel="icon" type="image/x-icon" href="img/pulse.png">
    <title>Programación Desde Cero</title>
  </head>
  <body>

<!-- As a heading -->
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="img/marca-egg-+-arg-programa.png" alt="" height="50" class="d-inline-block align-text-top">
    </a>
  </div>
</nav>

<div class="header">
<div class="center">
	
    <h2>¿Cuándo finaliza el curso?</h2>
    <h4>Ingresa la fecha de camada</h4>
  </div>
</div>

<div class="container mt-3 mb-4 justify-content-center " style="width: 400px;">
  <input class="form-control" type="date" name="calendario" id="fechaIngreso" onkeypress="Javascript: if (event.keyCode==13) ingresarFecha();">            
</div>
	  
	  <div style="display: flex; justify-content: center;">
  <label class="form-check-label" for="flexSwitchCheckDefault" style="margin-right: 10px;"><b>COMISIÓN TARDE</label>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" state="tarde"
      onclick="cambiarTurno()" />
    <label class="form-check-label" for="flexSwitchCheckDefault">COMISIÓN NOCHE</b></label>
  </div>
</div>

<div class="container mt-4 mb-4 d-flex justify-content-center">
  <button type="button" onclick="ingresarFecha()" class="btn btn-moodle" id="calcular">Calcular</button>
</div>
    
    <div id="liveAlertPlaceholder"></div>

<div class="container pt-5 d-flex justify-content-center" id="informe">
  
</div>   
    
<div class="textoFinal text-center container mt-5 d-flex justify-content-center" id="estado"></div>   
<div class="textoFinal text-center container mt-5 d-flex justify-content-center" id="informeResumido">
 
</div>
<span id="dateFinal" class="shadow-4 fechaFinal text-center container mb-5 d-flex justify-content-center"></span>

<div class="prueba">
  <div class="center">
  <h3>¿No recuerdas dónde buscar la fecha de camada?</h3>
  <h3 class="h3Light">¡PUEDES VERLO EN EL AULA VIRTUAL!</h3>
  <div class="lista">
  <ul class="list-group">
    <li class="list-group-item">1. Ve a participantes y entra al perfil que quieras revisar</li>
    <li class="list-group-item gris">2. Haz click en el engranaje que está arriba a la derecha </li>
    <li class="list-group-item">3. Allí podemos ver el campo "Camada" que debemos ingresar aquí</li>
  </ul>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/fekfcS0UhEE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
    
    <script src="https://javiercaliz.github.io/CalendarCode/commonScriptArgPro.js" type="text/javascript"></script>
		<script src="https://javiercaliz.github.io/CalendarCode/redAP_PDCScript.js" type="text/javascript"></script> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </body>
</html>