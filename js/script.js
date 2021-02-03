$(function(){
    
    // アコーディオン（faq）
    $(".faq-table dd:not(:first)").css("display","none");
    $(".faq-table dl dt").click(function(){
        $("+dd",this).slideToggle(500);
        
        return false;
    });
   
});

$(function(){
     // スクロール
    // ナビゲーションをクリック
    $('a[href^="#"]:not([href^="#acc"])').click(function(){
        // 移動先のコンテンツの位置を取得
        var target = $($(this).attr("href")).offset().top;

        // 130px減らす 
        target -= 130;
        //コンテンツへスクロール
        $("html, body").animate({scrollTop: target}, 500);

        return false;
    });
});

// お問い合わせ
$(document).ready(function(){

    const $submitBtn = $('#js-submit');
    $('#form input,#form textarea').on('change', function(){
        if(
            $('#form input[type="text"]').val() !== "" &&
            $('#form input[type="mail"]').val() !== "" &&
            $('#form input[type="checkbox"]').val() !== "" &&
            $('#form #privacyCheck').prop('checked') === true 
        ) {
            $submitBtn.prop('disabled', false);
        } else {
            $submitBtn.prop('disabled', true);
        }
    });
});

$(function () {
    $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
      $('.header__list , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
    })
  });
