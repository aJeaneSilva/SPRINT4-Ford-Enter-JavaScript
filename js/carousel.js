

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel{
    constructor(imagem, title, url){
        this.imagem = imagem;
        this.title = title;
        this.url = url;
    }

    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next();
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
                    if(Carousel._sequence >= Carousel._size){
                        Carousel._seequence = 0;
                        Carousel._seequence = 1;
                        Carousel._seequence = 2;
                }
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        let itemAtual = carouselArr[Carousel._sequence];
        let divImagem = document.getElementById("carousel");
        let divTitle = document.getElementById("carousel-title");

        divImagem.style.backgroundImage = `url('${itemAtual.imagem}')`;
        divImagem.style.backgroundRepeat = "no-repeat";
        divImagem.style.backgroundPosition = "center";
        divImagem.style.height = "650px";
        divTitle.innerHTML = `<a href= '${itemAtual.url}'>${itemAtual.title}</a>`;

        let btnEsquerdo = document.createElement("button");
        btnEsquerdo.innerText = "<";
        btnEsquerdo.style.backgroundColor = "#1351d8";
        btnEsquerdo.style.left = "150px";
        btnEsquerdo.style.top = "415px";
        btnEsquerdo.style.padding = "10px 15px";
        btnEsquerdo.style.borderRadius = "10px";
        btnEsquerdo.style.cursor = "pointer";
        btnEsquerdo.style.position = "absolute";

        btnEsquerdo.onmouseenter = function(){
            btnEsquerdo.style.backgroundColor = "#0a2e9c";
            btnEsquerdo.style.transform = "scale(1.1)";
            btnEsquerdo.style.transition = "0.3s ease";
        }
        btnEsquerdo.onmouseleave = function(){
            btnEsquerdo.style.backgroundColor = "#1351d8";
            btnEsquerdo.style.transform = "scale(1)";
        }
        btnEsquerdo.onclick = function(){
            clearInterval(Carousel._interval);
            Carousel.Next();
            Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
        }

        let btnDireito = document.createElement("button");
        btnDireito.innerText = ">";
        btnDireito.style.backgroundColor = "#1351d8";
        btnDireito.style.right = "150px";
        btnDireito.style.top = "415px";
        btnDireito.style.padding = "10px 15px";
        btnDireito.style.borderRadius = "10px";
        btnDireito.style.cursor = "pointer";
        btnDireito.style.position = "absolute";

        btnDireito.onmouseenter = function(){
            btnDireito.style.backgroundColor = "#0a2e9c";
            btnDireito.style.transform = "scale(1.1)";
            btnDireito.style.transition = "0.3s ease";
        }
        btnDireito.onmouseleave = function(){
            btnDireito.style.backgroundColor = "#1351d8";
            btnDireito.style.transform = "scale(1)";
        }
        btnDireito.onclick = function(){
            clearInterval(Carousel._interval);
            Carousel.Next();
            Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
        }

        divImagem.appendChild(btnEsquerdo);
        divImagem.appendChild(btnDireito);
    
         Carousel._sequence++;
         if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0;
        }
    }
};
