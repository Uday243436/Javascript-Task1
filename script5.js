const API_URL = 'https://fakestoreapi.com/products/';
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const sortSelect = document.getElementById('sortSelect');
const productsGrid = document.getElementById('productsGrid');
const statusMessage = document.getElementById('statusMessage');
const cartCount = document.getElementById('cartCount');
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');
const modalAddCart = document.getElementById('modalAddCart');

const state = {
    products: [],
    filtered: [],
    cart: loadCart(),
    activeProduct: null,
};

function loadCart() {
    try {
        const stored = localStorage.getItem('fakeStoreCart');
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Cart load failed', error);
        return [];
    }
}

function saveCart() {
    localStorage.setItem('fakeStoreCart', JSON.stringify(state.cart));
    updateCartCount();
}

function updateCartCount() {
    cartCount.textContent = state.cart.length;
}

function setStatus(message, type = 'info') {
    statusMessage.textContent = message;
    statusMessage.className = `status-message ${type}`;
}

function formatText(text, maxLength) {
    if (!text) return '';
    return text.length > maxLength ? `${text.slice(0, maxLength - 3)}...` : text;
}

function displayProducts(data) {
    productsGrid.innerHTML = '';

    if (data.length === 0) {
        setStatus('No products match your search or filter.', 'warning');
        return;
    }

    setStatus(`Showing ${data.length} products`, 'success');

    data.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';

        const title = formatText(product.title, 50);
        const description = formatText(product.description, 60);

        card.innerHTML = `
            <img class="product-image" src="${product.image}" alt="${product.title}">
            <div class="product-body">
                <h3>${title}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <p class="product-description">${description}</p>
                <div class="card-buttons">
                    <button class="btn btn-secondary" data-action="view" data-id="${product.id}">View More</button>
                    <button class="btn btn-primary" data-action="cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;

        card.addEventListener('click', event => {
            const button = event.target.closest('button');
            if (!button) return;
            const productId = Number(button.dataset.id);
            const action = button.dataset.action;

            if (action === 'view') {
                openModal(productId);
            }
            if (action === 'cart') {
                addToCart(productId);
            }
        });

        productsGrid.appendChild(card);
    });
}

function openModal(productId) {
    const product = state.products.find(item => item.id === productId);
    if (!product) return;

    state.activeProduct = product;
    modalImage.src = product.image;
    modalImage.alt = product.title;
    modalTitle.textContent = product.title;
    modalCategory.textContent = product.category;
    modalPrice.textContent = `$${product.price.toFixed(2)}`;
    modalDescription.textContent = product.description;
    productModal.classList.remove('hidden');
}

function closeModal() {
    productModal.classList.add('hidden');
    state.activeProduct = null;
}

function addToCart(productId) {
    const product = state.products.find(item => item.id === productId);
    if (!product) return;

    const exists = state.cart.some(item => item.id === product.id);
    if (!exists) {
        state.cart.push({ id: product.id, title: product.title, price: product.price });
        saveCart();
        setStatus(`Added "${product.title}" to cart`, 'success');
    } else {
        setStatus('Product already in cart', 'warning');
    }
}

function updateFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;
    const sortValue = sortSelect.value;

    state.filtered = state.products.filter(product => {
        const matchTitle = product.title.toLowerCase().includes(query);
        const matchCategory = category === 'all' || product.category === category;
        return matchTitle && matchCategory;
    });

    if (sortValue === 'low-high') {
        state.filtered.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'high-low') {
        state.filtered.sort((a, b) => b.price - a.price);
    }

    displayProducts(state.filtered);
}

function populateCategoryOptions(products) {
    const categories = Array.from(new Set(products.map(product => product.category)));
    categorySelect.innerHTML = '<option value="all">All categories</option>' +
        categories.map(category => `<option value="${category}">${category}</option>`).join('');
}

function initializeEvents() {
    searchInput.addEventListener('input', updateFilters);
    categorySelect.addEventListener('change', updateFilters);
    sortSelect.addEventListener('change', updateFilters);
    modalClose.addEventListener('click', closeModal);
    productModal.addEventListener('click', event => {
        if (event.target === productModal) closeModal();
    });
    modalAddCart.addEventListener('click', () => {
        if (state.activeProduct) addToCart(state.activeProduct.id);
    });
}

function fetchProducts() {
    setStatus('Loading...', 'info');

    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json();
        })
        .then(products => {
            state.products = products;
            populateCategoryOptions(products);
            updateFilters();
            updateCartCount();
        })
        .catch(error => {
            console.error('Fetch failed', error);
            setStatus('Failed to load data', 'error');
            productsGrid.innerHTML = '';
        });
}

initializeEvents();
fetchProducts();