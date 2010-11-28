/**
 * - Provide a mechanism for hitting a backend via ajax to get status
 * - Add a spinner while checking
 * - Provide some fanciness for password fields such as auto-gen
 * - Provide some autogen for usernames, maybe tab-complete to use it
 * - Enforce tab-index? (or leave it to the browser/dev)
 */

(function($) {
   var opts;
   $.fn.asmform = function(options)
   {
     return this.each(function()
     {
       // Select the first input field
       $(this).find('input')[0].select();
       $(this).validate();
     });
   };
 })(jQuery);

$.fn.asmform.defaults =
{

};