function getData()
{
  firebase.database().ref("/").on('value', function (snapshot)
  {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
    {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Nome da sala: " + Room_names);

      row = "<div class'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+
      Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
  }
  getData();