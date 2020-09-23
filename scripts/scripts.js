(function () {
  // Определяем диапазон планшета
  let endMobile = 560;
  let windowWidth = $(window).width();
  // Фабрика промо слайдера
  function reviewsSlider(element) {
    const slider = $(element);
    if (slider) {
      $(slider).slick({
        slidesToShow: 1,
        arrows: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-arrow-prev"><span class="visually-hidden">Предыдущий слайд</span><svg class="slick-arrow-icon" width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8818 0.999999L2 13.6302L14.8818 26.2605" stroke-width="2"/></svg></button>',
        nextArrow: '<button type="button" class="slick-arrow-next"><span class="visually-hidden">Следующий слайд</span><svg class="slick-arrow-icon" width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999961 0.999999L13.8817 13.6302L0.999961 26.2605" stroke-width="2"/></svg></button>'
      });
    }
  }

  if (windowWidth <= endMobile) {
    reviewsSlider('.js--slider');
  }

  // Открытие мобильного меню
  function openMobileMenu(trigger, destination) {
    $(trigger).on( 'click', function(){
      $(this).toggleClass('active');
      $(destination).toggleClass('open');
      $('body').toggleClass('overflow');
      return false;
    });
  }
  openMobileMenu('.js--menu-button', '.js--menu-wrapper');
})();
