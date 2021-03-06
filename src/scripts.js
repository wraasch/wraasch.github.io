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

// JAVASCRIPT DATABASE TO TABLES.HTML TABLE
// Creating array of objects
var information = [{'name': 'Jane Doe', 'phone': '555-444-3333', 'position': 'Patient', 'rank': 5},
                    {'name': 'John Doe', 'phone': '555-667-7474', 'position': 'Provider', 'rank': 3},
                    {'name': 'Jose Doe', 'phone': '555-223-3232', 'position': 'Payer', 'rank': 1},
                    {'name': 'Juan Doe', 'phone': '555-989-1212', 'position': 'Producer', 'rank': 2},
                    {'name': 'Will Raasch', 'phone': '202-253-7251', 'position': 'Teacher', 'rank': 6}
                    ];

// Sorting array by rank order
information.sort((a,b) => b.rank - a.rank);

// Filling in data table rows
information.forEach(function (item, index) {
  $('#data-table tr:last').after('<tr><td>' + item['name'] + '</td><td>' + item['phone'] + '</td><td>' + item['position'] + '</td><td>' + item['rank'] + '</td></tr>');
});

// COOKIES
// When a user submits the profile creation form, set a cookie
$('#submit-input').click(function () {
    // Set profile info from inputs
    var userName = $('#name-input').val();
    var phone = $('#phone-input').val();
    var email = $('#email-input').val();
    // Create profile cookie
    Cookies.set('userName', userName);
    Cookies.set('phone', phone);
    Cookies.set('email', email);
    // Reload page so that cookie can take effect
    location.reload();
});
// If there is a cookie, show welcome message
var userName = Cookies.get('userName');
if (userName) {
    // Hide new user input form
    $('#new-user-input').hide();
    // Show welcome message
    $('#welcome-text').text('Welcome, ' + userName);
}

// Show Claremont map only when the Claremont button is clicked
$('#show-claremont').click(function () {
    $('#claremont').show();
});

// GOOGLE MAPS JS
let map;
// Map parameters
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.0967, lng: -117.7198 },
    zoom: 14,
  });
}

window.initMap = initMap;

// Chat box JS
$('#send-message').click(function () {
    // Get message from input box
    var message = $('#chat-message').val();
    var messageHTML = '<p class="chat-messages">' + message + '</p>';
    // Append formatted HTML of message to the chat box
    $('.chat-box').append(messageHTML);
});