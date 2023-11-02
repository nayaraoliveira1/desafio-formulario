const formulario = document.querySelectorAll('.input-text');
const span = document.querySelectorAll('.campo-obrigatorio');
const bntEnviar = document.getElementById('bnt-enviar');

bntEnviar.addEventListener('click', function (){
    formulario.forEach(function (input, indice) {
        if (input.value !== '') {
            input.classList.add('campo-preenchido');
            input.classList.remove('n-preenchido');
            
            span[indice].classList.remove("erro");

        } else {
            input.classList.remove('campo-preenchido');
            input.classList.add('n-preenchido');
            
            span[indice].classList.add("erro")
        }
    })
})