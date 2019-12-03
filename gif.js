$(document).ready(function () {
    var topics = ['cadillac', 'audi', 'jaguar', 'lamborghini', 'ferrari', 'rolls royce', 'mustang', 'dodge-challenger'];

    // ========================================================

    //  create topics array buttons
    function buttonExpress() {
        $('#buttonsView').empty();

        for (var i = 0; i < topics.length; i++) {
            //create all buttons
            var a = $('<button>');
            a.addClass('expression');
            a.attr('data-name', topics[i]);
            a.text(topics[i]);
            $('#buttonsView').append(a);
        }
    }
    buttonExpress();
    $(document).on('click', '.expression', function () {

        var car = $(this).html();
        console.log(car);