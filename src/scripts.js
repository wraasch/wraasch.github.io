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