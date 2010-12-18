require(['http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js',
             'http://ajax.microsoft.com/ajax/jquery.validate/1.7/jquery.validate.min.js',
             'http://github.com/jquery/jquery-metadata/raw/master/jquery.metadata.js',
             'js/jquery.asmform.js',
             'js/jquery.log.js'], function() {
    require.ready(function() {
        $('#asmform').asmform();
    });
});
