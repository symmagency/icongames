// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o elemento .mini-cart-holder
    const miniCartHolder = document.querySelector('.mini-cart-holder');
    
    // Seleciona o elemento .holder-search
    const holderSearch = document.querySelector('.holder-search');
    
    if (miniCartHolder && holderSearch) {
        // Fecha o .holder-search inicialmente
        holderSearch.style.display = 'none';
        
        // Cria o botão de busca
        const searchButton = document.createElement('button');
        searchButton.className = 'search-toggle-btn';
        searchButton.innerHTML = '🔍'; // Ícone de lupa (você pode trocar por um SVG)
        searchButton.setAttribute('aria-label', 'Toggle search');
        
        // Adiciona estilos básicos ao botão
        searchButton.style.cssText = `
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 24px;
            padding: 8px;
            color: inherit;
        `;
        
        // Insere o botão antes do .mini-cart-holder
        miniCartHolder.parentNode.insertBefore(searchButton, miniCartHolder);
        
        // Adiciona o evento de click para fazer o toggle
        searchButton.addEventListener('click', function() {
            if (holderSearch.style.display === 'none') {
                holderSearch.style.display = 'block';
            } else {
                holderSearch.style.display = 'none';
            }
        });
    }
});