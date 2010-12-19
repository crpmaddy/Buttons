require(['js/vendor/less-1.0.35.min.js',
             'http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js'], function() {

  require(['http://ajax.microsoft.com/ajax/jquery.validate/1.7/jquery.validate.min.js',
               'https://github.com/jquery/jquery-metadata/raw/master/jquery.metadata.js',
               'js/jquery.asmform.js',
               'js/jquery.log.js'], function() {
    require.ready(function() {
        $('#asmform').asmform();
//        less.env = "development";
//        less.watch();
     });
   });
});
