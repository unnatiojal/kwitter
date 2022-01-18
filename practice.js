const firebaseConfig = {
    apiKey: "AIzaSyD74cb4fUf7NbHoxfKvbp34fm-cVHXEVdA",
    authDomain: "kwitter-e820d.firebaseapp.com",
    databaseURL: "https://kwitter-e820d-default-rtdb.firebaseio.com",
    projectId: "kwitter-e820d",
    storageBucket: "kwitter-e820d.appspot.com",
    messagingSenderId: "1074837849460",
    appId: "1:1074837849460:web:c6ab47ebba15a357be9821"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  
  function adduser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purose:"addinguser"});
    
  }
  
//ADD YOUR FIREBASE LINKS