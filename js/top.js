var timer;


$(window).on('load', function () {
   if (sessionStorage.getItem('access')) {
      $('body').css({ display: 'block' });
      setTimeout(function () {
         $('body').css({ opacity: 1 });

         $('.main-visual .visual').each(function () {
            $(this).css({
               'background': "url('" + $(this).data('url') + "')no-repeat center center",
               '-webkit-background-size': 'cover',
               '-moz-background-size': 'cover',
               '-o-background-size': 'cover',
               'background-size': 'cover'
            });
         });

         $('.main-visual .btn1').addClass('on');
         timer = setInterval(changeImage, 6700);

         $('#news .item-area .item').each(function () {
            $(this).children('.img-area').css({
               'background': "url('" + $(this).children('.img-area').data('url') + "')no-repeat center center",
               '-webkit-background-size': 'cover',
               '-moz-background-size': 'cover',
               '-o-background-size': 'cover',
               'background-size': 'cover'
            });
         });


         var news_owl = $('#news .owl-carousel');
         news_owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            responsive: {
               0: {
                  items: 1,
                  nav: false
               },
               480: {
                  items: 2
               },
               640: {
                  items: 3
               },
               768: {
                  items: 2
               },
               1000: {
                  items: 3,
                  nav: true
               }
            }
         });
      }, 500);
   } else {
      $('body').css({ display: 'block' });
      $('body').css({ opacity: 1 });

      $('.main-visual .visual').each(function () {
         $(this).css({
            'background': "url('" + $(this).data('url') + "')no-repeat center center",
            '-webkit-background-size': 'cover',
            '-moz-background-size': 'cover',
            '-o-background-size': 'cover',
            'background-size': 'cover'
         });
      });

      $('#news .item-area .item').each(function () {
         $(this).children('.img-area').css({
            'background': "url('" + $(this).children('.img-area').data('url') + "')no-repeat center center",
            '-webkit-background-size': 'cover',
            '-moz-background-size': 'cover',
            '-o-background-size': 'cover',
            'background-size': 'cover'
         });
      });


      var news_owl = $('#news .owl-carousel');
      news_owl.owlCarousel({
         loop: true,
         margin: 20,
         responsiveClass: true,
         responsive: {
            0: {
               items: 1,
               nav: false
            },
            480: {
               items: 2
            },
            640: {
               items: 3
            },
            768: {
               items: 2
            },
            1000: {
               items: 3,
               nav: true
            }
         }
      });
   }

   if (!sessionStorage.getItem('access')) {

      $.when(
         $('.logo-svg').addClass('on')
      ).done(function () {


         setTimeout(function () {

            $('.loader').addClass('on');

            $('.main-visual .btn1').addClass('on');
            timer = setInterval(changeImage, 6700);

         }, 7500);
      });
      sessionStorage.setItem('access', "0");
   } else {
      $('.loader').fadeOut();

   }
});

var cnt = 0;
var cnt2 = 0;

$(window).scroll(function () {

   // if ($(window).scrollTop() > 500 && cnt == 0) {

   //    cnt = 1;
   // }

   if ($(window).scrollTop() > 1 && cnt2 == 0) {

      $('#product .item-area .item').each(function () {
         $(this).children('.img-area').css({
            'background': "url('" + $(this).children('.img-area').data('url') + "')no-repeat center center",
            '-webkit-background-size': 'cover',
            '-moz-background-size': 'cover',
            '-o-background-size': 'cover',
            'background-size': 'cover'
         });
      });

      var prod_owl = $('#product .owl-carousel');
      prod_owl.owlCarousel({
         loop: true,
         margin: 20,
         responsiveClass: true,
         responsive: {
            0: {
               items: 1,
               nav: false
            },
            480: {
               items: 1
            },
            640: {
               items: 1
            },
            768: {
               items: 1
            },
            1000: {
               items: 1,
               nav: true
            }
         }
      });

      $('#movie .item-area .item').each(function () {
         $(this).children('img').attr('src', $(this).children('img').data('src'));
      });

      $('#movie .item-area').css({ 'height': $('#movie .item-area .active .item').height() });

      var movie_owl = $('#movie .owl-carousel');
      movie_owl.owlCarousel({
         loop: true,
         margin: 20,
         responsiveClass: true,
         responsive: {
            0: {
               items: 1,
               nav: false
            },
            480: {
               items: 1
            },
            640: {
               items: 1
            },
            768: {
               items: 1
            },
            1000: {
               items: 1,
               nav: true
            }
         }
      });


      $('#project .item-area').append('<iframe frameborder="0" height="365" scrolling="no" src="https://camp-fire.jp/projects/483402/widget" width="245"></iframe>');
      $('#project .item-area').append('<iframe frameborder="0" height="365" scrolling="no" src="https://camp-fire.jp/projects/327860/widget" width="245"></iframe>');
      $('#project .item-area').append('<iframe  scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:310px; height:390px;" allowtransparency="true" src="https://www.makuake.com/widget/project/sanyosenko05/"></iframe>');
      $('#project .item-area').append('<iframe  scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:310px; height:390px;" allowtransparency="true" src="https://www.makuake.com/widget/project/bon03/"></iframe>');

      cnt2 = 1;
   }
});

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
   //        player = new YT.Player('player', {
   //            width: '100%',
   //            videoId: '0CEvo_ULCp0',
   //            playerVars: {
   //                'rel': 0
   //            },
   //            events: {
   //                'onReady': onPlayerReady,
   //                'onStateChange': onPlayerStateChange
   //            }
   //        });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
   event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
   switch (event.data) {
      case YT.PlayerState.ENDED:

         $('#main-mov').fadeOut();

         break;
      case YT.PlayerState.PLAYING:
         break;
      case YT.PlayerState.PAUSED:
         break;
      case YT.PlayerState.BUFFERING:
         break;
      case YT.PlayerState.CUED:
         break;
   }
}
function stopVideo() {
   player.stopVideo();
}


var cnt = 2;
function changeImage() {
   num = $('.main-visual .visual').length;
   $('.visual').each(function (i, elem) {
      $(this).css('opacity', 0);
   });

   $('.main-visual .btn-area a').each(function (i, elem) {
      $(this).removeClass('on');
   });


   $('.main' + cnt).css('opacity', 1);
   $('.main-visual .btn' + cnt).addClass('on');

   cnt++;

   if (cnt == num + 1) {
      cnt = 1;
   }
}

$(function () {

   $('.main-visual .btn-area a').on('click', function () {

      clearInterval(timer);

      cnt = $(this).data('cnt');
      changeImage();
      timer = setInterval(changeImage, 6700);


   });

   $("#movie .item").on('click', function () {
      $('.fix-boxed').fadeIn();

      player = new YT.Player('main-mov', {
         width: '100%',
         videoId: $(this).data('id'),
         playerVars: {
            'rel': 0
         },
         events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
         }
      });

   });

   $(".close-btn").on('click', function () {
      $('.fix-boxed').each(function (i, elem) {
         $(this).fadeOut();
         $('#main-mov').remove();
         $('.movie-box').append('<div class="movie-player" id="main-mov"></div>');
      });
   });
   $(".fix-boxed").on('click', function () {
      if (!$(this).closest('.boxed-inner').length) {
         $(this).fadeOut();
         $('#main-mov').remove();
         $('.movie-box').append('<div class="movie-player" id="main-mov"></div>');
      }
   });



});