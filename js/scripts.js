$(document).ready(function() {

  $("#blank form").submit(function(event) {
    var nameInput = $("input#name").val();

    $("#nameOutput").text(nameInput);

    $("#result").show();

    event.preventDefault();
  });
});
