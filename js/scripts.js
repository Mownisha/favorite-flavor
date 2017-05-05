$(document).ready(function() {
  $("h2").click(function(event) {
    event.preventDefault();
    var flavors = ["chocolate", "Pista", "Vanilla", "almond"];

    flavors.forEach(function(flavor) {
     $("ul").append("<li>" + flavor + "</li>");
    });
  });
});
