$(".checked").on("click", function(){
      var orgValue = $(this).attr("name")

      $(this).val(orgValue);
})
$("#add-btn").on("click", function(event){
    event.preventDefault(); 
    var orgInfo = {
        Name: $("#name").val().trim(),
        Email: $("#email").val().trim(),
        Phone: $("#phone").val().trim(),
        url: $("#url").val().trim(),
        Description: $("#description").val().trim(),
        Days: $("#days").val().trim(),
        Address: $("#address").val().trim(),
        Food: $("#food").val().trim(),
        Shelter: $("#shelter").val().trim(),
        Daycare: $("#daycare").val().trim(),
        Mental_Health: $("#health").val().trim(),
     }
     console.log(orgInfo)

     $.ajax({
         url: "/api/org",
         method: "POST",
          data : orgInfo
     }).then(function(data){
         location.reload();
     })
     
 })


