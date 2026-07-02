const botoes=document.querySelectorAll("button");

botoes.forEach(botao=>{
botao.addEventListener("click",()=>{
alert("Produto adicionado ao carrinho!");
});
});
