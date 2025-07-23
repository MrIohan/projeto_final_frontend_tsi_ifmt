<?php

define('BASE_URL', 'https://contos-antigos.onrender.com');

require_once "Autoload.php";

$pagina = $_SERVER['REQUEST_URI'];

Template::header($pagina);

Template::main($pagina);

Template::footer();
 