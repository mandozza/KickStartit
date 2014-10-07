 jQuery(document).ready(function($) {

      //##########################
      //MEDIAPLAYER
      //#########################
      $('a[href="/mediaplayer/player.asp?listenlive=1"]').click(function() {
        window.open($(this).attr('href'),'title', 'width=1000, height=700');
        return false;
      });

       //##########################
      //SLIDER
      //##########################
        $(".royalSlider").royalSlider({
            // options go here
             autoScaleSlider:true,
             autoPlay: {
              // autoplay options go gere
               enabled: true,
               pauseOnHover: true
            },
            autoScaleSliderHeight:300,
            autoScaleSliderWidth: 600,
            globalCaption:true,
            transitionType:  'fade',
            imageScaleMode: 'fill',
            // as an example, enable keyboard arrows nav
            keyboardNavEnabled: true});
      //##########################
      //LAZY LOAD
      //##########################
      $("img.lazy").lazyload({
          effect : "fadeIn"
      });
      //############################
       //Fit Vids
       //##########################
     $('.mainbody-inside-main').fitVids();
       //############################
       //UItoTOP
       //##########################
      $().UItoTop({ easingType: 'easeOutQuart' });
      //############################
       //Veno Box use for Photogallery
       //##########################
      $('.venobox').venobox();
       //############################
       //Mobile Menu
       //##########################
       $.slidebars();
       //###BLOG####
          //Hide elements
        $('#Blog-BlogSocial').hide();
        $('#Blog-BlogSearch').hide();
        $('#Blog-BlogArticles').hide();

        //Handle Toggle Blog Social
        $('#FollowMe-btn').click(function(event) {
            event.preventDefault();
            $('#Blog-BlogSocial').slideToggle('3000',"linear", function() {
                 // Animation complete.
            });
        });
        //Handle Toggle Blog Other Articles
        $('#OtherArticles-btn').click(function(event) {
            event.preventDefault();
            $('#Blog-BlogArticles').slideToggle('3000',"linear", function() {
                 // Animation complete.
            });
        });
        //Handle Toggle Blog Search
        $('#Search-btn').click(function(event) {
             event.preventDefault();
            $('#Blog-BlogSearch').slideToggle('3000',"linear", function() {
                 // Animation complete.
            });
        });

        //########FORM STUFF
          //Handle File upload
        $('input[id=file1]').change(function(){
          $('#filecover1').val($(this).val());
        });
        $('input[id=file2]').change(function(){
          $('#filecover2').val($(this).val());
        });
        $('input[id=file3]').change(function(){
          $('#filecover3').val($(this).val());
        });

        //Members stuff

        //hide elements
        $('#forgetyourpassword').hide();
        $('#memberjoin').hide();

         //Handle Forget Password Toggle
        $('#member-forget-btn').click(function(event) {
          event.preventDefault();
            $('#forgetyourpassword').slideToggle('3000',"linear", function() {
                 // Animation complete.
                 $.scrollTo("#forgetyourpassword", {
                     duration: 600,
                      easing: 'swing'
                   });
            });
        });
        //Handle  Member Join Toggle
        $('#member-join-btn').click(function(event) {
          event.preventDefault();
            $('#memberjoin').slideToggle('3000',"linear", function() {
                 // Animation complete.
                $.scrollTo("#memberjoin", {
                     duration: 600,
                      easing: 'swing'
                   });
            });
        });

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