<?php 
echo "hoi" . "<br>";
if(isset($_POST['email'])){
    $to = "roger@snoeivanhout.nl"; // this is your Email address
    echo $to . "<br>";
    $from = $_POST['email']; // this is the sender's Email address
    echo $from . "<br>";
    $name = $_POST['naam'];
    echo $name. "<br>";
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['bericht'];
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['bericht'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you ";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>