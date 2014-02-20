(function ($) {
  Drupal.behaviors.media_preview_sizer = {
    attach: function(context, settings) {

      //add in slider support for image sizing in the library

      //find the exposed filters and add the slider inline with them
       $(".media-browser-wrapper .views-exposed-form .views-exposed-widgets").append("<div class='views-exposed-widget slide-widget'><label>Image Size</label><div id='slide-image'></div></div>")
      
       //using a preset image style with a max width of 300, set the minimum and starting value
       $('#slide-image').slider({
           value: 200,
           min: 100,
           max: 300,
             step: 2,

            //when the slider moves, resize the image according to the px amo
         slide: function(event, ui) {
            $('#media-browser-library-list li').css('width', ui.value + 'px');
        }
    });
 
    }
  };
}(jQuery));