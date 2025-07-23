<?php

require_once __DIR__ . '/../../Autoload.php';

class template
{
    static function header($conteudo)
    {
        $cont = 0;

        if ($conteudo == "/")
        {
            $conteudo = "home";
            $cont = 1;
        }

        $html = __DIR__ . DIRECTORY_SEPARATOR . "header.php";

        // helpers::dd($html);
        if (file_exists($html)) {

            $html = file_get_contents($html);

            switch ($cont){

                case 1:
                    $html = str_replace('/@CONTEUDO@', "/".$conteudo, $html);
                    $conteudo = str_replace('/', '', $conteudo);
                    $html = str_replace('@TITULO@', 'Home', $html);
                    break;

                default:
                    $html = str_replace('/@CONTEUDO@', "/".$conteudo, $html);
                    $conteudo = str_replace('/', '', $conteudo);
                    $html = str_replace('@TITULO@', $conteudo, $html);

                    $limpa = "<div class='header-02'>
            <nav>
                <ul>
                    <li><a href='#Lukas'>Lukas</a></li>
                    <li><a href='#Grack '>Grack</a></li>
                    <li><a href='#Fantasma'>Fantasma</a></li>
                </ul>
            </nav>
        </div>";
                    $html = str_replace($limpa, "", $html);
                    break;
            }

            echo $html;

        } else {
            echo "Deu ruim zé";
        }
    }

    static function main($conteudo)
    {
        if ($conteudo == "/")
        {
            $conteudo = "home";
        }

        $limpa = 'Views' . DIRECTORY_SEPARATOR . 'Templates' . DIRECTORY_SEPARATOR;

        for ($i = 1; $i <= 8; $i++)
        {

            $arquivo = __DIR__ . DIRECTORY_SEPARATOR . "Modulos" . DIRECTORY_SEPARATOR .
                "Atividade_" . $i . DIRECTORY_SEPARATOR . $conteudo . ".php";


            $arquivo = str_replace($limpa, '', $arquivo);
            if (file_exists($arquivo))
            {
                $html = file_get_contents($arquivo);
                $i += 8;
            } else {
                $html = "Deu ruim Zé";
            }

        }

        echo $html;

    }

    static function footer()
    {
        $html = __DIR__ . DIRECTORY_SEPARATOR . "footer.php";

        if (file_exists($html))
        {
            $html = file_get_contents($html);

            echo $html;
        } else {
            echo "Deu ruim zé";
        }
    }
}
