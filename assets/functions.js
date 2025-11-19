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

// Adiciona a lógica para mover o discount-tag para dentro do product-prices, retentando até conseguir
function tryMoveDiscountTag(attempts = 10, delay = 200) {
    let movedAll = true;
    $('.box-product').each(function () {
        const discount = $(this).find('.holder-image .discount-tag');
        const target = $(this).find('.product-prices');
        if (discount.length && target.length) {
            target.append(discount);
        } else if (discount.length && !target.length) {
            movedAll = false;
        }
    });
    if (!movedAll && attempts > 0) {
        setTimeout(function () {
            tryMoveDiscountTag(attempts - 1, delay);
        }, delay);
    }
}
tryMoveDiscountTag();

});