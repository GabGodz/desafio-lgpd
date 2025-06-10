// array para armazenar as imagens do carrossel
let carouselArr = [];

// classe para controle do carrossel
class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        if (arr) {
            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); // Inicia o carrossel
                Carousel._interval = setInterval(function() { Carousel.Next(); }, 2000);
            }
        } else {
            throw "É necessário fornecer um array de imagens para iniciar o carrossel.";
        }
    }

    static Next() {
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }

        const carousel = document.getElementById('carousel');
        const carouselTitle = document.getElementById('carousel-title');
        const currentImage = carouselArr[Carousel._sequence];

        carousel.innerHTML = `<a href="${currentImage.url}"><img src="img/${currentImage.image}" alt="${currentImage.title}"></a>`;
        carouselTitle.innerHTML = `<h2>${currentImage.title}</h2>`;

        Carousel._sequence++;
    }
}
