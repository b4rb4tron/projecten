
<?php 
$home = opendir("./jpg");
while (  ( $list = readdir($home)) !== FALSE   ){
echo ($list)." ";
}
?>
