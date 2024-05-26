// Скрипт за смяна на цвета на фона на Header-a при скрол

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

// Ако window.scrollY (скролът е по вертикала) е по - голямо от 0 (т.е., потребителят е скролнал страницата), 
// тогава се добавя класът "scrolled" към елемента с таг < header > и се променя стилизацията на header-a.
// Ако window.scrollY е 0 (т.е., потребителят е в горната част на страницата), 
// класът "scrolled" се премахва от елемента с таг < header >.