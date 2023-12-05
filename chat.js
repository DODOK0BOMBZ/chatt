
const firebaseConfig = {
    apiKey: "AIzaSyCGt0mACQfCmPJ8mS7jeJgPZmVoBU9zeYg",
    authDomain: "fnaf-5b0c0.firebaseapp.com",
    projectId: "fnaf-5b0c0",
    storageBucket: "fnaf-5b0c0.appspot.com",
    messagingSenderId: "332311699511",
    appId: "1:332311699511:web:7efb89b09098ffb9149fb2"
  };
  


// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



