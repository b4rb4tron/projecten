
<?php 
$home = opendir("../nieuws");
while (  ( $list = readdir($home)) !== FALSE   ){
echo ($list)." ";
}
?>
