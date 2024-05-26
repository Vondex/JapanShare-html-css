// Скрипт за галерията от снимки с Popup картинки - при кликване върху картинката, тя се визуализира на екрана в по-голям размер
document.querySelectorAll('.photos img').forEach(image => {

    image.onclick = () => {
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup img').src = image.getAttribute('src');

    }

    document.querySelector('.popup span').onclick = () => {
        document.querySelector('.popup').style.display = 'none';
    }
})