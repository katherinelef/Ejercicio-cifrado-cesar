// Crear una funcion llamada cipher que cifre el texto ingresado//
let button = document.getElementById('cifrar');
button.addEventListener('click', cipher);

function cipher() {
  let texto = document.getElementById('texto').value;
  let cifrado = '';
  // el for recorrera las letras del texto a cifrar//
  for (let i = 0; i < texto.length; i++) {
    if (parseInt(texto[i]) % 1 === 0) // condicionar para no ingresar numeros//
      texto = prompt('Por favor ingrese un texto sin numeros ni espacios');
    let ubicacionCesar = (texto.toUpperCase().charCodeAt(i) - 65 + 33) % 26 + 65;
    let palabraCifrada = String.fromCharCode(ubicacionCesar);
    cifrado += palabraCifrada; // acumular las letras cifradas//
  }
  let newParagraph = document.createElement('p');
  let paragraphText = document.createTextNode(cifrado);
  newParagraph.appendChild(paragraphText);
  document.body.appendChild(newParagraph);
}

let buttonDescipher = document.getElementById('descifrar');
buttonDescipher.addEventListener('click', descipher);
// Crear una funcion llamada decipher que descifre el texto ingresado //
function descipher() {
  let texto = document.getElementById('texto').value;
  let descifrado = '';
  // el for recorrera las letras del texto a descifrar//
  for (let j = 0; j < texto.length; j++) {
    let ubicacionDescifrado = (texto.charCodeAt(j) + 65 - 33) % 26 + 65;
    let palabraDescifrada = String.fromCharCode(ubicacionDescifrado);
    // acumular las letras descifradas//
    descifrado += palabraDescifrada;
  }
  let newParagraph = document.createElement('p');
  let paragraphText = document.createTextNode(descifrado);
  newParagraph.appendChild(paragraphText);
  document.body.appendChild(newParagraph);
}
