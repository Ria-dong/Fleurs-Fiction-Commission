var paper = document.querySelector('.paper');
var sizeL = false;

// listen to the click event
paper.addEventListener('click', function() {
      if (sizeL) {
      /// if the card is displayed, click to close
      paper.style.width = '60px';
      paper.style.height = '200px';
      paper.style.left = '20px';
      paper.style.top = '200px';
      paper.style.background = 'url("examples/card/w_example1_S.jpg")';
      paper.style.backgroundSize = '60px 200px';
      sizeL = false;
} else {
      // if the card is not displayed, click to expand and display
      paper.style.width = '400px';
      paper.style.height = '600px';
      paper.style.position = 'absolute';
      paper.style.left = '50%';
      paper.style.top = '50%';
      paper.style.transform = 'translate(-50%, -50%)'; 
      paper.style.background = 'url("examples/card/w_example1_L.jpg")';
      paper.style.backgroundSize = '400px 600px'; 
      intro.style.visibility = 'hidden';
      sizeL = true;
}
});