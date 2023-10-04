// Your web app's Firebase configuration
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
  const auth=firebase.auth();

  function signUp()
  {
    var firstname=document.getElementById("firstname").value;
    var lastname=document.getElementById("lastname").value;
    var state=document.getElementById("state").value;
    var zipcode=document.getElementById("zipcode").value; 
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var confirmpassword=document.getElementById("confirmpassword").value;
    const promise=auth.createUserWithEmailAndPassword(email,password);
    promise.catch(e=>alert(e.message));
    alert("Signed Up");
    var clr=document.getElementById('clear');
clr.reset();
    var id=firebase.auth().currentUser.uid;
    firebase.database().ref('Users/'+id).set({
     FirstName:firstname,
     LastName:lastname,
     State:state,
     Zipcode:zipcode,
    });
  }
  function login()
  {
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
   // const promise=auth.signInWithEmailAndPassword(email,password);
    //firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

   //var errorCode = error.code;
    //console.log(error.Message);

  // promise.catch(e=>alert(e.message));
//alert("Logged In " + email + " succesfully");
//firebase.auth().onAuthStateChanged(user => {
 // if(user) {
  //  window.location = 'index.html'; 
//  }
//});
if(email=="plm@gmail.com" && password=="plmplmplm")
    {
      alert("Logged in " + email + " successfully");
      window.location.href="index.html";
    }
    else if(email=="abc@gmail.com" && password=="123456")
    {  
  alert ("Logged in " + email + " successfully");
  window.location.href="index.html";
    }
    else{
      alert("Invalid Email or password");
    }
 
    }
function signOut()
{
auth.signOut();
alert("Logged out successfully ");
window.location.href="home.html";
}
  
   