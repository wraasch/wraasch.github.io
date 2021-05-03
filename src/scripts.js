// Drug button
$('#show-pill-image').click(function(){
    $('.text-title').css('color', 'red');
    $('.drugs-image').toggle();
});

// Diabetes algorithm
$('#diabetes-algorithm').click(function(){
    // CONSTANTS
    var dGlucose = 126;
    var dHbA1C = 48;
    // INPUTS
    var glucose = $('#glucose').val();
    var hba1c = $('#hba1c').val();
    if ($('#symptoms').is(':checked')) {
        var symptoms = true;
    } else {
        var symptoms = false;
    }
    // ALGORITHM
    if (glucose > dGlucose && hba1c > dHbA1C) {
        $('.diabetes-confirmed').show();
    } else if (glucose > dGlucose) {
        if (symptoms) {
            $('.diabetes-confirmed').show();
        } else {
            $('.diabetes-revisit').show();
        }
    } else {
        $('.diabetes-no').show();
    }
});

// Profile Cookies
$("#profile-submit").click(function() {
    console.log('PROFILE SUBMIT');
    Cookies.set("test", "will");
    // Create dictionary for profile info
    var profileInfo = {};
    // Set key-value pairs for each profile attribute
    profileInfo["name"] = $("#name").val();
    profileInfo["profilePic"] = $("#pic").val();
    profileInfo["role"] = $("#role").val();
    // Create empty diseases list
    var diseases = [];
    // Find checked checkboxes
    $("input[type='checkbox']:checked").each(function() {
      // Get ID of checked button and add to diseases list
      diseases.push($(this).attr("id"));
    });
    profileInfo["diseases"] = diseases;
    // Save profile dictionary as a cookie
    Cookies.set("profile", profileInfo);
  });
  // If profile cookie exists, show profile page
  if (Cookies.get("profile")) {
    var profileDataFromCookie = Cookies.get("profile");
    // You need to parse dictionaries
    var profileInfo = JSON.parse(profileDataFromCookie);
    // Add profile info into HTML
    $("#insert-profile-name").text(profileInfo["name"]);
    $("#insert-profile-role").text(profileInfo["role"]);
    $("#insert-profile-pic").attr("src", profileInfo["profilePic"]);
    var diseaseHTML = "";
    // Iterate through diseases list and add to html
    profileInfo["diseases"].forEach(function(item) {
      diseaseHTML += "<p class='disease-text'>" + item + "</p>";
    });
    $("#insert-profile-disease").html(diseaseHTML);
    // Show profile HTML, and hide form
    $(".personal-profile").show();
    $(".anonymous-profile").hide();
  }