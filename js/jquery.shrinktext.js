/**
 */

(function($) {
   var opts;
   $.fn.shrinktext = function(options)
   {
     return this.each(function()
     {
         $(this).resize(function() {
             console.log($(this).width() + "\t" + $(this).css('min-width'));

             if($(this).width() <= $(this).css('min-width'))
                 console.log('min');
         });
     });
   };
 })(jQuery);

$.fn.shrinktext.defaults =
{
    
};
