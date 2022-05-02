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

// Diabetes algorithm
$("#calc-diabetes").click(function() {
    // Setting diabetes thesholds
    var dGlucose = 126;
    var dHbA1C = 48;
    // Calculating diabetes risk
    var glucose = $("#glucose").val();
    var HbA1C = $("#HbA1C").val();
    var symptoms = $("#symptoms").is(":checked");
    
    if (glucose > dGlucose && HbA1C > dHbA1C) {
        alert("YOU HAVE DIABETES");
    } else if (glucose > dGlucose) {
        if (symptoms) {
            alert("YOU HAVE DIABETES");
        } else {
            alert("CHECK AGAIN IN 3-6 MONTHS");
        }
    } else {
        alert("CHECK AGAIN IN 3-6 MONTHS");
    }
    
});

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.0967, lng: -117.7198 },
    zoom: 14,
  });
}

window.initMap = initMap;

// Cookies
Cookies.set('name', 'value');
console.log(Cookies.get());