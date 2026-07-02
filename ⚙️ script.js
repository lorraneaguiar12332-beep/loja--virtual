// Carrinho
let carrinho = 0;

// Todos os botões de comprar
const botoes = document.querySelectorAll(".produto button");

// Criar contador
const contador = document.createElement("div");
contador.innerHTML = "🛒 Carrinho: 0";
contador.style.position = "fixed";
contador.style.top = "20px";
contador.style.right = "20px";
contador.style.background = "#fff";
contador.style.padding = "10px 15px";
contador.style.borderRadius = "30px";
contador.style.boxShadow = "0 5px 15px rgba(0,0,0,.2)";
contador.style.fontWeight = "bold";
contador.style.zIndex = "9999";

document.body.appendChild(contador);

// Adicionar ao carrinho
botoes.forEach(botao=>{
    botao.addEventListener("click",()=>{
        carrinho++;
        contador.innerHTML = "🛒 Carrinho: " + carrinho;

        botao.innerHTML = "✔ Adicionado";
        botao.disabled = true;

        setTimeout(()=>{
            botao.innerHTML = "Comprar";
            botao.disabled = false;
        },1500);
    });
});

// Rolagem suave
document.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click",e=>{
        e.preventDefault();
    });
});
