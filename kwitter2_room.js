
 var firebaseConfig = {
      apiKey: "AIzaSyB-v0K2LbVOXAaKMzaSS2UI1m-U9rNclfc",
      authDomain: "kwitter-4645f.firebaseapp.com",
      databaseURL: "https://kwitter-4645f-default-rtdb.firebaseio.com",
      projectId: "kwitter-4645f",
      storageBucket: "kwitter-4645f.appspot.com",
      messagingSenderId: "404991373121",
      appId: "1:404991373121:web:af70d9c1657959a4fafbc0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function addRoom()
    {
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
    });
    
    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter3_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div>"
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) 
      { console.log(name);
       localStorage.setItem("room_name", name);
        window.location = "kwitter3_page.html";
       }




function logout() 
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index1.html";
}