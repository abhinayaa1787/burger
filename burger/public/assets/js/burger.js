$(function() {
  $("#submitBtn").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured:0
    };
    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Added new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
  
});
$(".devour").on("click", function(event) {
  var id = $(this).data("id");
  var newDevored = {
    devoured: 1
  };

var burgerDevoured=$(this).closest('div').parent();
// find(".burgerName");
console.log(burgerDevoured);
$(this).remove();

burgerDevoured.remove();
$("#devoured").append(burgerDevoured);
  // Send the PUT request.
  $.ajax("/api/burger/" + id, {
    type: "PUT",
    data: newDevored
  }).then(
    function() {
      console.log("changed sleep to", newDevored);
      // Reload the page to get the updated list
      // location.reload();
    }
  );
});


});