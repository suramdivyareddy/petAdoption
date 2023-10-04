var firebaseConfig = {
    apiKey: "AIzaSyDs50JTB3n0R18wU52he-Qfi8nOi9UKQDo",
    authDomain: "pet-adoption-d821b.firebaseapp.com",
    projectId: "pet-adoption-d821b",
    storageBucket: "pet-adoption-d821b.appspot.com",
    messagingSenderId: "832022980370",
    appId: "1:832022980370:web:77de4d0a7c3940965135cb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // Reference messages collection
 var messagesRef = firebase.database().ref('messages');

 // Listen for form submit
 document.getElementById('contactForm').addEventListener('submit', submitForm);
 
 // Submit form
 function submitForm(e){
   e.preventDefault();
 
   // Get values
   var firstname = getInputVal('firstname');
   var lastname = getInputVal('lastname');
   var state = getInputVal('state');
   var zipcode = getInputVal('zipcode');
   
   // Save message
   saveMessage(firstname,lastname,state,zipcode);
 
   // Show alert
   document.querySelector('.alert').style.display = 'none';

   promise.catch(e=>alert(e.message));
alert("Details submitted succesfully");
 
   // Hide alert after 3 seconds
   setTimeout(function(){
     document.querySelector('.alert').style.display = 'none';
   },3000);
 
   // Clear form
   document.getElementById('contactForm').reset();
 }
 
 // Function to get get form values
 function getInputVal(id){
   return document.getElementById(id).value;
 }
 
 // Save message to firebase
 function saveMessage(firstname,lastname,state,zipcode){
   var newMessageRef = messagesRef.push();
   newMessageRef.set({
     firstname: firstname,
     lastname: lastname,
     state: state,
     zipcode: zipcode
   });
 }
 
 
 