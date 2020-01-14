
"use strict";

$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
	
	
   Email.send({
    		SecureToken : "b7d50d13-909d-40eb-bf79-b7fc7d1a7369",
    		  To : 'anthonydaetcarreon@gmail.com', 
    		From : 'anthonydaetcarreon@gmail.com',
    		Subject : "MESSAGE FROM PORTFOLIO",
    		Body :"<b>FROM - </b>" + email + "<br>" + "<b>NAME - </b>" + name  +  "<br><br>"+"<b>MESSAGE - </b>" + message + "<br><br><br><br>"
		}).then(function(message){
				if (message == "OK"){
                			formSuccess();
					formReplyMessage(name,email);
            			} else {
                			formError();
                			submitMSG(false,message);
            			}
			});
	
   
 	
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h5 fadeIn animated text-success";
    } else {
        var msgClasses = "h5 text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

function formReplyMessage(rname,remail){
    // Initiate Variables With Form Content
    var name = rname;
    var email = remail;
	
   Email.send({
    		SecureToken : "b7d50d13-909d-40eb-bf79-b7fc7d1a7369",
    		  To : email , 
    		From : 'anthonydaetcarreon@gmail.com',
    		Subject : "www.anthonycarreon.com",
    		Body :"Greetings," + "<br><br>" + "Hello " + name  +  "!<br><br>"+"Thanks for reaching me out! <br>I'll get back to you within 48 hours.<br><br>If your inquiry can't wait, you can also reach me via chat on www.facebook.com/Eycee01 or call me. <br>09092148659-Smart<br>09159394927-Globe<br><br>Best regards,<br>Anthony Carreon<br>www.anthonycarreon.com" + "<br><br><br><br>"
		}).then(function(message){
			});
}
