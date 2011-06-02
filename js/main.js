require(['js/vendor/less-1.0.35.min.js',
         'js/vendor/jquery-1.5.min.js'], function() {
  require(['js/vendor/jquery.validate.min.js',
           'js/vendor/jquery.metadata.js',
           'js/vendor/jquery.ba-resize.min.js',
           'js/jquery.asmform.js',
           'js/jquery.shrinktext.js',
           'js/jquery.log.js',
	   'js/vendor/html5.js'], function() {
    require.ready(function() {
        $('#asmform').asmform();

        $('input[type=text]').shrinktext();

        less.env = "development";
        less.watch();
     });
   });
});
