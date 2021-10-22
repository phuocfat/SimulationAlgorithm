let ALdone = false;
let Al;
let sel = document.querySelector('.select-alt');
let countSwap = document.querySelector('.countSwap');
let condition = document.querySelector('.condition');

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  frameRate(10);
  Al = new Sort(20, 20, windowWidth * 0.8, windowHeight * 0.3);
  Al.shuffle(); 
  condition.classList.toggle('active');
  countSwap.classList.toggle('active');
}
function draw(a) {
    background('white');
    ALdone = Al.BubbleSort();
}
