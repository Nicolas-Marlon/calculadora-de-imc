var peso;
var altura;
var imc;
var resultado;

function printResultado(imc, aviso){
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '<table><tr><th>Peso</th><th>Altura</th><th>IMC</th><th>Resultado</th></tr><tr><th id="result">'+ peso +'</th><th id="result">'+ altura +'</th><th id="result">'+imc+'</th><th id="result">'+aviso+'</th></tr></table>';
}

function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);
    imc = imc.toFixed(2);

    if(imc < 17){
       printResultado(imc, 'Cuidado você está muito abaixo do peso!');
    } else if(imc > 17 && imc <= 18.49){
        printResultado(imc, 'Você está abaixo do peso.');
    } else if(imc >= 18.5 && imc < 24.99){
        printResultado(imc, 'Você está no peso ideal.');
    } else if(imc > 25 && imc <= 29.99){
        printResultado(imc, 'Você está acima do peso');
    }else if(imc >= 30 && imc <= 34.99){
        printResultado(imc, 'Cuidado Obesidade I');
    } else if(imc >= 35 && imc <= 39.99){
        printResultado(imc, 'Cuidado Obesidade II (severa)');
    } else if(imc > 40){
        printResultado(imc, 'Cuidado Obesidade III (mórbida)');
    }
    setTimeout(function(){
        peso = document.getElementById('peso').value = '';
            altura = document.getElementById('altura').value = '';
   },5000);
}