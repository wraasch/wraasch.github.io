// Add scripts here
// When the success-alert id (hashtag) is clicked
$("#success-alert").click(function() {
    // Do something
    alert("Hello! I am an alert box!!");
});

// Listener for the class (period) for click-here-to-show
$(".click-here-to-toggle").click(function() {
    // Do something
    if (confirm("Are you sure you want to toggle the menu items?") == true) {
        $("#menu-items").show();
      } else {
        alert("Oops!");
      }
});