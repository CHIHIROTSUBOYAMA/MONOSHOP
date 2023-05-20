

$(function () {
    // ハッシュリンク(#)と別ウィンドウでページを開く場合は実行しない
    $('a:not([href^="#"]):not([href="javascript:void(0)"]):not([target]):not(.page-top):not(.page-link)').on('click', function (e) {
       e.preventDefault();         // ページ遷移を一旦キャンセル
       url = $(this).attr('href'); // 遷移先のURLを取得
 
       if (url !== '') {
          $('body').addClass('layer-active'); // 画面遷移前のアニメーション is-slide-in
 
          setTimeout(function () {
             window.location = url;  // 0.7秒後に取得したURLに遷移
          }, 500);
       }
       return false;
    });
 
    $(window).on("beforeunload", function (e) {
    });
 
 });
 
 window.onpageshow = function (event) {
    if (event.persisted) {
       window.location.reload();
    }
 };
 
 $(function () {
 
    h = $(window).height();
 
    // if (window.innerWidth > 960) {
    //    $('.main-visual').css('height', h);
    // }
    // $('.container .gry').css('margin-top', h);
 
 
    var topBtn = $('.page-top');
 
    //スクロールしてトップ
    topBtn.click(function () {
       $('body,html').animate({
          scrollTop: 0
       }, 500);
       return false;
    });
 
    // スムーススクロールを起動する
    setTimeout(function () {
       smoothScroll.init({
          offset: 250
       });
    }, 1000);
 
 
    $('.drawer-btn').on('click', function () {
       var jQuerynavList = $(this);
       if (jQuerynavList.hasClass("current")) {
          jQuerynavList.removeClass("current");
          $('body').css({ 'position': 'initial' });
          //            $('header').removeClass('on');
          $('.gnav').fadeOut('500');
          $('.nav-layer').removeClass('active');
          $('header').removeClass('on');
          $('header h2 .sp').attr('src', 'monoshop-design/logo-side.svg');
 
          //         setTimeout(function () {
          $('.nav-layer').fadeOut('500');
          //         }, 2000);
          //            $('.nav-layer').fadeOut('500');
       } else {
          jQuerynavList.addClass("current");
          $('body').css({ 'position': 'fixed' });
          //            $('header').addClass('on');
          $('.gnav').fadeIn('1000');
          $('.nav-layer').fadeIn('500');
          $('.nav-layer').addClass('active');
          $('header').addClass('on');
          $('header h2 .sp').attr('src', 'monoshop-design/logo-side_w.svg');
          //         setTimeout(function () {
          $('.drawer-btn').fadeIn('1000');
          //         }, 2000);
       }
       return false;
    });
 
    $('.gnav li a[href^="#"]').on('click', function () {
       if (window.innerWidth < 960) {
 
          $('.drawer-btn').removeClass("current");
          $('body').css({ 'position': 'initial' });
          //                $('header').removeClass('on');
          $('.gnav').fadeOut('500');
          $('.nav-layer').removeClass('active');
          $('.nav-layer').fadeOut('500');
          $('header').removeClass('on');
          $('header h2 .sp').attr('src', 'monoshop-design/logo-side.svg');
       }
    });
 
    $('.gnav li .child li a').on('click', function () {
       if (window.innerWidth < 960) {
          $('.sp-toggle-link').each(function () {
             $(this).removeClass('on');
 
          });
       }
    });
 
    $('.gnav li').hover(function () {
       $("ul.child:not(:animated)", this).slideDown();
    }, function () {
       $("ul.child", this).slideUp();
    });
 
 
    $('.sp-toggle-link').on('click', function () {
 
       if ($(this).hasClass('on')) {
          $(this).removeClass('on');
          $(this).next('.child').slideUp();
       } else {
          $(this).addClass('on');
          $(this).next('.child').slideDown();
       }
 
    });
 
    $(window).scroll(function () {
 
       if ($(window).scrollTop() > 1) {
          $('header').addClass('scroll');
          $('.drawer-btn').addClass('scroll');
       } else {
          $('header').removeClass('scroll');
          $('.drawer-btn').removeClass('scroll');
       }      
 
       $('.img-area').each(function () {
          var imgPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
 
          if (scroll > imgPos - windowHeight + 100) {
             $(this).addClass('active');
          }
       });
 
       $('.fadein-blur').each(function () {
          var imgPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
 
          if (scroll > imgPos - windowHeight + 100) {
             $(this).addClass('active');
          }
       });
 
 
       $('.fadein-small').each(function () {
          var imgPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
 
          if (scroll > imgPos - windowHeight + 100) {
             $(this).addClass('active');
          }
       });
 
       $('.fadein-down').each(function () {
          var imgPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > imgPos - windowHeight + 100) {
             $(this).addClass('active');
          }
       });
 
       $('.fadein-up').each(function () {
          var imgPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > imgPos - windowHeight + 100) {
             $(this).addClass('active');
          }
       });
 
       $('.fadein-right').each(function () {
          var imgPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > imgPos - windowHeight + 100) {
             $(this).addClass('active');
          }
       });
 
       $('.fadein-left').each(function () {
          var imgPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > imgPos - windowHeight + 100) {
             $(this).addClass('active');
          }
       });
 
    });
 
    if (navigator.userAgent.indexOf('Android') > 0) {
       $("body").addClass("Android");
    }
 });
 
 //$(function () {
 //   var cnt = 1;
 //   var before = $(window).scrollTop();
 //   $(window).scroll(function () {
 //
 //      var after = $(window).scrollTop();
 //      if (before > after) {
 //         //上スクロールした時の処理
 //         $('header').removeClass('scroll');
 //      } else if (before < after) {
 //         //下スクロールした時の処理
 //         $('header').addClass('scroll');
 //      }
 //      before = after;
 //
 //      if ($(window).scrollTop() < 1) {
 //         $('header').removeClass('scroll');
 //         $('h1').fadeIn();
 //      } else {
 //         $('h1').fadeOut();
 //      }
 //   });
 //
 //   var nowPosition = 0;
 //   $(window).on('touchmove', function () {
 //      diffPosition = nowPosition - $(window).scrollTop();
 //      nowPosition = $(window).scrollTop();
 //      if (diffPosition > 0) {
 //         // 下にスクロール
 //         $('header').removeClass('scroll');
 //      } else {
 //         // 上にスクロール
 //         $('header').addClass('scroll');
 //      }
 //
 //      if ($(window).scrollTop() < 10) {
 //         $('header').removeClass('scroll');
 //      }
 //
 //   });
 //
 //});