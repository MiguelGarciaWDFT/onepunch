//Definir canvas
const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")


//Variables globales
let frames = 0
const gravity = 0.90
const friction = 1

const playerImage = new Image()
playerImage.src = "/images/one_punch.png"



//Definir clases y sus metodos(fondos, personajes, enemigos)
class Character {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.heigth = 50;
        this.vx = 0;
        this.vy = 0;
        /*this.jumpStrength = 24;
        this.jumps = 0;
        this.jumping = false;*/
    }
    draw() {
            if (this.y >= $canvas.height - this.heigth) {
                this.y = $canvas.height - this.heigth;
                /*this.jumps = 0;
                this.jumping = false;*/
            }
            /*else {
                           this.vy += gravity;
                           this.y += this.vy;
                       }*/
            this.x += this.vx;
            this.y += this.vy;
            this.vx *= friction;
            ctx.fillRect(this.x, this.y, this.width, this.heigth);
            //ctx.drawImage(playerImage, 0, 0, this.width, this.heigth);
        }
        /*jump() {
                if (this.jumps >= 5) {
                    this.jumping = true;
                }
                if (!this.jumping) {
                    this.jumps++;
                    this.vy = -this.jumpStrength;

                }
            }*/

    moveLeft() {
        this.vx--;

    }
    moveRight() {
        this.vx++;
    }
    moveUp() {
        this.vy--;
    }
    moveDown() {
        this.vy++;
    }
    stop() {
        this.vx = 0;
        this.vy = 0;
    }
}


//Definir instancias de las clases
const cuadrito = new Character(200, 230)


//Funciones del flujo del juego
function start() {
    setInterval(() => {
        update()

    }, 1000 / 60)
}

function update() {
    //Calcular estado

    //Limpiar canvas
    clearCanvas();
    //Dibujar
    cuadrito.draw();

}

//Crear funciones de apoyo
function clearCanvas() {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height);

}

//Funcion de interaccion con el usuario
document.onkeydown = (event) => {
    switch (event.key) {
        case "ArrowLeft":
            cuadrito.moveLeft();
            break;
        case "ArrowRight":
            cuadrito.moveRight();
            break;
            /*case "ArrowUp":
            cuadrito.jump();
            break;*/
        case "ArrowUp":
            cuadrito.moveUp();
            break;
        case "ArrowDown":
            cuadrito.moveDown();
            break;
        default:
    }
};
document.onkeyup = () => {
        cuadrito.stop();
    }
    //Iniciar juego
start();