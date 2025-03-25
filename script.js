// script.js

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar o envio do formulário

    // Coletar os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;

    // Estrutura dos dados do pedido
    const orderData = {
        name,
        email,
        address,
        product,
        quantity
    };

    // Exibir os dados do pedido (para simulação de armazenamento)
    const orderDetailsDiv = document.getElementById('orderDetails');
    orderDetailsDiv.style.display = 'block';
    orderDetailsDiv.innerHTML = `
        <h3>Resumo do Pedido</h3>
        <p><strong>Nome:</strong> ${orderData.name}</p>
        <p><strong>E-mail:</strong> ${orderData.email}</p>
        <p><strong>Endereço:</strong> ${orderData.address}</p>
        <p><strong>Produto:</strong> ${orderData.product}</p>
        <p><strong>Quantidade:</strong> ${orderData.quantity}</p>
    `;

    // Aqui você pode salvar esses dados em um banco de dados ou enviar para um servidor
    // Exemplo usando localStorage para armazenar os dados localmente (navegador):
    localStorage.setItem('orderData', JSON.stringify(orderData));

    // Limpar o formulário
    document.getElementById('orderForm').reset();
});
