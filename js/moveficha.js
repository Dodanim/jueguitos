var x = -5, y = 570;


function mover1() {

var img = document.getElementById("ima")
var canvas = document.getElementById("imagen");
var ctx=canvas.getContext("2d");
ctx.clearRect(0,0,1500,1500);//limpia todo el canvas

ctx.drawImage(img,x,y);//dibuja la imagen

	
}

function whichButton(event){

if(event.keyCode=='39'){//para la tecla de la derecha

x=x+80;//mueve la nave 5 pixeles a la derecha

mover1();

}

if(event.keyCode=='37'){//para la tecla de la izquierda
x=x-80;//
//x=x-5;//mueve la nave 5 pixeles a la izquierda

mover1();

}

if(event.keyCode=='38'){//para la tecla de arriba

y=y-80;//sube la imagen 5 pixeles

mover1();

}

if(event.keyCode=='40'){// para la tecla hacia abajo

y=y+80;//baja la imagen 5 pixeles

mover1();


}
}





window.onload = mover1();
