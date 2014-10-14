 jQuery(document).ready(function($) {
  $("sb-toggle-right").click(function(event) {

    console.log("clicked");
  });



       //############################
       //UItoTOP
       //##########################
      $().UItoTop({ easingType: 'easeOutQuart' });
      //############################

       //############################
       //Mobile Menu
       //##########################
       $.slidebars();

       //###BLOG####
          //Hide elements
        $('#Blog-BlogSocial').hide();
        $('#Blog-BlogSearch').hide();
        $('#Blog-BlogArticles').hide();


        //Handle Alert Scroll to
        if ($('#alertmsg').length !== 0) {
           $.scrollTo("#alertmsg", {
              duration: 600,
              easing: 'swing'
            });
       }
       //Alert hide on click close
       $('.close').click(function(event) {
           event.preventDefault();
           $( "#alertmsg" ).addClass( "alert-hide" );
        });
       //Handle Newsletter Subscribe/Unsubscribe
     // console.log("here");
    $('#submitnewsletter').val('Subscribe to Newsletter');
    $( ".subscribe" ).change(function() {
        //console.log("changed");
          if ($('#SubscribeNo').is(':checked')){
              $('#submitnewsletter').val('Unsubscribe to Newsletter');
          }else{
            $('#submitnewsletter').val('Subscribe to Newsletter');
          }
        });
 });