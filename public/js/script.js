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
         url: "/api/burgers",
         method: "POST",
          data : newBurger
     }).then(function(data){
         location.reload();
     })
     
 })



 $(".eatburger").on("click", function(){
     var id= $(this).attr("data-id")
     
     $.ajax({
         url: "/api/burgers/"+ id,
         method: "PUT"

     }).then(function(data){
         location.reload();
     })


 })
