jQuery(document).ready(function(e){e('a[href="/mediaplayer/player.asp?listenlive=1"]').click(function(){return window.open(e(this).attr("href"),"title","width=1000, height=700"),!1}),e(".royalSlider").royalSlider({autoScaleSlider:!0,autoPlay:{enabled:!0,pauseOnHover:!0},autoScaleSliderHeight:300,autoScaleSliderWidth:600,globalCaption:!0,transitionType:"fade",imageScaleMode:"fill",keyboardNavEnabled:!0}),e("img.lazy").lazyload({effect:"fadeIn"}),e(".mainbody-inside-main").fitVids(),e().UItoTop({easingType:"easeOutQuart"}),e(".venobox").venobox(),e.slidebars(),e("#Blog-BlogSocial").hide(),e("#Blog-BlogSearch").hide(),e("#Blog-BlogArticles").hide(),e("#FollowMe-btn").click(function(i){i.preventDefault(),e("#Blog-BlogSocial").slideToggle("3000","linear",function(){})}),e("#OtherArticles-btn").click(function(i){i.preventDefault(),e("#Blog-BlogArticles").slideToggle("3000","linear",function(){})}),e("#Search-btn").click(function(i){i.preventDefault(),e("#Blog-BlogSearch").slideToggle("3000","linear",function(){})}),e("input[id=file1]").change(function(){e("#filecover1").val(e(this).val())}),e("input[id=file2]").change(function(){e("#filecover2").val(e(this).val())}),e("input[id=file3]").change(function(){e("#filecover3").val(e(this).val())}),e("#forgetyourpassword").hide(),e("#memberjoin").hide(),e("#member-forget-btn").click(function(i){i.preventDefault(),e("#forgetyourpassword").slideToggle("3000","linear",function(){e.scrollTo("#forgetyourpassword",{duration:600,easing:"swing"})})}),e("#member-join-btn").click(function(i){i.preventDefault(),e("#memberjoin").slideToggle("3000","linear",function(){e.scrollTo("#memberjoin",{duration:600,easing:"swing"})})}),0!==e("#alertmsg").length&&e.scrollTo("#alertmsg",{duration:600,easing:"swing"}),e(".close").click(function(i){i.preventDefault(),e("#alertmsg").addClass("alert-hide")}),e("#submitnewsletter").val("Subscribe to Newsletter"),e(".subscribe").change(function(){e("#submitnewsletter").val(e("#SubscribeNo").is(":checked")?"Unsubscribe to Newsletter":"Subscribe to Newsletter")})});