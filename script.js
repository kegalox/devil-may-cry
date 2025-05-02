const pizzaImages = [
    'pizza1.jpg',
    'pizza2.jpg',
    'pizza3.jpg',
    'pizza4.jpg',
    'pizza5.jpg',
    'pizza6.jpg',
    'pizza7.jpg',
    'pizza8.jpg',
    'pizza9.jpg',
    'pizza10.jpg',
    'pizza11.jpg',
    'pizza12.jpg',
    // Добавьте больше изображений по мере необходимости
];

function showRandomPizza() {
    const randomIndex = Math.floor(Math.random() * pizzaImages.length);
    const pizzaImage = document.getElementById('pizzaImage');
    pizzaImage.src = pizzaImages[randomIndex];
}

// Показать случайное изображение при загрузке страницы
window.onload = showRandomPizza;