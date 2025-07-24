// products.js

const products = [
    { id: 1, name: "عطر شانيل", price: "120 ريال", image: "images/chanel.jpg" },
    { id: 2, name: "كريم أساس لوسيان", price: "80 ريال", image: "images/foundation.jpg" },
    { id: 3, name: "لايتر شفاه", price: "45 ريال", image: "images/lipstick.jpg" },
    { id: 4, name: "بودرة مضغوطة", price: "60 ريال", image: "images/powder.jpg" },
    { id: 5, name: "عطر ديور", price: "150 ريال", image: "images/dior.jpg" },
    { id: 6, name: "أيشادو ميكست", price: "70 ريال", image: "images/eyeshadow.jpg" }
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
                <button class="add-to-cart" onclick="addToCart('${product.name}')">أضف للسلة</button>
            </div>
        `;
    });
}

function addToCart(productName) {
    alert(`تم إضافة "${productName}" إلى السلة`);
}

function filterProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    displayProducts(filtered);
}

// عرض المنتجات عند التحميل
displayProducts(products);