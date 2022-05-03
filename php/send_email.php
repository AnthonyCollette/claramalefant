<?php
     if (isset($_POST['submit'])) {
        $name = $_REQUEST['name'];
        $email = $_REQUEST['email'];
        $message = $_REQUEST['message'];

      // Set your email address where you want to receive emails. 
       $to = '100pour100inde@gmail.com';
       $subject = $_REQUEST['object'];
       $headers = "From: ".$name." <".$email."> \r\n";
       $send_email = mail($to,$subject,$message,$headers);

  }?>