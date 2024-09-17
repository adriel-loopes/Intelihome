// Array para armazenar os itens do carrinho
let cart = [];

// Função para adicionar um produto ao carrinho
function addToCart(productName, productPrice) {
    // Procura o produto no carrinho
    let product = cart.find(p => p.name === productName);
    if (product) {
        product.quantity += 1; // Se já estiver no carrinho, aumenta a quantidade
    } else {
        // Se não estiver no carrinho, adiciona um novo item
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCartCount(); // Atualiza a contagem de itens no carrinho
}

// Função para atualizar o contador do carrinho
function updateCartCount() {
    document.getElementById('cart-count').innerText = `Carrinho: ${cart.length}`;
}

// Função para exibir os itens do carrinho
function showCart() {
    let cartDetails = cart.map(p => `${p.name} - Qtd: ${p.quantity} - Preço: R$ ${(p.price * p.quantity).toFixed(2)}`);
    alert(cartDetails.join('\n'));
}

// Função para remover um produto do carrinho
function removeFromCart(productName) {
    cart = cart.filter(p => p.name !== productName); // Remove o produto filtrando o array
    updateCartCount(); // Atualiza o contador
}
