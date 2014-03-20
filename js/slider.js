(function ($) {
    Drupal.behaviors.media_preview_sizer = {
        attach: function (context, settings) {

            //add in slider support for image sizing in the library

            //find the exposed filters and add the slider inline with them
            $(".media-browser-wrapper .views-exposed-form .views-exposed-widgets").once('media_preview_sizer').append("<div class='views-exposed-widget slide-widget'><label>Image Size</label><div class='slide-image'></div></div>");


            var valued = (!localStorage.getItem("slideWidth")) ? 200 : localStorage.getItem("slideWidth");

            //set a default CSS size for the list items
            $('#media-browser-library-list li').css('width', localStorage.getItem('slideWidth') + 'px');

            //using a preset image style with a max width of 300, set the minimum and starting value
            $('.slide-image').once('media_preview_sizer').slider({
                value: valued,
                min: 100,
                max: 300,
                step: 2,

                //when the slider moves, resize the image according to the px amount
                slide: function (event, ui) {
                    //store value in localstorage
                    localStorage.setItem('slideWidth', ui.value);
                    $('#media-browser-library-list li').css('width', localStorage.getItem('slideWidth') + 'px');


                }




            });

        }
    };
}(jQuery));
