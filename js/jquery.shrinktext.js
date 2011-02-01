/**
*
 */
(function($) {
    $.fn.shrinktext = function(options)
    {
        var settings = {
            minFontValue: 10,
            maxFontValue: 14,
            units: 'pt'
        };

        return this.each(function() {
            $.extend(settings, options);
            
            $(this).keyup(function() {
                var $el      = $(this),
                numChars = $el.val().length,
                newFontSize;
  
                if (numChars > 14) {
                    newFontSize = 34 - numChars;
                    if (newFontSize < settings.minFontValue) { 
                        newFontSize = settings.minFontValue; 
                    }
                    else if (newFontSize > settings.maxFontValue) { 
                        newFontSize = settings.maxFontValue; 
                    }
                    $el.css("font-size",  newFontSize + settings.units);
                } else {
                    $el.css("font-size", settings.maxFontValue + settings.units);
                }
            });
        });
    };
})(jQuery);
