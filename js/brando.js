;(function($){

    var brando = {     

        init: function(){
            this.smoothScrollFn();
            this.scrollEventFn();
            this.navFn();
            this.cubeFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.section11Fn();
            this.section12Fn();
            this.section13Fn();
            this.section14Fn();
            this.section15Fn();
            this.footerFn();
        },


        smoothScrollFn:function(){
            var smoothBtn = $('.smoothBtn');
            var $scrollTopBtn = $('.scroll-top-btn');
            var t = 0

            smoothBtn.on({
                click:function(e){
                  e.preventDefault();
                  var url = $(this).attr('href');
                  $('html,body').stop().animate({scrollTop: $( url ).offset().top},600);
                }
              });

              $(window).scroll(function(){
                if( $(this).scrollTop()>=100){
                  if(t==0){
                    t=1;
                    $scrollTopBtn.stop().fadeIn(1000);
                  }
                }
                else{
                  if(t==1){
                    t=0;
                    $scrollTopBtn.stop().fadeOut(1000);
                  }
                }
              });





        },
        scrollEventFn:function(){
          
        },
      
        navFn:function(){
          var $mobileBtn = $('.mobile-btn');
          var $navWrap   = $('.nav-wrap');
          var $closeBtn   = $('.close-btn');
          var $mainBtn   = $('.main-btn');

          $mobileBtn.on({
              click:function(e){
                e.preventDefault();
                $navWrap.addClass('addNav');
              }
          });
          $closeBtn.on({
              click:function(e){
                e.preventDefault();
                $navWrap.removeClass('addNav');
              }
          });
          $mainBtn.on({
                  click:function(){
                      $mainBtn.removeClass('addCol');
                      $mainBtn.find('span').removeClass('addCol');


                      $(this).addClass('addCol');
                      $(this).find('span').addClass('addCol');
                  }
              })


        },

        cubeFn:function(){
          $scroll2Top = $('#section2').offset().top;
          $scroll4Top = $('#section4').offset().top;
          $scroll6Top = $('#section6').offset().top;
          $scroll8Top = $('#section8').offset().top;
          $scroll11Top = $('#section10').offset().top;
          $scroll14Top = $('#section14').offset().top;
          $face = $('#cube .content .cube .face');
          $cube = $('#cube .content .cube');
          var t =0;

          function cubeMoveFn(){
            $cube.removeClass('ani');
          }
          cubeMoveFn();
          
          $(window).scroll(function(){
            if($(this).scrollTop() == 0 ){
              t=0;
              $cube.removeClass('addChk1');
              $cube.removeClass('addChk2');
              $cube.removeClass('addChk3');
              $cube.removeClass('addChk4');
              $cube.removeClass('addChk5');
              $cube.removeClass('addChk6');
              $face.removeClass('addCol');
              $cube.addClass('ani');
            }
            if($(this).scrollTop() >= 400){
              if( t==0 ){
                t=1;

                $cube.removeClass('addChk2');
                $cube.removeClass('addChk3');
                $cube.removeClass('addChk4');
                $cube.removeClass('addChk5');
                $cube.removeClass('addChk6');
                $cube.addClass('addChk1');
                $face.addClass('addCol');
                cubeMoveFn();
              }
            }
            if($(this).scrollTop() >= $scroll4Top){
              if( t==1 ){
                t=0;
                $cube.removeClass('addChk1');
                $cube.removeClass('addChk3');
                $cube.removeClass('addChk4');
                $cube.removeClass('addChk5');
                $cube.removeClass('addChk6');
                $cube.addClass('addChk2');
              }
            }
            if($(this).scrollTop() >= $scroll6Top){
              if( t==0 ){
                t=1;
                $cube.removeClass('addChk1');
                $cube.removeClass('addChk2');
                $cube.removeClass('addChk4');
                $cube.removeClass('addChk5');
                $cube.removeClass('addChk6');
                $cube.addClass('addChk3');
              }
            }
            if($(this).scrollTop() >= $scroll8Top){
              if( t==1 ){
                t=0;
                $cube.removeClass('addChk1');
                $cube.removeClass('addChk2');
                $cube.removeClass('addChk3');
                $cube.removeClass('addChk5');
                $cube.removeClass('addChk6');
                $cube.addClass('addChk4');
              }
            }
            if($(this).scrollTop() >= $scroll11Top){
              if( t==0 ){
                t=1;
                $cube.removeClass('addChk1');
                $cube.removeClass('addChk2');
                $cube.removeClass('addChk3');
                $cube.removeClass('addChk4');
                $cube.removeClass('addChk6');
                $cube.addClass('addChk5');
              }
            }
            if($(this).scrollTop() >= $scroll14Top){
              if( t==1 ){
                t=0;
                $cube.removeClass('addChk1');
                $cube.removeClass('addChk2');
                $cube.removeClass('addChk3');
                $cube.removeClass('addChk4');
                $cube.removeClass('addChk5');
                $cube.addClass('addChk6');
              }
            }

          });
        },

        section1Fn:function(){
        var $slide = $('#section1 .slide');
        var $window = $(window);
        var $winW = $(window).width();
        var $winH = $(window).height();
        var $section1 = $('#section1');
        var $pageBtn   = $('#section1 .page-btn');
        var $slideWrap = $('#section1 .slide-wrap');
        var $slideView = $('#section1 .slide-view');

        var cnt = 0;
        var n = $('#section1 .slide').length;
        var setId      = null;
        var setId2     = null;

        function resizeFn(){
            $winW = $(window).width();
            $slide.css({width:$winW});
            $winH = $(window).height(); 

            $section1.css({width:$winW, height:$winH});
        }
            resizeFn();
            setTimeout(resizeFn, 100);

            $window.resize(function(){                
                setTimeout(resizeFn,100);
            });



        function nextSlideFn(){
          $slide.find('.text-box').css({ opacity:0 });
          $slide.eq(cnt).find('.text-box').css({ opacity:1 });
            $slide                   .css({ zIndex:1});
            $slide.eq(cnt==0?2:cnt-1).css({ zIndex:2 });  
            $slide.eq(cnt)           .css({ zIndex:3 }).find('.col').stop().animate({height:0},0).animate({height:50 + '%'},1000);
            pageBtnColorEventFn();
        }
        function prevSlideFn(){
            $slide.find('.text-box').css({ opacity:0 });
            $slide.eq(cnt).find('.text-box').css({ opacity:1 });
            $slide                   .css({ zIndex:1}).find('.col').stop().animate({ height:50 + '%'});
            $slide.eq(cnt)           .css({ zIndex:2 });
            $slide.eq(cnt==2?0:cnt+1).css({ zIndex:3 }).find('.col').stop().animate({height:50 + '%'},0).animate({height:0},1000);
            pageBtnColorEventFn();
        }
        function nextSlidCountFn(){
            cnt++;
            if(cnt>2){
                cnt=0;
            }
            nextSlideFn();
        }

        function prevSlidCountFn(){
            cnt--;
            if(cnt<0){
                cnt=2;
            }
            prevSlideFn();
        }

        function pageBtnColorEventFn(){
            $pageBtn.removeClass('addPage');
            $pageBtn.eq(cnt > n-1 ? 0 : cnt).addClass('addPage');
          }
          pageBtnColorEventFn();

          
          $pageBtn.each(function(idx){                  
            $(this).on({ 
              click:  function(){
                puaseFn();

                if(cnt > idx ){ 
                  cnt = idx; 
                  prevSlideFn();
                }
                else if(cnt<idx) { 
                  cnt = idx; 
                  nextSlideFn();
                }
              }
            });
          });

        $slideView.swipe({
            swipeLeft:function(e){
                e.preventDefault();
                puaseFn();
                if( !$('.col').is(':animated')){
                nextSlidCountFn();
                }
            },
            swipeRight:function(e){
                e.preventDefault();
                puaseFn();
                if( !$('.col').is(':animated')){
                  prevSlidCountFn();
                }
            }
        });


        function autoTimerFn(){
            setId = setInterval(nextSlidCountFn, 5000);
          }
          autoTimerFn();
        
        function puaseFn(){
            var t=0;
            clearInterval(setId);
            clearInterval(setId2);

            setId2 = setInterval(function(){
                t++;
                console.log(t);
                if( t>=5){
                    t=0;
                    clearInterval(setId);
                    clearInterval(setId2);
                    nextSlidCountFn();
                    autoTimerFn();
                }
            },1000);
        }

        },

        section2Fn:function(){
            var $li = $('#section2 ul li');
            var $liF = $('#section2 ul li:nth-child(1)');
            var $liS = $('#section2 ul li:nth-child(2)');
            var $h2 = $('#section2 .text-wrap .text-gap .text-content h2');
            var $p = $('#section2 .text-wrap .text-gap .text-content p');
            var $winW = $(window).innerWidth();
            var $imgW = $('#section2 ul li .img-wrap img').innerWidth();
            var $imgH = $('#section2 ul li .img-wrap img').innerHeight();
            var h2FontSizeRate = $imgW * 0.040885;
            var pFontSizeRate = $imgW * 0.042038;


            function resizeFn(){
                var $imgW = $('#section2 ul li .img-wrap img').innerWidth();
                var $imgH = $('#section2 ul li .img-wrap img').innerHeight();
                var $winW = $(window).innerWidth();

                    h2FontSizeRate = $imgW * 0.040885;
                    pFontSizeRate = $imgW * 0.042038;

                    $h2.css({fontSize: h2FontSizeRate });
                    $p.css({fontSize: pFontSizeRate });

                    if($winW > 780 ){
                    $li.css({height: $imgH});
                    }
                    else{
                        $liF.css({height: $imgH});
                        $liS.css({height: 100 + '%'});
                    }
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn,100);


            // 페럴록스
            var $imgWrap = $('#section2 .img-wrap');
            var $backWrap = $('#section2 .back-wrap');
            var t = 0;

            function rotateFn(){
              $imgWrap.addClass('addRotate');
              $backWrap.addClass('addRotate');
                          
            }

            $(window).scroll(function(){
              if($(this).scrollTop() == 0 ){
                t=0;
                $imgWrap.removeClass('addRotate');
                $backWrap.removeClass('addRotate');

              }
              if($(this).scrollTop() >= 400){
                if( t==0 ){
                  t=1;
                  rotateFn();
                }
              }
            });
        },

        section3Fn:function(){
            var $pageBtn = $('#section3 .page-btn');
            var $col = $('#section3 .col');

            $pageBtn.each(function(idx){
                $(this).on({
                    click:function(e){
                        $pageBtn.removeClass('addOn');
                        $(this).addClass('addOn');

                        $col.removeClass('addOn');
                        $col.eq(idx).addClass('addOn');
                        
                        $col.animate({opacity:0});
                        $col.eq(idx).animate({opacity:1});
                    }
                });
            });    
        },

        section4Fn:function(){
            var $li = $('#section4 ul li');
            var $liF = $('#section4 ul li:nth-child(1)');
            var $liS = $('#section4 ul li:nth-child(2)');
            var $h2 = $('#section4 .text-wrap .text-gap .text-content h2');
            var $p = $('#section4 .text-wrap .text-gap .text-content p');
            var $winW = $(window).innerWidth();
            var $imgW = $('#section4 ul li .img-wrap img').innerWidth();
            var $imgH = $('#section4 ul li .img-wrap img').innerHeight();
            var h2FontSizeRate = $imgW * 0.040885;
            var pFontSizeRate = $imgW * 0.042038;

            function resizeFn(){
                var $imgW = $('#section4 ul li .img-wrap img').innerWidth();
                var $imgH = $('#section4 ul li .img-wrap img').innerHeight();
                var $winW = $(window).innerWidth();

                    h2FontSizeRate = $imgW * 0.040885;
                    pFontSizeRate = $imgW * 0.042038;

                    $h2.css({fontSize: h2FontSizeRate });
                    $p.css({fontSize: pFontSizeRate });
                    if($winW > 767 ){
                    $li.css({height: $imgH});
                    }
                    else{
                        $liF.css({height: $imgH });
                        $liS.css({height: 100 + '%'});
                    }
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn,100);


            // 페럴록스
            var $imgWrap = $('#section4 .img-wrap');
            var $backWrap = $('#section4 .back-wrap');
            var $section4Top = $('#section4').offset().top;
            var t = 0;

            function rotateFn(){
              $imgWrap.addClass('addRotate');
              $backWrap.addClass('addRotate');
            }

            $(window).scroll(function(){
              if($(this).scrollTop() == 0 ){
                t=0;
                $imgWrap.removeClass('addRotate');
                $backWrap.removeClass('addRotate');
              }
              if($(this).scrollTop() >= $section4Top){
                if( t==0 ){
                  t=1;
                  rotateFn();
                }
              }
            });
        },

        section5Fn:function(){
          var $a = $('#section5 a');
          var $slideWrap = $('#slide3d .slide-container .slide-view .slide-wrap');
          var $slideW = $('#slide3d .slide').innerWidth();
          var n = $('#slide3d .slide').length;
          var cnt = 0;
          var tz = 0;

          tz = Math.round( ($slideW/ 2 ) / Math.tan(Math.PI / n));

          function SlideFn(){
            $slideWrap.css({transform:'perspective('+ (tz*2) +'px) translateZ('+ (-tz) +'px) rotateY('+ (-90*cnt) +'deg)'});
          }

          $a.each(function(idx){                  
            $(this).on({ 
              click:  function(){

                if(cnt > idx ){ 
                  cnt = idx; 
                  SlideFn();
                }
                else if(cnt<idx) { 
                  cnt = idx; 
                  SlideFn();
                }
              }
            });
          });
        },

        section6Fn:function(){
            var $li = $('#section6 .wrap .gap .container > ul > li');
            var $liC = $('#section6 .wrap .gap .container > ul > li .content');
            var $h2 = $('#section6 .text-wrap .text-gap .text-content h2');
            var $p = $('#section6 .text-wrap .text-gap .text-content p');
            var $winW = $(window).innerWidth();
            var $imgW = $('#section6 .wrap .gap .container > ul > li').innerWidth();
            var $imgH = $('#section6 .wrap .gap .container > ul > li .text-wrap').innerHeight();
            var h2FontSizeRate = $imgW * 0.040885;
            var pFontSizeRate = $imgW * 0.042038;

            function resizeFn(){
                var $imgW = $('#section6 .wrap .gap .container > ul > li').innerWidth();
                var $imgH = $('#section6 .wrap .gap .container > ul > li .text-wrap').innerHeight();
                var $winW = $(window).innerWidth();
                
                    h2FontSizeRate = $imgW * 0.040885;
                    pFontSizeRate = $imgW * 0.042038;


                    $h2.css({fontSize: h2FontSizeRate });
                    $p.css({fontSize: pFontSizeRate });
                    if($winW > 780 ){
                        $li.css({height: $imgH});
                        $liC.css({height: $imgH});
                        }
                        else{
                            $li.css({height: 100 + '%'});
                        }

            }
          
        },

        section7Fn:function(){
            var $navBtn       = $('#section6 .nav-btn');
            var $galWrapUl    = $('#section7 #gallery-wrap > ul');
            var $galWrapUlLi  = $('#section7 #gallery-wrap > ul > li'); 
            var n            = $('#section7 #gallery-wrap > ul > li').length; //총 이미지(갤러리) 갯수
            var $galContent   = $('#section7 .gallery-content');                     
 
            var winW         = $(window).innerWidth();
            var cols         = 4; //반응형 화면너비 1200 초과 4, 980 초과 3, 680 초과 2, 680이하 1          
            var imgW         = winW / cols;
            var imgHRate     = 1; // 실수(소수점이 포함된 수치)
            var imgH         = imgW * imgHRate;
            var rows         = Math.ceil(n/cols); //자리올림 반드시 줄수(2) = 이미지 총갯수(galWrapUlLi.length)/칸수(cols)
            var btnNum       = 0; //초기값 첫번째 버튼 ALL  클릭한 버튼 번호 전달 
            
            var hide         = [ ];
            var show         = [ ];
            var k            = -1;

                           //1. 반응형 갤러리 함수
                           function reponseGalleryFn(){
                    
                            winW = $(window).innerWidth();                    
                            if( winW > 1200 ){
                                cols = 4; //칸수
                            }
                            else if( winW > 980 ){
                                cols = 3; //칸수
                            }
                            else if( winW > 680 ){
                                cols = 2; //칸수
                            }
                            else{
                                cols = 1; //칸수
                            }
                            imgW = winW / cols;  //이미지너비
                            imgH = imgW * imgHRate; //이미지 높이
                            
                            //갤러리 li(이미지 칸) 적용
                            //버튼번호별 이미지갯수 0:8개, 1:6개, 2:4개, 3:개, 4:6개
                            if( btnNum==0 ){
                                hide = [];
                                show = [0,1,2,3,4,5,6,7]; //8개
                            }
        
                            
                            else if( btnNum==1 ){ //1. FAMILY    show(zoomIn):134578(023467)     hide(zoomOut):26(15)
                                hide = [ 0,3,6 ];
                                show = [ 1,2,4,5,7 ];
                            }
                            else if( btnNum==2 ){  //2. HOLIDAYS  show(zoomIn):1367(0256)       hide(zoomOut):2458(1347)
                                hide = [ 4,5 ];
                                show = [ 0,1,2,3,6,7 ];
                            }
        
                            else if( btnNum==3 ){ //3. HONEYMOON show(zoomIn):2578(1467)       hide(zoomOut):1346
                                hide = [ 1,2,4,5,6 ];
                                show = [ 0,3,7 ];               
                            }
        
                            else if( btnNum==4 ){ //4. SAFARI    show(zoomIn):124678(013567)     hide(zoomOut):35
                                hide = [ 1,2 ];
                                show = [ 0,3,4,5,6,7 ];        
                            }  
        
                            n=show.length;
                            rows = Math.ceil(n/cols);
                            $galWrapUl.css({width: winW, height: imgH*rows });
                            $galWrapUlLi.css({width: Math.round(imgW),  height: Math.round(imgH) });                        
                            $galContent.removeClass('addZoom');  

                            $.each(hide, function(idx){
                                $galWrapUlLi.eq(hide[idx]).stop().hide();
                            });
        
                            k=-1;
                                for(var i=0; i<rows; i++){
                                    for(var j=0; j<cols; j++){
                                        k++;
                                        if(k>=n){
                                            break;
                                        }
                                        else;{
                                            $galWrapUlLi.eq(show[k]).stop().show().animate({ left:imgW*j, top:imgH*i },300);
                                        }
                                    }
                                }
                                $.each(show, function(idx){
                                    $galContent.eq(show[idx]).addClass('addZoom');  
                            }); 
    
                       }
        
                       reponseGalleryFn();
                       setTimeout(reponseGalleryFn,100);
        
                       //2. 윈도우 반응형 메서드($(window).resize())
                       $(window).resize(function(){
                            reponseGalleryFn();
                            setTimeout(reponseGalleryFn,100);
                       });
                       //3. 갤러리 버튼 클릭 이벤트
                       $navBtn.each(function(idx){
                            $(this).on({
                                click:  function(){
                                    btnNum = idx;
                                    reponseGalleryFn();
                                    //버튼 효과 클래스
                                    $navBtn.removeClass('addColor');
                                    $(this).addClass('addColor');
                                }
                            });
                       });    

                       var $galBtn = $('#section7 a');
                       var $modal = $('#modal');
                       var $closeBtn1 = $('#modal .close-btn1');
                       var $closeBtn2 = $('#modal .close-btn2');

                       var t =0;

                       $galBtn.on({
                         click:function(e){
                           e.preventDefault();
                          $modal.css({display:'block'});
                          $('html').addClass('addHid');
                         }
                       });
                       $modal.on({
                        click:function(e){
                          e.preventDefault();
                         $modal.css({display:'none'});
                         $('html').removeClass('addHid');
                        }
                      });
                      $closeBtn1.on({
                        click:function(e){
                          e.preventDefault();
                         $modal.css({display:'none'});
                        }
                      });
                      $closeBtn2.on({
                        click:function(e){
                          e.preventDefault();
                         $modal.css({display:'none'});
                        }
                      });

        },

        section8Fn:function(){
            var $li = $('#section8 ul li');
            var $liF = $('#section8 ul li:nth-child(1)');
            var $liS = $('#section8 ul li:nth-child(2)');
            var $h2 = $('#section8 .text-wrap .text-gap .text-content h2');
            var $p = $('#section8 .text-wrap .text-gap .text-content p');
            var $winW = $(window).innerWidth();
            var $imgW = $('#section8 ul li .img-wrap img').innerWidth();
            var $imgH = $('#section8 ul li .img-wrap img').innerHeight();
            var h2FontSizeRate = $imgW * 0.040885;
            var pFontSizeRate = $imgW * 0.042038;

            function resizeFn(){
                var $imgW = $('#section8 ul li .img-wrap img').innerWidth();
                var $imgH = $('#section8 ul li .img-wrap img').innerHeight();
                var $winW = $(window).innerWidth();

                    h2FontSizeRate = $imgW * 0.040885;
                    pFontSizeRate = $imgW * 0.042038;

                    $h2.css({fontSize: h2FontSizeRate });
                    $p.css({fontSize: pFontSizeRate });
                    if($winW > 767 ){
                    $li.css({height: $imgH});
                    }
                    else{
                        $liF.css({height: $imgH});
                        $liS.css({height: 100 + '%'});
                    }
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn,100);


                        // 페럴록스
                        var $section8Top = $('#section8').offset().top;
                        var $imgWrap = $('#section8 .img-wrap');
                        var $backWrap = $('#section8 .back-wrap');
                        var t = 0;

                        function rotateFn(){
                          $imgWrap.addClass('addRotate');
                          $backWrap.addClass('addRotate');
                        }
            
                        $(window).scroll(function(){
                          if($(this).scrollTop() == 0 ){
                            t=0;
                            $imgWrap.removeClass('addRotate');
                            $backWrap.removeClass('addRotate');
                          }
                          if($(this).scrollTop() >= $section8Top){
                            if( t==0 ){
                              t=1;
                              rotateFn();
                            }
                          }
                        });
        },

        section9Fn:function(){
          var $li = $('#section9 ul li');
          var $h2 = $('#section9 .back-content h2');
          var $h3 = $('#section9 .back-content h3');
          var $p = $('#section9 .back-content p');
          var $span = $('#section9 .back-content span');

          var $imgW = $('#section9 ul li .front-wrap .img-wrap img').innerWidth();
          var $imgH = $('#section9 ul li .front-wrap .img-wrap img').innerHeight();

          var h2FontSizeRate = $imgW * 0.10028199;
          var h3FontSizeRate = $imgW * 0.040112;
          var pFontSizeRate = $imgW * 0.0300845;
          var spanFontSizeRate = $imgW * 0.026073;

          function resizeFn(){
              var $imgW = $('#section9 ul li .img-wrap img').innerWidth();
              var $imgH = $('#section9 ul li .img-wrap img').innerHeight();

                  h2FontSizeRate = $imgW * 0.10028199;
                  h3FontSizeRate = $imgW * 0.040112;
                  pFontSizeRate = $imgW * 0.040112;
                  spanFontSizeRate = $imgW * 0.026073;

                  $h2.css({fontSize: h2FontSizeRate });
                  $h3.css({fontSize: h3FontSizeRate });
                  $span.css({fontSize: spanFontSizeRate });
                  $p.css({fontSize: pFontSizeRate });
                  $li.css({height: $imgH});

          }

          $(window).resize(function(){
              resizeFn();
          });
          setTimeout(resizeFn,100);
        },

        section10Fn:function(){
          var cnt = [0,0,0,0];
          var setId = [null,null,null,null];
          var $num = $('#section10 .num');
          var t = 0;
          var $section10Top = $('#section9').offset().top-200;
          


          $(window).scroll(function(){
            if( $(window).scrollTop() >= $section10Top ){
                if(t==0){
                  t=1;
		                  setId[0] = setInterval(cnt0Fn, 90);
		                  setId[1] = setInterval(cnt1Fn, 90);
		                  setId[2] = setInterval(cnt2Fn, 90);
		                  setId[3] = setInterval(cnt3Fn, 115);
                }
              }
              if( $(window).scrollTop() == 0){
                if(t==1){
                  t=0;
                  setId = [null,null,null,null];
                  cnt = [0,0,0,0];
                  clearInterval(setId[0]);
                  clearInterval(setId[1]);
                  clearInterval(setId[2]);
                  clearInterval(setId[3]);
                }
              }
          });

          
		        function cnt0Fn() {
		          cnt[0] += 11;
		          if (cnt[0] > 780) {
		            clearInterval(setId[0]);
                $num.eq(0).find('h2').text(780);
		          } 
              else {
		            $num.eq(0).find('h2').text(cnt[0]);
		          }
		        }

            function cnt1Fn() {
		          cnt[1] += 14;
		          if (cnt[1] > 987) {
		            clearInterval(setId[1]);
                $num.eq(1).find('h2').text(987);
		          } else {
		            $num.eq(1).find('h2').text(cnt[1]);
		          }
		        }

            function cnt2Fn() {
		          cnt[2] += 5;
		          if (cnt[2] > 350) {
		            clearInterval(setId[2]);
                $num.eq(2).find('h2').text(350);
		          } else {
		            $num.eq(2).find('h2').text(cnt[2]);
		          }
		        }

            function cnt3Fn() {
		          cnt[3] += 3;
		          if (cnt[3] > 166) {
		            clearInterval(setId[3]);
                $num.eq(3).find('h2').text(166);
		          } else {
		            $num.eq(3).find('h2').text(cnt[3]);
		          }
		        }
		      

        },
        section11Fn:function(){
            var $li = $('#section11 ul li');
            var $liF = $('#section11 ul li:nth-child(1)');
            var $liS = $('#section11 ul li:nth-child(2)');
            var $h2 = $('#section11 .text-wrap .text-gap .text-content h2');
            var $p = $('#section11 .text-wrap .text-gap .text-content p');
            var $winW = $(window).innerWidth();
            var $imgW = $('#section11 ul li .img-wrap img').innerWidth();
            var $imgH = $('#section11 ul li .img-wrap img').innerHeight();
            var h2FontSizeRate = $imgW * 0.040885;
            var pFontSizeRate = $imgW * 0.042038;

            function resizeFn(){
                var $winW = $(window).innerWidth();
                var $imgW = $('#section11 ul li .img-wrap img').innerWidth();
                var $imgH = $('#section11 ul li .img-wrap img').innerHeight();

                    h2FontSizeRate = $imgW * 0.040885;
                    pFontSizeRate = $imgW * 0.042038;

                    $h2.css({fontSize: h2FontSizeRate });
                    $p.css({fontSize: pFontSizeRate });
                    if($winW > 767 ){
                    $li.css({height: $imgH});
                    }
                    else{
                        $liF.css({height: $imgH});
                        $liS.css({height: 100 + '%'});
                    }
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn,100);

            // 페럴록스
            var $section11Top = $('#section11').offset().top;
            var $imgWrap = $('#section11 .img-wrap');
            var $backWrap = $('#section11 .back-wrap');
            var t = 0;


            function rotateFn(){
              $imgWrap.addClass('addRotate');
              $backWrap.addClass('addRotate');
            }
            $(window).scroll(function(){
              if($(this).scrollTop() == 0 ){
                t=0;
                $imgWrap.removeClass('addRotate');
                $backWrap.removeClass('addRotate');
              }
              if($(this).scrollTop() >= $section11Top){
                if( t==0 ){
                  t=1;
                  rotateFn();
                }
              }
            });
        },

        section12Fn:function(){
            var $li = $('#section12 .content-wrap ul li');
            var $h4 = $('#section12 .txt-wrap .txt-gap .txt-content h4');
            var $p = $('#section12 .txt-wrap .txt-gap .txt-content p');

            var $imgW = $('#section12 .content-wrap ul li .img-wrap img').innerWidth();
            var $imgH = $('#section12 .content-wrap ul li .img-wrap img').innerHeight();
            var h4FontSizeRate = $imgW * 0.03963964;
            var pFontSizeRate = $imgW * 0.064864865;
            
            function resizeFn(){
                var $imgW = $('#section12 .content-wrap ul li .img-wrap img').innerWidth();
                var $imgH = $('#section12 .content-wrap ul li .img-wrap img').innerHeight();
                    h4FontSizeRate = $imgW * 0.03963964;
                    pFontSizeRate = $imgW * 0.064864865;

                    $h4.css({fontSize: h4FontSizeRate });
                    $p.css({fontSize: pFontSizeRate });
                    $li.css({height: $imgH});

            }

            $(window).resize(function(){
                resizeFn();
            });

            setTimeout(resizeFn,100);
        },

        section13Fn:function(){

        },

        section14Fn:function(){
            var $li = $('#section14 ul li');
            var $liF = $('#section14 ul li:nth-child(1)');
            var $liS = $('#section14 ul li:nth-child(2)');
            var $h2 = $('#section14 .text-wrap .text-gap .text-content h2');
            var $p = $('#section14 .text-wrap .text-gap .text-content p');
            var $winW = $(window).innerWidth();
            var $imgW = $('#section14 ul li .img-wrap img').innerWidth();
            var $imgH = $('#section14 ul li .img-wrap img').innerHeight();
            var h2FontSizeRate = $imgW * 0.040885;
            var pFontSizeRate = $imgW * 0.042038;

            function resizeFn(){
                var $imgW = $('#section14 ul li .img-wrap img').innerWidth();
                var $imgH = $('#section14 ul li .img-wrap img').innerHeight();
                var $winW = $(window).innerWidth();

                    h2FontSizeRate = $imgW * 0.040885;
                    pFontSizeRate = $imgW * 0.042038;

                    $h2.css({fontSize: h2FontSizeRate });
                    $p.css({fontSize: pFontSizeRate });
                    if($winW > 767 ){
                      $li.css({height: $imgH});
                      }
                      else{
                          $liF.css({height:$imgH});
                          $liS.css({height: 100 + '%'});
                      }

                }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn,100);

            // 페럴록스
            var $section14Top = $('#section14').offset().top;
            var $imgWrap = $('#section14 .img-wrap');
            var $backWrap = $('#section14 .back-wrap');
            var t = 0;

            function rotateFn(){
              $imgWrap.addClass('addRotate');
              $backWrap.addClass('addRotate');
            }

            $(window).scroll(function(){
              if($(this).scrollTop() == 0 ){
                t=0;
                $imgWrap.removeClass('addRotate');
                $backWrap.removeClass('addRotate');
              }
              if($(this).scrollTop() >= $section14Top){
                if( t==0 ){
                  t=1;
                  rotateFn();
                }
              }
            });

        },


        section15Fn:function(){
        var $msg      = $('#section15 .msg-wrap .msg-gap p');
        var $subMit = $('#section15 .submit-btn');
        var $frmName = $('#section15 #frmName');
        var $frmEmail = $('#section15 #frmEmail');
        var $frmMessage = $('#section15 #frmmessage');
        


        $subMit.on({
          click:function(e){
            e.preventDefault();


            $frmName.removeClass('addajax');
            $frmEmail.removeClass('addajax');
            $frmMessage.removeClass('addajax');

            var $frmNameVal = $('#section15 #frmName').val();
            var $frmEmailVal = $('#section15 #frmEmail').val();
            var $frmMessageVal = $('#section15 #frmmessage').val();
            var $frmSelectVal = $('#section15 #frmSelect option:selected').val();

            if($frmNameVal == ''){
              $frmName.addClass('addajax');
              return false;

            }else if($frmEmailVal == ''){
              $frmEmail.addClass('addajax');
              return false;

            }else if($frmMessageVal == ''){
              $frmMessage.addClass('addajax');
              return false;
              
            }else{
              $frmName.removeClass('addajax');
              $frmEmail.removeClass('addajax');
              $frmMessage.removeClass('addajax');
              


            $.ajax({
              url:'./php/insert_form.php',
              type:'POST',
              data:{
                name : $frmNameVal,
                email : $frmEmailVal,
                sel : $frmSelectVal,
                message :$frmMessageVal
              },
              success: function(result){
                $msg.addClass('addSuccess');
                $msg.html(result);
                $msg.fadeIn(1000);
                setTimeout(msgFn, 6000);

                function msgFn(){
                  $frmName.val('');
                  $frmEmail.val('');
                  $frmMessage.val('');
                  $msg.html('');

                  $frmName.removeClass('addajax');
                  $frmEmail.removeClass('addajax');
                  $frmMessage.removeClass('addajax');

                  $msg.fadeOut(1000);
                  $frmName.focus();
                }
              },
              error: function(){
                console.log('AJAX 전송 실패!!!');
                $msg.removeClass('addSuccess');
                $msg.fadeIn(1000);
                $msg.html(' Validation errors occurred. Please confirm the fields and submit it again.');
                }
              })
            }
          }
        })
      },

        footerFn:function(){

        }
    } //객체 끝


    brando.init();

})(jQuery);