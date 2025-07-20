<?php

require_once "Autoload.php";

$pagina = $_SERVER['REQUEST_URI'];

Template::header($pagina);

Template::main($pagina);

Template::footer();
 