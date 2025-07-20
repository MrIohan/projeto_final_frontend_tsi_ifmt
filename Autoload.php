<?php

spl_autoload_register(function ($classe)
{
     $diretorios = [
        'Functions',
        'Views'.DIRECTORY_SEPARATOR.'Templates'
    ];

    foreach($diretorios as $diretorio):
        $arquivo = __DIR__.DIRECTORY_SEPARATOR.$diretorio.DIRECTORY_SEPARATOR.$classe.".php";
        if(file_exists($arquivo)):
            require_once ($arquivo);
        endif;
    endforeach;
});



