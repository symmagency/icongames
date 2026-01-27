$(document).ready(function(){

function tryInsertIconSearch(retries = 10, delay = 200) {
    if (window.innerWidth <= 768) {
        const $miniCartHolder = $('.header-content .mini-cart-holder');
        if ($miniCartHolder.length && !$('.icon-search.i-s-header').length) {
            $miniCartHolder.before(`
                <div class="icon-search i-s-header"></div>
            `);
            $('.icon-search.i-s-header').on('click', function(){
                $('.holder-search').toggleClass('open');
            });
        } else if (!$miniCartHolder.length && retries > 0) {
            setTimeout(function() {
                tryInsertIconSearch(retries - 1, delay);
            }, delay);
        }
    }
}

$('.footer .icon-security').after(`
    <a href="https://transparencyreport.google.com/safe-browsing/search?url=https:%2F%2Fwww.icongamesstore.com.br%2F&hl=en"><img src="https://symmagency.github.io/icongames/assets/google-s-b.webp" alt="Google Safe Browsing"/></a>
    <img src="https://symmagency.github.io/icongames/assets/selo-protegido.webp" alt="Site protegido"/>
`);

// Executa na inicialização e re-executa ao redimensionar a janela (apenas para inserir, não duplicar)
$(document).ready(function () {
    tryInsertIconSearch();
});

$(window).on('resize', function () {
    // Remove o botão se ficar maior que 768px, evita duplicação se reaparecer
    if (window.innerWidth > 768) {
        $('.icon-search.i-s-header').remove();
    } else {
        tryInsertIconSearch();
    }
});


    function moveDiscountTag() {
        $('.box-product').each(function () {
            const $discount = $(this).find('.holder-image .discount-tag');
            const $target = $(this).find('.product-prices');
            if ($discount.length && $target.length && !$target.find('.discount-tag').length) {
                $target.append($discount);
            }
        });
    }

    moveDiscountTag();
    setTimeout(moveDiscountTag, 500); // tenta novamente após 500ms, em caso de renderização tardia

    $('.product-specifications').append($('.product-specifications > .container:first-child'));

    function tryRepositionElements(retries = 10, delay = 200) {

        if (window.innerWidth <= 768) {
            return; // Só executa acima de 768px
        }
        
        const $spec = $('.product-specifications');
        const $mainImages = $('.main-product-images');
        const $collection = $('.product .collection');
        const $reviews = $('.product-reviews');

        if (
            $spec.length &&
            $mainImages.length &&
            $collection.length &&
            $reviews.length
        ) {
            $mainImages.append($spec);
            $mainImages.append($collection);
            $mainImages.append($reviews);
        } else if (retries > 0) {
            setTimeout(function() {
                tryRepositionElements(retries - 1, delay);
            }, delay);
        }
    }

    tryRepositionElements();

});