document.body.onclick = function (event) {
    event = event || window.event;
    if (event.target.classList.contains('min-photo')) {
        // remove .active class in .goods-img-min divs
        var allDivs = document.querySelectorAll('.min-product__photo div');
        for (var i = 0; i < allDivs.length; i++) {
            allDivs[i].classList.remove('active');
        }

        document.getElementById('max-photo').src = event.target.src;
        event.target.parentElement.classList.add('active');
    }

}


$(document).ready(function() {
    $('.close__top-bar').click(function(event){
        $('.top-bar').toggleClass('active');
    })
})

$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__mobile-nav').toggleClass('active');
        $('body').toggleClass('lock');
        $('.basket__mobile').toggleClass('dn');
    })
})

$(document).ready(function() {
    $('.navigation__item-arrow-1').click(function(event){
        $('.navigation__item-preview-1,.navigation__item-content-1').toggleClass('active');
    })
    $('.navigation__item-arrow-2').click(function(event){
        $('.navigation__item-preview-2,.navigation__item-content-2').toggleClass('active');
    })
    $('.navigation__item-arrow-3').click(function(event){
        $('.navigation__item-preview-3,.navigation__item-content-3').toggleClass('active');
    })
    $('.navigation__item-arrow-4').click(function(event){
        $('.navigation__item-preview-4,.navigation__item-content-4').toggleClass('active');
    })
    $('.navigation__item-arrow-5').click(function(event){
        $('.navigation__item-preview-5,.navigation__item-content-5').toggleClass('active');
    })
})

$(document).ready(function() {
    $('.list-bulleted').click(function(event){
        $('.product-card__view-1').toggleClass('dis_n');
        $('.product-card__view-1').removeClass('dis_b');
        $('.product-card__view-2').toggleClass('dis_b');
        $('.product-card__view-2').removeClass('dis_n');
    })
    $('.list-grid').click(function(event){
        $('.product-card__view-1').toggleClass('dis_b');
        $('.product-card__view-1').removeClass('dis_n');
        $('.product-card__view-2').toggleClass('dis_n');
        $('.product-card__view-2').removeClass('dis_b');
    })
})

$(document).ready(function() {
    $('.category__button').click(function(event){
        $('.category__mobile').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('.close__category__mobile').click(function(event){
        $('.category__mobile').removeClass('active');
        $('body').removeClass('lock');
    })
})

$(document).ready(function() {
    $('.close-answer-1').click(function(event){
        $('.main-questions-1, .main-answer-1').toggleClass('active');
    })
    $('.close-answer-2').click(function(event){
        $('.main-questions-2, .main-answer-2').toggleClass('active');
    })
    $('.close-answer-3').click(function(event){
        $('.main-questions-3, .main-answer-3').toggleClass('active');
    })
    $('.close-answer-4').click(function(event){
        $('.main-questions-4, .main-answer-4').toggleClass('active');
    })
    $('.close-answer-5').click(function(event){
        $('.main-questions-5, .main-answer-5').toggleClass('active');
    })
    $('.close-answer-6').click(function(event){
        $('.main-questions-6, .main-answer-6').toggleClass('active');
    })
    $('.close-answer-7').click(function(event){
        $('.main-questions-7, .main-answer-7').toggleClass('active');
    })
    $('.close-answer-8').click(function(event){
        $('.main-questions-8, .main-answer-8').toggleClass('active');
    })
    $('.close-answer-9').click(function(event){
        $('.main-questions-9, .main-answer-9').toggleClass('active');
    })
})

$(document).ready(function() {
    $('.add-box-plus').click(function(event){
        $('.order-instruction, .add-box, .my-cart__content-right__content, .edit').toggleClass('active');
    })
    $('.add-box-minus').click(function(event){
        $('.order-instruction, .add-box, .my-cart__content-right__content, .edit').removeClass('active');
    })
})
