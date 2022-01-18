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
  firebase.database().ref("/").child(user_name).update({purose:"adding user"});
  
}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();

function addroom() {
  Room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
  localStorage.setItem("Room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() { 
  firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { 
      childKey = childSnapshot.key; 
      Room_names = childKey; 
      console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row; 
    }); 
  }); 
} 
getData(); 

function redirectToRoomName(name) { 
  console.log(name); 
  localStorage.setItem("room_name", name); 
  window.location = "kwitter_page.html"; 
} 

