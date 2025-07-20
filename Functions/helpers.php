<?php 

class helpers
{
    static function dd($var)
    {
        echo '<pre>';
        print_r($var);
        echo '</pre>';
        exit;
    }
}