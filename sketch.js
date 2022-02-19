//APRENDER FORMAS E MISTURAR CORES//
//MISTURA DE CORES//
 
// TODAS AS VARIAVEIS//
var x = (185);
var y = (168);
var largura = 180;
var altura = 50;
var opção=1;
var tela=0;
var img;
var cont1=0;
var l1; var l2; var l3; var l4;
var cores = ['AMARELO', 'AZUL', 'VERDE', 'VERMELHO', 'ROSA', 'LILAS'];
var nivel = ['NÍVEL 1', 'NÍVEL 2', 'NÍVEL 3', 'NÍVEL 4'];

function preload() {
  img=loadImage('imagem1.jpg')
  Breno=loadImage('Breno.JPG')
  pintor=loadImage('pintor.png')
  etp1=loadImage('etp1.jpg')
  igual=loadImage('igual.png')
  errado=loadImage('errou.jpg')
  c1=loadImage('certoF1.jpg')
  c2=loadImage('c2.jpg')
  c3=loadImage('c3.jpg')
  c4=loadImage('c4.jpg')
}  

function setup() {
  createCanvas(550, 400);
    
}

function mouseClicked(){
  
    if(tela==1){
      //circulo amarelo//
  if (mouseX >= 340 && mouseX < 394 && mouseY >=150 && mouseY <210){
    l1 = 3
  cont1 = cont1 +1  
     //circulo verde//
  }else if (mouseX >= 398 && mouseX < 450 && mouseY >=150 && mouseY <210){
    l2 = 3
  cont1 = cont1 +7  
     //circulo vermelho//
  }else if (mouseX >= 452 && mouseX < 510 && mouseY >=150 && mouseY <210){
    l3 = 3
  cont1 = cont1 +3
    //botão ok//
  }else if(mouseX >= 430 && mouseX <= 510 && mouseY >= 300 && mouseY <= 375){
    cont1 = cont1 +5
     }
}     
      
    if(tela==6) {         
      //quadrado rosa//
  if(mouseX >= 335 && mouseX <= 390 && mouseY >= 150 && mouseY <= 210){
    l1 = 3
  cont1 = cont1 +7  
     //quadrado vermelho//
  }else if(mouseX >= 398 && mouseX <= 450 && mouseY >= 150 && mouseY <= 210){
    l2 = 3
  cont1 = cont1 +2  
     //quadrado azul //
  }else if(mouseX >= 462 && mouseX <= 510 && mouseY >= 150 && mouseY <= 210){
    l3 = 3
  cont1 = cont1 +4
    //botão ok//
  }else if(mouseX >= 430 && mouseX <= 510 && mouseY >= 300 && mouseY <= 375){
    cont1 = cont1 +6
     }
}    

    if(tela==8) {      
      //trinagulo amarelo//
  if(mouseX >= 335 && mouseX <= 390 && mouseY >= 150 && mouseY <= 210){
    l1 = 3
  cont1 = cont1 +11  
     //tiangulo azul//
  }else if(mouseX >= 398 && mouseX <= 450 && mouseY >= 150 && mouseY <= 210){
    l2 = 3
  cont1 = cont1 +13  
     //trinagulo lilas //
  }else if(mouseX >= 462 && mouseX <= 510 && mouseY >= 150 && mouseY <= 210){
    l3 = 3
  cont1 = cont1 +17
    //botão ok//
  }else if(mouseX >= 430 && mouseX <= 510 && mouseY >= 300 && mouseY <= 375){
    cont1 = cont1 +15
     }
}    
  
  if(tela==10) {         
      //circulo vermelho//
  if(mouseX >= 320 && mouseX <= 373 && mouseY >= 150 && mouseY <= 210){
    l1 = 3
  cont1 = cont1 +12  
     //circulo verde//
  }else if(mouseX >= 377 && mouseX <= 423 && mouseY >= 150 && mouseY <= 210){
    l2 = 3
  cont1 = cont1 +14  
     //circulo amarelo //
  }else if(mouseX >= 425 && mouseX <= 475 && mouseY >= 150 && mouseY <= 210){
    l3 = 3
  cont1 = cont1 +20
    //circulo azul//
  }else if(mouseX >= 475 && mouseX <= 520 && mouseY >= 150 && mouseY <= 210){
    l4 = 3
  cont1 = cont1 +16
    //botão ok//
  }else if(mouseX >= 430 && mouseX <= 510 && mouseY >= 300 && mouseY <= 375){
    cont1 = cont1 +18
     }
}  
}  

function draw() {
  background(img, 220);  
  if(tela==0)
     menu();
  if(tela==1)
     Fase1()
  if(tela==2)
     INSTRUÇÕES()
  if(tela==3)
     CRÉDITOS()
  if(tela==4)
     acertou()
  if(tela==5)
     errou()
  if(tela==6)
     Fase2()
  if(tela==7)
     acertou2()
  if(tela==8)
     fase3()
  if(tela==9)
     acertou3()
  if(tela==10)
     fase4()
  if(tela==11)
     acertou4()
}

function menu() {
  image(pintor,20,-15,480,470)
  fill(192,192,192)
  rect(x, y, largura, altura, 150, 50)
  stroke(128,0,0)
  strokeWeight(3);
  textSize(25)
  textStyle(ITALIC);
  fill(0,0,255)
  text('Jogar', 240, 200)
  fill(0,255,0)
  text('Informações', 205, 260)
  fill(255,255,0)
  text('Créditos', 225, 320)
  
  fill(70,130,180)
  ellipse(420, 276, 55, 55);
  fill(255,0,0)
  rect(475,252,50,50)
  fill(255,165,0)
  triangle(483, 214, 465, 278, 419, 235);
  
}

function Fase1() {
  background(etp1)
  image(igual,110,220,60,40)
  
  //Painel da informação//
  strokeWeight(1)
  textSize(20)
  stroke(2)
  fill(248,248,255)
  rect(25,25,247,85)
  fill(47,79,79)
  noStroke()
  textStyle(BOLD);
  text('MISTURE AS CORES', 35, 50)
  text('DADAS PARA FORMAR', 35, 75)
  text('A COR PEDIDA:', 35, 100)
  textSize(10)
  fill(0)
  text('USE O MOUSE', 15, 390)
  
  textSize(20)
  stroke(0)
  fill('red')
  text(nivel[0], 450, 30)
  
  //botão ok//
  stroke(0)
  strokeWeight(1);
  noFill()
  if(mouseX >= 430 && mouseX <= 510 && mouseY >= 300 && mouseY <= 375){
  fill('PowderBlue')
    }else{  
  noFill()
    }
  stroke('black')
  ellipse(470, 340, 50, 50);
  
  textSize(27)
  fill('black')
  text('OK', 448, 350 )
  
  //circulo laranja//
  noStroke()
  textSize(15)
  fill(49,49,49)
  text('CIRCULO', 35, 170 )
  text('LARANJA', 35, 185 )
  stroke(2)
  fill(255,69,0)
  ellipse(70, 240, 100, 100);
  stroke(0)
  strokeWeight(2);
  noFill()
  ellipse(195, 238, 50, 50);
  noFill()
  ellipse(225, 238, 50, 50);
  
  
  //painel das cores//
  fill('Sienna')
  rect(325,125,200,100)
  
  //cores do painel//
  strokeWeight(1)
  textSize(10)
  fill('#ffdb58')
  text(cores[0], 340, 140 )
  if(mouseX >= 340 && mouseX <= 394 && mouseY >= 150 && mouseY <= 210){
       fill('yellow')
    }else{
       fill('#ffdb58')
    }
  strokeWeight(l1)
  ellipse(368, 180, 50, 50)
  strokeWeight(1)
  fill('green')
  text(cores[2], 408, 140 )
  if(mouseX >= 398 && mouseX <= 450 && mouseY >= 150 && mouseY <= 210){
       fill('Lime')
    }else{
       fill('green')
    }
  strokeWeight(l2)
  ellipse(425, 180, 50, 50);
  strokeWeight(1)
  fill(220,20,60)
  text(cores[3], 453, 140 )
  if(mouseX >= 452 && mouseX <= 510 && mouseY >= 150 && mouseY <= 210){
       fill('red')
    }else{
       fill('Crimson')
    }
  strokeWeight(l3)
  ellipse(482, 180, 50, 50);
strokeWeight(1)
  //botão ok//
 fill('PaleGoldenrod');
 noStroke(0);
 translate(470, 340);
 i=0
 while (i<31)
 {
   ellipse(18, 28, 5, 14);
  rotate(PI|15);
  
  i++;
 }
// COMANDO QUE IDENTIFICA QUAL BLOCO FOI CLICADO E SELECIONADO//
  if(cont1 < 0 || cont1 == 1){
    strokeWeight(1)
    ellipse(368, 180, 50, 50);//amarelo//
}
  if(cont1 == 4){
    ellipse(368, 180, 50, 50);//amarelo//
    ellipse(425, 180, 50, 50);//verde//
}
  if(cont1 == 9){
    ellipse(368, 180, 50, 50);//amarelo//
    ellipse(425, 180, 50, 50);//verde//
    ellipse(482, 180, 50, 50);//vermelho//
}
  if(cont1 == 16){
    ellipse(368, 180, 50, 50);//amarelo//
    ellipse(425, 180, 50, 50);//verde//
    ellipse(482, 180, 50, 50);//vermelho//
    ellipse(470, 340, 50, 50);//ok//
}
    
// COMANDO QUANDO ERRAR //
    if(cont1 != 0 && cont1 != 1 && cont1 != 4 && cont1 != 9 && cont1 !=3) {
    tela=5
      
    }
// COMANDO PARA VITÓRIA //    
    if(cont1 == 9){
    tela=4
      
    }
  }   

function Fase2() {
  background(etp1)
  image(igual,110,220,60,40)
  
  //Painel da informação//
  strokeWeight(1)
  textSize(20)
  stroke(2)
  fill(248,248,255)
  rect(25,25,247,85)
  fill(47,79,79)
  noStroke()
  textStyle(BOLD);
  text('MISTURE AS CORES', 35, 50)
  text('DADAS PARA FORMAR', 35, 75)
  text('A COR PEDIDA:', 35, 100)
  textSize(10)
  fill(0)
  text('USE O MOUSE', 15, 390)
  
  textSize(20)
  stroke(0)
  fill('red')
  text(nivel[1], 450, 30)
  
  //botão ok//
  stroke(0)
  strokeWeight(1);
  noFill()
  if(mouseX >= 440 && mouseX <= 500 && mouseY >= 300 && mouseY <= 375){
  fill('PowderBlue')
    }else{  
  noFill()
    }
  stroke('black')
  ellipse(470, 340, 50, 50);
  
  textSize(27)
  fill('black')
  text('OK', 448, 350 )
  
  //quadrado roxo//
  noStroke()
  textSize(15)
  fill(49,49,49)
  text('QUADRADO', 25, 170 )
  text('ROXO', 47, 185 )
  stroke(2)
  fill(139,0,139)
  rect(25, 194, 90, 90);
  stroke(0)
  strokeWeight(2);
  noFill()
  rect(165, 200, 50, 50);
  noFill()
  rect(192, 228, 50, 50);
  
  
  //painel das cores//
  fill('Sienna')
  rect(325,125,200,100)
  
  //cores do painel//
  strokeWeight(1)
  textSize(10)
  fill(225,20,147)
  text(cores[4], 348, 140 )
  if(mouseX >= 335 && mouseX <= 390 && mouseY >= 150 && mouseY <= 210){
       fill(225,105,180)
    }else{
       fill(225,20,147)
    }
  strokeWeight(l1)
  rect(340, 155, 50, 50)
  strokeWeight(1)
  fill('crimson')
  text(cores[3], 395, 140 )
  if(mouseX >= 398 && mouseX <= 450 && mouseY >= 150 && mouseY <= 210){
       fill('red')
    }else{
       fill('Crimson')
    }
  strokeWeight(l2)
  rect(400, 155, 50, 50);
  strokeWeight(1)
  fill('RoyalBlue')
  text(cores[1], 470, 140 )
  if(mouseX >= 462 && mouseX <= 510 && mouseY >= 150 && mouseY <= 210){
       fill('Blue')
    }else{
       fill('RoyalBlue')
    }
  strokeWeight(l3)
  rect(460, 155, 50, 50);
strokeWeight(1)
  //botão ok//
 fill('PaleGoldenrod');
 noStroke(0);
 translate(470, 340);
 i=0
 while (i<31)
 {
   ellipse(18, 28, 5, 14);
  rotate(PI|15);
  
  i++;
 }
// COMANDO QUE IDENTIFICA QUAL BLOCO FOI CLICADO E SELECIONADO//
  if(cont1 < 0 || cont1 == 2){
    strokeWeight(3)
    rect(340, 155, 50, 50);//rosa//
}
  if(cont1 == 6){
    rect(340, 155, 50, 50);//rosa//
    rect(400, 155, 50, 50);//vermelho//
}
  if(cont1 == 12){
    rect(340, 155, 50, 50);//rosa//
    rect(400, 155, 50, 50);//vermelho//
    rect(460, 155, 50, 50);//azul//
}
  if(cont1 == 20){
    rect(340, 155, 50, 50);//rosa//
    rect(400, 155, 50, 50);//vermelho//
    rect(460, 155, 50, 50);//azul//
    ellipse(470, 340, 50, 50);//ok//
}
    
// COMANDO QUANDO ERRAR //
    if(cont1 != 0 && cont1 != 2 && cont1 != 6 && cont1 != 12 && cont1 !=4) {
      tela=5
    }
    
// COMANDO PARA VITÓRIA //    
    if(cont1 == 12){
      tela=7
    }  
}

function fase3() {
  background(etp1)
  image(igual,110,220,60,40)
  
  //Painel da informação//
  strokeWeight(1)
  textSize(20)
  stroke(2)
  fill(248,248,255)
  rect(25,25,247,85)
  fill(47,79,79)
  noStroke()
  textStyle(BOLD);
  text('MISTURE AS CORES', 35, 50)
  text('DADAS PARA FORMAR', 35, 75)
  text('A COR PEDIDA:', 35, 100)
  textSize(10)
  fill(0)
  text('USE O MOUSE', 15, 390)
  
  textSize(20)
  stroke(0)
  fill('red')
  text(nivel[2], 450, 30)
  
  //botão ok//
  stroke(0)
  strokeWeight(1);
  noFill()
  if(mouseX >= 440 && mouseX <= 500 && mouseY >= 300 && mouseY <= 375){
  fill('PowderBlue')
    }else{  
  noFill()
    }
  stroke('black')
  ellipse(470, 340, 50, 50);
  
  textSize(27)
  fill('black')
  text('OK', 448, 350 )
  
  //quadrado roxo//
  noStroke()
  textSize(15)
  fill(49,49,49)
  text('TRIANGULO', 25, 170 )
  text('VERDE', 45, 185 )
  stroke(2)
  fill(50,205,50)
  triangle(72,188,125,277,25,277);
  stroke(0)
  strokeWeight(2);
  noFill()
  triangle(190,190,161,250,220,250);
  noFill()
  triangle(215,207,185,268,245,268);
  
  
  //painel das cores//
  fill('Sienna')
  rect(325,125,200,100)
  
  //cores do painel//
  strokeWeight(1)
  textSize(10)
  fill('#EEEE00')
  text(cores[0], 340, 140 )
  if(mouseX >= 335 && mouseX <= 390 && mouseY >= 150 && mouseY <= 210){
       fill( '#FFFF00')
    }else{
       fill('#EEEE00')
    }
  strokeWeight(l1)
  triangle(363,155,388,204,339,204);
  strokeWeight(1)
  fill	(0,206,209)
  text(cores[1], 410, 140 )
  if(mouseX >= 398 && mouseX <= 450 && mouseY >= 150 && mouseY <= 210){
       fill	(0,206,209)
    }else{
       fill(0,255,255)
    }
  strokeWeight(l2)
  triangle(424,154,400,204,449,204);
  strokeWeight(1)
  fill(186,85,211)
  text(cores[5], 470, 140 )
  if(mouseX >= 462 && mouseX <= 510 && mouseY >= 150 && mouseY <= 210){
       fill(218,112,214)
    }else{
       fill(186,85,211)
    }
  strokeWeight(l3)
  triangle(483,155,460,204,509,204);
strokeWeight(1)
  //botão ok//
 fill('PaleGoldenrod');
 noStroke(0);
 translate(470, 340);
 i=0
 while (i<31)
 {
   ellipse(18, 28, 5, 14);
  rotate(PI|15);
  
  i++;
 }
// COMANDO QUE IDENTIFICA QUAL BLOCO FOI CLICADO E SELECIONADO//
  if(cont1 < 0 || cont1 == 11){
    strokeWeight(3)
    rect(340, 155, 50, 50);//amarelo//
}
  if(cont1 == 24){
    rect(340, 155, 50, 50);//amarelo//
    rect(400, 155, 50, 50);///azul//
}
  if(cont1 == 39){
    rect(340, 155, 50, 50);//amarelo//
    rect(400, 155, 50, 50);//azul//
    rect(460, 155, 50, 50);//lilas//
}
  if(cont1 == 56){
    rect(340, 155, 50, 50);//amarelo//
    rect(400, 155, 50, 50);//azul//
    rect(460, 155, 50, 50);//lilas//
    ellipse(470, 340, 50, 50);//ok//
}
  // COMANDO QUANDO ERRAR //
    if(cont1 != 0 && cont1 != 11 && cont1 != 24 && cont1 != 39 && cont1 !=13) {
    tela=5
      
    }
// COMANDO PARA VITÓRIA //    
    if(cont1 == 39){
    tela=9
    }   
}

function fase4() {
  background(etp1)
  image(igual,110,220,60,40)
  
  //Painel da informação//
  strokeWeight(1)
  textSize(20)
  stroke(2)
  fill(248,248,255)
  rect(25,25,247,85)
  fill(47,79,79)
  noStroke()
  textStyle(BOLD);
  text('MISTURE AS CORES', 35, 50)
  text('DADAS PARA FORMAR', 35, 75)
  text('A COR PEDIDA:', 35, 100)
  textSize(10)
  fill(0)
  text('USE O MOUSE', 15, 390)
  
  textSize(20)
  stroke(0)
  fill('red')
  text(nivel[3], 450, 30)
  
  //botão ok//
  stroke(0)
  strokeWeight(1);
  noFill()
  if(mouseX >= 430 && mouseX <= 510 && mouseY >= 300 && mouseY <= 375){
  fill('PowderBlue')
    }else{  
  noFill()
    }
  stroke('black')
  ellipse(470, 340, 50, 50);
  
  textSize(27)
  fill('black')
  text('OK', 448, 350 )
  
  //circulo VERDE PRIMAVERA//
  noStroke()
  textSize(15)
  fill(49,49,49)
  text('CIRCULO', 32, 160 )
  text('VERDE', 40, 174 )
  text('FANTASMA', 28, 188 )
  stroke(2)
  fill(0,255,127)
  ellipse(70, 243, 100, 100);
  stroke(0)
  strokeWeight(2);
  noFill()
  ellipse(195, 238, 50, 50);
  noFill()
  ellipse(225, 238, 50, 50);
  noFill()
  ellipse(210, 213, 50, 50);
  
  
  //painel das cores//
  fill('Sienna')
  rect(320,125,209,100)
  
  //cores do painel//
  //AMARELO//
  strokeWeight(1)
  textSize(10)
  fill(255,0,0)
  text(cores[3], 322, 140 )
  if(mouseX >= 320 && mouseX <= 373 && mouseY >= 150 && mouseY <= 210){
       fill	(255,69,0)
    }else{
       fill(255,0,0)
    }
  strokeWeight(l1)
  ellipse(350, 180, 45, 45)
  //VERDE//
  strokeWeight(1)
  fill(0,255,0)
  text(cores[2], 383, 140 )
  if(mouseX >= 377 && mouseX <= 423 && mouseY >= 150 && mouseY <= 210){
       fill('ForestGreen')
    }else{
       fill(0,255,0)
    }
  strokeWeight(l2)
  ellipse(400, 180, 45, 45);
  //AMARELO//
  strokeWeight(1)
  fill('#ffdb58')
  text(cores[0], 425, 140 )
  if(mouseX >= 425 && mouseX <= 475 && mouseY >= 150 && mouseY <= 210){
       fill('yellow')
    }else{
       fill('#ffdb58')
    }
  strokeWeight(l3)
  ellipse(450, 180, 45, 45);
  //AZUL//
  strokeWeight(1)
  fill(0,0,128)
  text(cores[1], 487, 140 )
  if(mouseX >= 475 && mouseX <= 520 && mouseY >= 150 && mouseY <= 210){
       fill(0,0,255)
    }else{
       fill(0,0,128)
    }
  strokeWeight(l4)
  ellipse(500, 180, 45, 45);
  
strokeWeight(1)
  //botão ok//
 fill('PaleGoldenrod');
 noStroke(0);
 translate(470, 340);
 i=0
 while (i<31)
 {
   ellipse(18, 28, 5, 14);
  rotate(PI|15);
  
  i++;
 }
// COMANDO QUE IDENTIFICA QUAL BLOCO FOI CLICADO E SELECIONADO//
  if(cont1 < 0 || cont1 == 12){
    strokeWeight(1)
    ellipse(350, 180, 45, 45);//vermelho//
}
  if(cont1 == 26){
    ellipse(350, 180, 45, 45);//vermelho//
    ellipse(400, 180, 45, 45);//verde//
}
  if(cont1 == 42){
    ellipse(350, 180, 45, 45);//vermelho//
    ellipse(400, 180, 45, 45);//verde//
    ellipse(450, 180, 45, 45);//amarelo//
}
  if(cont1 == 60){
    ellipse(350, 180, 45, 45);//vermelho//
    ellipse(400, 180, 45, 45);//verde//
    ellipse(450, 180, 45, 45);//amarelo//
    ellipse(500, 180, 45, 45);//azul//
}
  if(cont1 == 80){
    ellipse(350, 180, 45, 45);//amarelo//
    ellipse(400, 180, 45, 45);//verde//
    ellipse(450, 180, 45, 45);//amarelo//
    ellipse(500, 180, 45, 45);//azul//
    ellipse(470, 340, 50, 50);//ok//
}
    
// COMANDO QUANDO ERRAR //
    if(cont1 != 0 && cont1 != 12 && cont1 != 26 && cont1 != 42 && cont1 != 60 && cont1 !=14 && cont1 !=16&& cont1 !=30 && cont1 !=28) {
    tela=5
      
    }
// COMANDO PARA VITÓRIA //    
    if(cont1 == 60){
    tela=11
    }
  }   

function acertou() {
  background(c1)
  
    if(mouseX >= 230 && mouseX <= 330 && mouseY >= 330 && mouseY <= 380){
       fill('pink')
      if(mouseIsPressed){
         tela=6
         cont1=0
         l1=1; l2=1; l3=1
    }  
    }else{
       fill('yellow')
    }
  rect(230,345,95,35)
  
  strokeWeight(3)
  textSize(20)
  stroke(1)
  fill('red')
  text(nivel[1], 239, 370)
  
  textSize(70)
  stroke(49,49,49)
  strokeWeight(6)
  fill('yellow')
  text('Correto!!', 145, 320)

}

function errou() {
  background(errado)
  
  if(mouseX >= 400 && mouseX <= 540 && mouseY >= 350 && mouseY <= 395){
       fill('pink')
      if(mouseIsPressed){
        cont1=0
        l1=1; l2=1; l3=1
    tela=0
    }  
    }else{
       fill('yellow')
    }
  strokeWeight(3)
  rect(400,355,140,35)
  strokeWeight(1)
  textSize(13)
  stroke(1)
  fill('red')
  text('TENTE NOVAMENTE', 405, 377)
  
  textSize(70)
  stroke(49,49,49)
  fill('yellow')
  strokeWeight(6)
  text('Oops!!', 170, 370)
  
}  

function acertou2() {
  background(c2)
  
    if(mouseX >= 230 && mouseX <= 330 && mouseY >= 330 && mouseY <= 380){
       fill('pink')
      if(mouseIsPressed){
         tela=8
         cont1=0
         l1=1; l2=1; l3=1
    }  
  
    }else{
       fill('yellow')
    }
  rect(230,345,95,35)
  strokeWeight(3)
  textSize(20)
  stroke(1)
  fill('red')
  text(nivel[2], 239, 370)
  
  textSize(70)
  stroke(49,49,49)
  strokeWeight(6)
  fill('yellow')
  text('Correto!!', 145, 320)

}

function acertou3() {
  background(c3)
  
    if(mouseX >= 230 && mouseX <= 330 && mouseY >= 330 && mouseY <= 380){
       fill('pink')
      if(mouseIsPressed){
         tela=10
         cont1=0
         l1=1; l2=1; l3=1
    }  
  
    }else{
       fill('yellow')
    }
  rect(230,345,95,35)
  strokeWeight(3)
  textSize(20)
  stroke(1)
  fill('red')
  text(nivel[3], 239, 370)
  
  textSize(70)
  stroke(49,49,49)
  strokeWeight(6)
  fill('yellow')
  text('Correto!!', 145, 320)

}

function acertou4() {
  background(c4)
  
    if(mouseX >= 210 && mouseX <= 330 && mouseY >= 330 && mouseY <= 380){
       fill('pink')
      if(mouseIsPressed){
         tela=0
         cont1=0
         l1=1; l2=1; l3=1; l4=1;
    }  
  
    }else{
       fill('yellow')
    }
  rect(210,345,125,35)
  strokeWeight(3)
  textSize(17)
  stroke(1)
  fill('red')
  text('FIM DE JOGO', 220, 370)
  
  textSize(70)
  stroke(49,49,49)
  strokeWeight(6)
  fill('yellow')
  text('Correto!!', 145, 320)

}

function INSTRUÇÕES() {
  textSize(50)
  textStyle(NORMAL)
  fill('white')
  strokeWeight(2)
  stroke(0)
  rect(45,100,460,200)
  fill(0,191,255)
  stroke(79,79,79)
  strokeWeight(6)
  text('INSTRUÇÕES', 110, 70)
  textSize(15)
  strokeWeight(3)
  fill(0,191,255)
  stroke(79,79,79)
  text('Ano: 1° ano fundamental', 190, 130)
  text(' O jogo é densenvolvido com intuito de criar as misturas dadas.', 62, 200)
  text('por formas, usando o método da soma. Quando somadas,', 75, 220)
  text('combinaram com um tiponde cor e forma certa ou errada. O jogo', 57,240)
  text('irá dificutando de acordo com o avanço das fases. Atinja o', 74,260)
  text('objetivo final.', 230,280)
  fill(0)
  noStroke()
  textSize(15)
  text('ESC para voltar', 420, 380)
  
  stroke(0)
  fill(255,165,0)
  triangle(93, 310, 72, 358, 42, 320);
  fill(70,130,180)
  ellipse(40, 357, 48, 48);
  fill(255,0,0)
  rect(84,336,45,45)

}

function CRÉDITOS() {
  image(Breno, 40,100,100,110)
  
  fill('white')
  strokeWeight(4)
  stroke(79,79,79)
  rect(145,100,300,110)
  
  fill(0,191,255)
  textSize(50)
  textStyle(NORMAL)
  stroke(79,79,79)
  strokeWeight(8)
  text('CRÉDITOS', 140, 60)
  strokeWeight(3)
  
  textSize(20)
  fill(0,191,255)
  stroke(79,79,79)
  text('Desenvolvedor : Breno Gustavo \n de Araújo Dantas', 153,125)
  text('Formando em Ciências e \n tecnologia', 153, 175);
  fill(0)
  noStroke()
  textSize(15)
  text('ESC para voltar', 420, 380)
  
  stroke(0)
  fill(255,165,0)
  triangle(93, 310, 72, 358, 42, 320);
  fill(70,130,180)
  ellipse(40, 357, 48, 48);
  fill(255,0,0)
  rect(84,336,45,45)
}

function keyPressed() {
  if(key=="ArrowUp" && y>200) {
     y=y-60
     opção=opção-1;
  }
  if(key=="ArrowDown" && y<250) {
     y=y+60
     opção=opção+1;
  } 
  if(key=="Enter") {
     tela=opção
  }
  if(key=="Escape") {
     tela=0
  }
  
}