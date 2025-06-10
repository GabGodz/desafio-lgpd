
//carros para comparar
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
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

function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if(carClass instanceof Car) {       
        if(el.checked) {
            if(carArr.length < 2) {
                let pos = GetCarArrPosition(carArr, carClass);
                if(pos === -1) {
                    carArr.push(carClass);
                }
            } else {
                el.checked = false;
                alert("Você só pode comparar 2 carros por vez");
            }
        } else {
            let pos = GetCarArrPosition(carArr, carClass);
            if(pos !== -1) {
                carArr.splice(pos, 1);
            }
            HideCompare();
        }
    } else {
        throw "É necessário selecionar um modelo de carro";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Por favor, selecione 2 carros para fazer a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    // atualiza as informações dos dois carros selecionados
    for(let i = 0; i < 2; i++) {
        const car = carArr[i];
        
        // preenche as informações na tabela usando os ids 
        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${car.image}" style="width:100px">`;        
        document.getElementById(`compare_modelo_${i}`).textContent = car.nome;
        document.getElementById(`compare_alturacacamba_${i}`).textContent = car.alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).textContent = car.alturaVeiculo;
        document.getElementById(`compare_alturasolo_${i}`).textContent = car.alturaSolo;
        document.getElementById(`compare_capacidadecarga_${i}`).textContent = car.capacidadeCarga;
        document.getElementById(`compare_motor_${i}`).textContent = car.motor;
        document.getElementById(`compare_potencia_${i}`).textContent = car.potencia;
        document.getElementById(`compare_volumecacamba_${i}`).textContent = car.volumeCacamba;
        document.getElementById(`compare_roda_${i}`).textContent = car.roda;
        document.getElementById(`compare_preco_${i}`).textContent = `R$ ${car.preco}`;
    }
}
    

