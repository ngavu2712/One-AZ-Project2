var firebaseConfig = { 
    apiKey: "AIzaSyBwhvrEwCgQZX57BSmx9qJWYe4sqLRJ-hE", 
    authDomain: "azone-86fa8.firebaseapp.com", 
    databaseURL: "https://azone-86fa8.firebaseio.com", 
    projectId: "azone-86fa8" 
  }; 

  // Initialize Firebase 
  firebase.initializeApp(firebaseConfig); 


  //make and store firestore references 
  const auth = firebase.auth(); 
  const db = firebase.firestore(); 
  db.settings({timestampsInSnapshots: true}) 


$("#add-btn").on("click", function(event){
    event.preventDefault(); 
    var orgInfo = {
        Name: $("#name").val().trim(),
        Email: $("#email").val().trim(),
        Phone: $("#phone").val().trim(),
        url: $("#url").val().trim(),
        Descriptions: $("#description").val().trim(),
        Days: $("#days").val().trim(),
        Address: $("#address").val().trim(),
        Food: $("#food").val().trim(),
        Shelter: $("#shelter").val().trim(),
        Daycare: $("#daycare").val().trim(),
        Mental_Health: $("#health").val().trim(),
     }
     

     $.ajax({
         url: "/api/orgs",
         method: "POST",
          data : orgInfo
     }).then(function(data){
         location.reload();
     })
     
 })


