const imageSources = [
  {
    src: "https://fastly.picsum.photos/id/767/3069/2048.jpg?hmac=5aQckwajUtOqyIEjmahc8j-MIxh1jpcg0v23nrzoPY0",
    type: "image/jpg",
  },
  {
    src: "https://fastly.picsum.photos/id/984/4000/2248.jpg?hmac=fctR3ldHCUSxlN-1swyxlT930oQJ1IqAAkGfc-4Sk0o",
    type: "image/jpg",
  },
  {
    src: "https://fastly.picsum.photos/id/992/4000/2660.jpg?hmac=4ChuOvJxZM-R3_XqA5OuNvUZvdqa87j3R01FIvikB7U",
    type: "image/jpg",
  },
  // Add more image sources as needed
];

function changeRandomImage() {
  const randomIndex = Math.floor(Math.random() * imageSources.length);
  const randomPicture = document.querySelector(".hero.block  picture");
  const randomImage = randomPicture.querySelector("img");
  const sourceElements = randomPicture.querySelectorAll("source");

  // Update the src and type attributes for the <source> elements
  sourceElements.forEach((source, index) => {
    source.srcset = imageSources[randomIndex].src;
    source.type = imageSources[randomIndex].type;
  });

  // Update the src attribute for the <img> element
  randomImage.src = imageSources[randomIndex].src;
}

// Change the image source every 5 seconds
setInterval(changeRandomImage, 1000);
