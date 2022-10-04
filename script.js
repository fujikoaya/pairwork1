$(function () {
    $('.slider-1').slick({
        arrows: false,
        autoplay: true,
        

    });
    
    $('.button1').on('click',function () {
        $('.balloon1-top').slideToggle('.balloon1-top1')
    })

    
    
    $('.logo').fadeIn(2000);

    // ここからが藤井です。

    function ScrollTimelineAnime() {
        $('.timeline li').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            var startPoint = 100;
            if (scroll >= elemPos - windowHeight - startPoint) {
                console.log("bingo");
                var H = $(this).outerHeight(true)
                var percent=(scroll+startPoint-elemPos)/(H/2) * 100;
                if (percent > 100) {
                    percent = 100;
                }
                $(this).children('.border-line').css({
                    height: percent + "%", //CSSでパーセント指定
                });
            }
        });
    }
    $(window).on('scroll', function () {
        ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
    });
    $(window).on('load', function () {
        ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
    });

});