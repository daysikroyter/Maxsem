$(function () {
  $('.tab').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

  });

  $('.product-item__favorite').on('click', function () {
    $(this).toggleClass('product-item__favorite--active');
  });

  $('.promo__list').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true
  });

  $('.product__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev" type="button"><img src="images/prev-black-arrow.svg" alt="arrow-prev"></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext" type="button"><img src="images/next-black-arrow.svg" alt="arrow-next"></button>'
  });
});