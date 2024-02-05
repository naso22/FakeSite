$(function () {
	$('.Toggle').on("click", function () {
		$('.nav').toggleClass('open');  // メニューにopenクラスをつけ外しする
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

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 4000,
  },
  speed: 500,
  loop: true,
  effect: "fade",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
