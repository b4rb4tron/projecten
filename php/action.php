
<?php 
$home = opendir("./");
while (  ( $list = readdir($home)) !== FALSE   ){
    header('Content-Type: application/json');
echo ($list)." ";
}
?>
