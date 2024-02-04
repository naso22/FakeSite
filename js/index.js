$(function () {
	$('.Toggle').on("click", function () {
		$('.nav').toggleClass('open');  // メニューにopenクラスをつけ外しする
	});

$('.slide-items').slick({
	dots:true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows:true ,
});

$(window).on("scroll", function () {
  // ウィンドウのスクロール位置を取得
  const scrollTop = $(this).scrollTop();

  // スクロール位置が一番上に戻ったら
  if (scrollTop === 0) {
      // ヘッダーからクラスを削除
      $(".js-header").removeClass("headerColorScroll");
  } else {
      // それ以外の場合はクラスを追加
      $(".js-header").addClass("headerColorScroll");
  }
});


});
