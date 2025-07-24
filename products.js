const products = [
    {
        id: 1,
        name: "عطر عود أصيل",
        price: "120 جنيه",
        image: "images/oud.jpg"
    },
    {
        id: 2,
        name: "عطر مسك وورد",
        price: "95 جنيه",
        image: "images/musk.jpg"
    },
    {
        id: 3,
        name: "لايتر شفاه تركي",
        price: "60 جنيه",
        image: "images/lipstick.jpg"
    },
    {
        id: 4,
        name: "بودرة وجه كورية",
        price: "80 جنيه",
        image: "images/perfume.jpg"
    },
    {
        id: 5,
        name: "علبة هدايا تجميل",
        price: "200 جنيه",
        image: "images/giftbox.jpg"
    },
    {
        id: 6,
        name: "أيشادو 12 لون",
        price: "110 جنيه",
        image: "images/eyeshadow.jpg"
    }
];

function displayProducts(products) {
    const container = document.getElementById('products');
    container.innerHTML = '';
    products.forEach(product => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
                <button class="order-btn" onclick="orderProduct('${product.name}', '${product.price}')">
                    اطلبي الآن 💬
                </button>
            </div>
        `;
    });
}

function orderProduct(name, price) {
    const message = `أريد طلب: ${name} - السعر: ${price}. من متجر جوا`;
    const whatsappURL = `https://wa.me/201000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

function filterProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    displayProducts(filtered);
}

// عرض المنتجات
displayProducts(products);
