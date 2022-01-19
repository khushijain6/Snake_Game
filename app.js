const canvas = document.getElementById('canvas');
//create rendering context -> offers many methods to draw on surface
const pen = canvas.getContext('2d');
pen.fillStyle = 'red';

// pen.fillRect(100,100,180,90);


let init_x=50;
let init_y=50;
//THIS IS GOING TO INITIALISE THE GAME
function init() {
    pen.fillRect(init_x,init_y,50,50);
}


//UPDATE THE PROPERTIES OF A GAME
function update() {
    init_x += 50;
    // init_y += 100;
}



// DRAW SOMETHING ON THE CANVAS
function draw() {
    pen.clearRect(0,0,1200,735);
    pen.fillRect(init_x,init_y,100,100);
}


//GAME LOOP
function gameLoop() {
    console.log('Game Loop');
    update();
    draw();
}

init();
const id = setInterval(gameLoop,200);
// clearInterval(id)