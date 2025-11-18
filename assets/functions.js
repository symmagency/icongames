$('.header-content .mini-cart-holder').before(`
    <div class="icon-search i-s-header"></div>
`);

$('.icon-search.i-s-header').click(function(){
    
$('.holder-search').toggleClass('open');
    
});