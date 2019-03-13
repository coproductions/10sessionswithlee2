 window.fbAsyncInit = function() {
    FB.init({
      appId      : '1025499954140229',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  var imageSlider = function(imgSize,imgNr){
    var counter = 0;
    var myInterval = setInterval(function(){
      if(imgNr*imgSize - counter*imgSize < $(window).width()){
        // clearInterval(myInterval)
        // $('footer').scrollLeft(0);
        $('footer').animate({scrollLeft: 0},2000);
        counter = 0;
      }else{
        var scrollAmount = counter * imgSize;
        $('footer').animate({scrollLeft: '+='+imgSize},1100);
        counter++;
      }
    },9000);
    $('footer').click(function(){
      clearInterval(myInterval);
    });
  };

  imageSlider(359,12);

