
alert('Olá')

const numero = Number(prompt('Digite um número'))

const numeroTitulo = document.getElementById('numero-titulo')

numeroTitulo.innerHTML = numero


const texto = document.getElementById('texto')

if (Number.isInteger(numero)=== true) {
      responseNumberInterger =  'Sim'
} else {
     responseNumberInterger = 'Não'
} 

texto.innerHTML = ''
 texto.innerHTML += `<p> Raiz quadrada: ${Math.sqrt(numero)} </p>` 
texto.innerHTML += `<p>O ${numero} é inteiro? ${responseNumberInterger}</p>`
texto.innerHTML += `<p>${numero} arredondado para cima é: ${Math.ceil(numero)}</p>`

