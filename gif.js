$(document).ready(function () {
    var topics = ['the talking heads', 'blondie', 'marvin gaye', 'neil young', 'johnny cash', 'black sabbath'];




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


    //on click
    $(document).on('click', '.expression', function () {

        var car = $(this).html();
        console.log(car);

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({ url: queryURL, method: 'GET' })
            .done(function (response) {

                var results = response.data;

                $('#expressView').empty();

                for (var j = 0; j < results.length; j++) {
                    var imageDiv = $('<div>');
                    var imageView = results[j].images.fixed_height.url;
                    var still = results[j].images.fixed_height_still.url;

                    var expressImage = $('<img>').attr("src", still).attr('data-animate', imageView).attr('data-still', still);
                    expressImage.attr('data-state', 'still');
                    $('#expressView').prepend(expressImage);
                    expressImage.on('click', playGif);



                }
            });

        function playGif() {
            var state = $(this).attr('data-state');
            console.log(state);
            if (state == 'still') {
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');
            } else {
                $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
            }

        }

    })




    //adding new button
    $(document).on('click', '#addExpress', function () {
        if ($('#express-input').val().trim() == '') {
            alert('please add car');
        }
        else {
            var car = $('#express-input').val().trim();
            topics.push(car);
            $('#express-input').val('');
            buttonExpress();
            return false;

        }

    });



}); 