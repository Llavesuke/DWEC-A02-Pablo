const alphabet = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

function descifradoROT13(cadenaTexto) {
  return cadenaTexto.split('').reduce((textoDescifrado, letra) => {
    const upperLetter = letra.toUpperCase();
    if (alphabet.includes(upperLetter)) {
      let indexChar = alphabet.indexOf(upperLetter); 
      
      let newIndex = (indexChar + 13) % 26; 
      
      let nuevaLetra = alphabet[newIndex];

      textoDescifrado += letra === upperLetter ? nuevaLetra : nuevaLetra.toLowerCase();
    } else {
      textoDescifrado += letra; 
    }
    return textoDescifrado; 
  }, "");
}

console.log(descifradoROT13("Zerro"));


