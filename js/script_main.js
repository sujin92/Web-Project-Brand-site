//풀페이지 스크롤
$(function(){
    $('#fullpage').fullpage({
        fingersonly: true,
        anchors:['firstPage','secondPage','thirdPage','fourthPage','fifthPage','sixthPage','seventhPage'],
        menu:'.rightNav',
        afterLoad: function(anchorLink, index){
            if(index == 2){
                $('.count').counterUp({delay: 10,time: 550});
                }
            if(index == 3){
                $('.count2').counterUp({delay: 10,time: 550});
            }
        }
    });
});

//GNB
$(function(){
    setGnb();
    function setGnb(){
        $('.innerHeader .gnb  li  a').on('mouseenter focus', function(){
            $('.innerHeader ').addClass('on');
            $('.innerHeader .gnb > li > .subMenu').addClass('on');
        });
        $('header').on('mouseleave', function(){
            $('.innerHeader ').removeClass('on');
            $('.innerHeader .gnb > li > .subMenu').removeClass('on');
        });
    }
});

//이미지슬라이드
$(function(){
    $('.visual').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay : true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplaySpeed : 3000,
        customPaging: function(slider, i){
            var tit = $(slider.$slides[i]).find('.dot').html();
            return '<div class="pager-tit" class= "+ i +">'+ tit + '</div>';     
        }         
    });
});

$(function(){
    var winW = $(window).width();
    var winH = $(window).height();
         list = $('.visual .list');
    list.css({width: winW+ 'px', height:winH+ 'px'});
});

 









 