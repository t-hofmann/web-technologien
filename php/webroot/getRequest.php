<?php

//var_dump($_GET);

foreach ($_GET as $k => $v) {
    echo $k . " = " . $v . "<br>\n";
}

echo $_GET['name'];

?>
