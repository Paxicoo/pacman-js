
const canvas = document.getElementById('canvas');
const canvasContext = canvas.getContext('2d');

const pacmanFrame = document.getElementById("animation");
const ghostFrame = document.getElementById("ghosts");

let createRect = (x,y,width,height,color) => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x,y,width,height);
}

let map = [
    {1,1,1,1,1}
// original map, with 1's being walls and 2's being the empty space

    

]

