function processText() {
  const textElement = document.getElementById('text');
  const modeElement = document.getElementById('mode');
  const resultElement = document.getElementById('result');

  const text = textElement.value.toLowerCase();
  const mode = modeElement.value;

  clearResult();

  let result = '';

  switch (mode) {
    case 'encrypt':
      result = encrypt(text);
      break;
    case 'decrypt':
      result = decrypt(text);
      break;
    default:
      result = 'Modo inválido.';
  }

  resultElement.innerText = result;
}

function encrypt(text) {
  return text.replace(/e/g, 'enter')
             .replace(/i/g, 'imes')
             .replace(/a/g, 'ai')
             .replace(/o/g, 'ober')
             .replace(/u/g, 'ufat');
}

function decrypt(text) {
  return text.replace(/enter/g, 'e')
             .replace(/imes/g, 'i')
             .replace(/ai/g, 'a')
             .replace(/ober/g, 'o')
             .replace(/ufat/g, 'u');
}

function clearResult() {
  document.getElementById('result').innerText = '';
}