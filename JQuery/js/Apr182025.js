$(document).ready(function() {
    $('#btn1').click(function() {
        $('#b1').animate({
            left: '250px',
            fontSize: '24px',
            color: 'white',         // requires jQuery UI
            backgroundColor: 'red', // requires jQuery UI
            borderWidth: '4px',     // works
            borderColor: 'black'    // requires jQuery UI
        },6000);              
        $('#b2').animate(
            {
                left: '450px'
        },2000);        
        $('#b3')
        .animate({
            left: '650px'
        },4000)
        .slideUp(2000)
        .slideDown(2000);        
    });
    $('#goBtn').click(function () {
        let name = $('#name').val();
        $('#b1').text(name);
    });
});