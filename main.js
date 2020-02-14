// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyB5CElK2YLw2vBXZ93G5rHMGgiKVnllHXc",
    authDomain: "contact-form-21a2c.firebaseapp.com",
    databaseURL: "https://contact-form-21a2c.firebaseio.com",
    projectId: "contact-form-21a2c",
    storageBucket: "contact-form-21a2c.appspot.com",
    messagingSenderId: "979891949992",
    appId: "1:979891949992:web:179b39f7825313540b4d9d",
    measurementId: "G-R80HFCWRT4"
  };
  
  firebase.initializeApp(config);

//Reference messages collection
		var messagesRef = firebase.database().ref("messages")

 
// Listen for form submit 
		document.getElementById('contact-form').addEventListener('submit', submitForm);


// submit form 
		function submitForm(e){
			e.preventDefault();
			
	
//Get values

	 	var name = getInputVal('name');
	 	var email = getInputVal('email');
	 	var phone = getInputVal('phone');
	 	var message = getInputVal('message');

// Save message 	
         saveMessage(name, email, phone, message);
         
         //Show alert
         document.querySelector('.alert').style.display = 'block';

         //Hide alert after 3 seconds
         setTimeout(function(){
            document.querySelector('.alert').style.display = 'none';
         },3000);

         //Clear form
         document.getElementById('contact-form').reset();

//Function to get form values
		function getInputVal(id){
			return document.getElementById(id).value;

	}


// Save message to firebase
		function saveMessage(name, email, phone, message){
			var newMessageRef = messagesRef.push();
			newMessageRef.set({
				name: name,
				email: email,
				phone: phone,
				message:message

			});
		 }

         //recaptcha function
		 document.getElementById("submit").disabled = true;
		 function enableBtn(){
			document.getElementById("submit").disabled = false;
		   }
        }
         
         
         
         
         
         
         
         
         
         
         
         
         
        