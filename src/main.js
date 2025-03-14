document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

            if (aba) {
                escondeTodasAbas();
                aba.classList.add('shows__list--is-active');
                removeBotaoAtivo();
                botao.target.classList.add('shows__tabs__button--is-active');
            }
        });
    }
});

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    buttons.forEach(button => button.classList.remove('shows__tabs__button--is-active'));
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    tabsContainer.forEach(tab => tab.classList.remove('shows__list--is-active'));
}
