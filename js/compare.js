
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.photoCar = image;
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){       
        if(el.checked){
            if(carArr.length >= 2) {
            alert("Você só pode comparar 2 carros por vez. Tente novamente.");
            el.checked = false;
            return;
            }
     carArr.push(carClass);

        } else {
          let pos = GetCarArrPosition(carArr, carClass);
          if(pos !== -1) {
            carArr.splice(pos, 1);
          }
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    let carro1 = carArr[0];
    let carro2 = carArr[1];
    
    let tabela = [
        "imagem",
        "nome",
        "alturaCacamba",
        "alturaVeiculo",
        "alturaSolo",
        "capacidadeCarga",
        "motor",
        "potencia",
        "volumeCacamba",
        "roda",
        "preco"
    ];
    tabela.forEach(item => {
    let idBase = item;
        if (item === "nome") idBase = "modelo";
        if (item === "imagem") idBase = "image";

    let idMinusculo = idBase.toLowerCase();
    let colunaEsquerda = document.getElementById(`compare_${idMinusculo}_0`);
    let colunaDireita = document.getElementById(`compare_${idMinusculo}_1`);

        if (item === "imagem") {
            let linkCarro1 = carro1.photoCar; 
            let linkCarro2 = carro2.photoCar;
            if (colunaEsquerda) {
            colunaEsquerda.innerHTML = `<img src="${linkCarro1}" alt="${carro1.nome}" width="200px">`;
            }
            if (colunaDireita) {
            colunaDireita.innerHTML = `<img src="${linkCarro2}" alt="${carro2.nome}" width="200px">`;
            }
        }

        else if (item === "preco") {
            if (colunaEsquerda) { colunaEsquerda.innerHTML = `R$ ${carro1[item].toLocaleString('pt-BR')}`;
            }
            if (colunaDireita) {colunaDireita.innerHTML = `R$ ${carro2[item].toLocaleString('pt-BR')}`;
            }
        }
    
        else {
            if(colunaEsquerda)
                colunaEsquerda.innerHTML = carro1[item];
            if(colunaDireita)
                colunaDireita.innerHTML = carro2[item];
        }

    });
}
