$(document).ready(function() {
    $.ajax({
        url: 'http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js',
        dataType: 'json',
        success: function(data){
            console.log(data)
        },
        error: function(err){
            console.log('error: ', err)
            $('.products').append(
                '<h3>Error</h3>',
                '<p>Sorry, something went wrong while processing your request.</p>',
                '<p>Please try again later.</p>'
                ).show('slow')
        }
    }).done(function(data){
      console.log('im done')
    })
  })