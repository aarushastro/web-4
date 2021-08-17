var firebaseConfig = {
    apiKey: "AIzaSyDbCGutNKeArg65y1N7i7mrpOcMysbpn74",
    authDomain: "tictactoe-75558.firebaseapp.com",
    databaseURL: "https://tictactoe-75558-default-rtdb.firebaseio.com",
    projectId: "tictactoe-75558",
    storageBucket: "tictactoe-75558.appspot.com",
    messagingSenderId: "744118850063",
    appId: "1:744118850063:web:0725c884b31e9fe82e897a",
    measurementId: "G-BB22DBNWFY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function addUser()
  {
  user_name = document.getElementById("username").value;
  firebase.database().ref("/").child(user_name).update({
  purpose : "adding user"
  });
  }