
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAItjTRPsyjVYNQWjeH5sJ0ka6XZYSuaI8",
    authDomain: "kwitter-fda10.firebaseapp.com",
    databaseURL:"https://kwitter-fda10-default-rtdb.firebaseio.com/",
    projectId: "kwitter-fda10",
    storageBucket: "kwitter-fda10.appspot.com",
    messagingSenderId: "530317642602",
    appId: "1:530317642602:web:f7c412bd217e96abd5b313",
    measurementId: "G-LBSS2T8HT7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({

        purpose:"adding user"
    })
    }