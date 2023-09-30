//this is the js for showing photos
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const galleryContainer = document.querySelector('.gallery-container');
const galleryImages = document.querySelectorAll('.gallery-image');
const captionText = document.getElementById('caption');


let currentImageIndex = 0;

//this is the monitoring of previous buttons and define the animination
prevButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;

  galleryContainer.scrollBy({
    left: -galleryContainer.offsetWidth,
    behavior: 'smooth'
  });

  // update the intor text
  const currentImage = galleryImages[currentImageIndex];
  captionText.innerText = currentImage.alt;
});

//this is the monitoring of next buttons and define the animination
nextButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;

  galleryContainer.scrollBy({
    left: galleryContainer.offsetWidth,
    behavior: 'smooth'
  });

  const currentImage = galleryImages[currentImageIndex];
  captionText.innerText = currentImage.alt;
});

//when click on the pic, it will open a new window that lead to original website.
galleryImages.forEach(image => {
  const index = image.dataset.index;
  image.addEventListener('click', () => {
    switch (index) {
      case '1':
        window.open('https://krollermuller.nl/en/hans-bollongier-still-life-of-flowers');
        break;
  
      case '2':
        window.open('https://krollermuller.nl/en/vincent-van-gogh-roses-and-peonies');
        break;

      case '3':
        window.open('https://krollermuller.nl/en/jan-zandleven-gingerjar-with-pink-flowers');
        break;
      
      case '4':
        window.open('https://krollermuller.nl/en/jean-francois-raffaelli-wild-flowers');
        break;

      case '5':
        window.open('https://www.vangoghmuseum.nl/en/collection/s0144V1962');
        break;

      case '6':
        window.open('https://www.vangoghmuseum.nl/en/collection/s0180V1962');
        break;

      case '7':
        window.open('https://www.vangoghmuseum.nl/en/collection/s0050V1962');
        break;

      case '8':
        window.open('https://www.vangoghmuseum.nl/en/collection/s0039V1962');
        break;

      case '9':
        window.open('https://www.vangoghmuseum.nl/en/collection/s0109V1962');
        break;

      case '10':
        window.open('https://www.vangoghmuseum.nl/en/collection/s0190V1962');
        break;

      default:
        break;
    }
  });
});
