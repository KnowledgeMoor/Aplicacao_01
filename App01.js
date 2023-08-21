nome = prompt("Qual é seu nome completo?");
document.write(`<p>Seu nome possui ${nome.length} caracteres</p>`);
document.write(`<p>A primeira letra do seu nome é ${nome.charAt(0)}</p>`);
document.write(`<p>Seu nome convertido para letras maiúsculas: ${nome.toUpperCase()}</p>`);
const palavras = nome.split(/\s+/); 
document.write(`<p>Seu nome possui ${palavras.length} palavas</p>`);
document.write(`<p>Seu nome <span style="color:red">${nome}</span> na cor vermelho</p>`);
document.write("<p>Seu nome escrito 5 vezes na cor azul:</p>");
for(let i = 0; i < 5; i++){
    document.write(`<li style="color:blue; margin-left:20px">${nome}</li>`);
}
