
<?php 
$home = opendir("../images/slider/");
while (  ( $list = readdir($home)) !== FALSE   ){
echo ($list)."+++";
}
?>
