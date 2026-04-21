// --- Dados dos Produtos ---
const veiculos = [
    {
        id: 'v1', title: 'Porsche 911 Turbo', price: 299.90,
        image: 'uploads/veiculos/porsche-911-turbo-black.jpg',
        cenario: 'uploads/cenarios/porsche-911-turbo-black.jpg',
        description: 'O ícone alemão em escala 1:64, reproduzido com fidelidade absoluta — capô traseiro, spoiler variável e cada detalhe da carroceria esculpidos em peças individuais.',
        specs: ['Escala 1:64 em blocos Nano', 'Aprox. 280 peças', 'Inclui suporte de exposição', 'Cores: Preto Carraça']
    },
    {
        id: 'v2', title: 'Audi RS Touring', price: 279.90,
        image: 'uploads/veiculos/audi-rs-touring-black.jpg',
        cenario: 'uploads/cenarios/audi-rs-touring-black.jpg',
        description: 'A brutalidade sedã do Audi RS capturada em miniatura. Grade Singleframe, difusor traseiro e rodas RS reproduzidos com detalhes milimétricos.',
        specs: ['Escala 1:64 em blocos Nano', 'Aprox. 240 peças', 'Inclui suporte de exposição', 'Cores: Preto Mate']
    },
    {
        id: 'v3', title: 'Lamborghini GT3', price: 349.90,
        image: 'uploads/veiculos/lamborghini-gt3-yellow.jpg',
        cenario: 'uploads/cenarios/lamborghini-gt3-yellow.jpg',
        description: 'Aerodinâmica de pista em escala real. O Lamborghini GT3 com asa traseira ajustável, saias laterais e pintura amarela racing que para qualquer olhar.',
        specs: ['Escala 1:64 em blocos Nano', 'Aprox. 320 peças', 'Inclui suporte de exposição', 'Cores: Amarelo Racing']
    },
    {
        id: 'v4', title: 'BMW E30 M3', price: 259.90,
        image: 'uploads/veiculos/bmw-e30-m3-white.jpg',
        cenario: 'uploads/cenarios/bmw-e30-m3-white.jpg',
        description: 'A lenda do Grupo A voltou. O E30 M3 com suas maçanetas de porta, spoiler traseiro e arcos alargados que definiram uma geração de entusiastas.',
        specs: ['Escala 1:64 em blocos Nano', 'Aprox. 260 peças', 'Inclui suporte de exposição', 'Cores: Branco Alpino']
    },
    {
        id: 'v5', title: 'Lancer Evolution', price: 249.90,
        image: 'uploads/veiculos/lancer-evo-red.jpg',
        cenario: 'uploads/cenarios/lancer-evo-red.jpg',
        description: 'O samurai do WRC. Lancer Evolution com intercooler frontal, asa Enkei e entradas de ar reproduzidas em blocos com precisão japonesa.',
        specs: ['Escala 1:64 em blocos Nano', 'Aprox. 250 peças', 'Inclui suporte de exposição', 'Cores: Vermelho Rally']
    },
    {
        id: 'v6', title: 'Porsche 911 RWB', price: 329.90,
        image: 'uploads/veiculos/porsche-911-rwb-red.jpg',
        cenario: 'uploads/cenarios/porsche-911-rwb-red.jpg',
        description: 'A versão RWB custom do 911 — kit Rauh-Welt Begriff com para-lamas alargados, assento rebaixado e visual inconfundível que nenhuma peça de fábrica consegue igualar.',
        specs: ['Escala 1:64 em blocos Nano', 'Aprox. 295 peças', 'Inclui suporte de exposição', 'Cores: Vermelho Candy']
    }
];

const displays = [
    {
        id: 'd1', title: 'Diorama Garagem Premium', price: 499.90,
        image: 'uploads/cenarios/diorama-garagem.jpg',
        cenario: 'uploads/cenarios/diorama-garagem.jpg',
        description: 'Uma garagem particular detalhada: piso de concreto texturizado, prateleiras com ferramentas, iluminação interna e portas articuladas. O cenário perfeito para qualquer miniatura.',
        specs: ['Escala compatível 1:64', 'Aprox. 650 peças', 'Iluminação LED inclusa', 'Portas e gavetas articuladas']
    },
    {
        id: 'd2', title: 'Display Interseção', price: 399.90,
        image: 'uploads/cenarios/display-intersecao.jpg',
        cenario: 'uploads/cenarios/display-intersecao.jpg',
        description: 'Cruzamento urbano com asfalto detalhado, faixa de pedestres, semáforos e calçadas com meios-fios. Ideal para recrear cenas de perseguição ou exposição dinâmica.',
        specs: ['Escala compatível 1:64', 'Aprox. 480 peças', 'Sinais e placas inclusos', 'Base removível para limpeza']
    },
    {
        id: 'd3', title: 'Estacionamento VIP', price: 359.90,
        image: 'uploads/cenarios/display-estacionamento.jpg',
        cenario: 'uploads/cenarios/display-estacionamento.jpg',
        description: 'Estacionamento de shopping de luxo com vagas individuais, colunas de concreto, numeração e marcações de solo. Comporta até 6 miniaturas em exibição.',
        specs: ['Escala compatível 1:64', 'Aprox. 420 peças', 'Capacidade para 6 carros', 'Números de vaga inclusos']
    },
    {
        id: 'd4', title: 'Display de Pista', price: 299.90,
        image: 'uploads/cenarios/display-pista.jpg',
        cenario: 'uploads/cenarios/display-pista.jpg',
        description: 'Trecho de circuito fechado com guard rail lateral, curva banqueada, marcações de largada e paddock. Para quem quer exibir os GT3 e Race Cars no habitat natural.',
        specs: ['Escala compatível 1:64', 'Aprox. 380 peças', 'Guard rails e marcações inclusos', 'Compatível com linha Racing']
    }
];

const combos = [
    {
        id: 'c1',
        title: 'Kit Garagem Turbo',
        subtitle: 'Porsche 911 Turbo + Diorama Garagem',
        price: (299.90 + 499.90) * 0.85,
        image: 'uploads/cenarios/diorama-garagem.jpg',
        carImage: 'uploads/veiculos/porsche-911-turbo-black.jpg',
        displayImage: 'uploads/cenarios/diorama-garagem.jpg',
        description: 'O combo ideal para começar sua coleção. O Porsche 911 Turbo Black encontra a Garagem Premium — juntos criam uma cena digna de exposição em qualquer ambiente.',
        specs: ['15% de desconto sobre o preço individual', 'Porsche 911 Turbo (aprox. 280 peças)', 'Diorama Garagem com LED (aprox. 650 peças)', 'Embalagem premium de presente'],
        isCombo: true
    },
    {
        id: 'c2',
        title: 'Kit Pista GT3',
        subtitle: 'Lamborghini GT3 + Display de Pista',
        price: (349.90 + 299.90) * 0.85,
        image: 'uploads/cenarios/display-pista.jpg',
        carImage: 'uploads/veiculos/lamborghini-gt3-yellow.jpg',
        displayImage: 'uploads/cenarios/display-pista.jpg',
        description: 'O Lamborghini GT3 amarelo no ambiente que merece: um trecho de circuito completo com guard rail e marcações. Para o entusiasta de motorsport.',
        specs: ['15% de desconto sobre o preço individual', 'Lamborghini GT3 (aprox. 320 peças)', 'Display de Pista (aprox. 380 peças)', 'Embalagem premium de presente'],
        isCombo: true
    },
    {
        id: 'c3',
        title: 'Kit Drift E30',
        subtitle: 'BMW E30 M3 + Display Interseção',
        price: (259.90 + 399.90) * 0.85,
        image: 'uploads/cenarios/display-intersecao.jpg',
        carImage: 'uploads/veiculos/bmw-e30-m3-white.jpg',
        displayImage: 'uploads/cenarios/display-intersecao.jpg',
        description: 'A lenda branca do Grupo A no cruzamento urbano. BMW E30 M3 + Display Interseção: uma cena de filme recriada em escala 1:64.',
        specs: ['15% de desconto sobre o preço individual', 'BMW E30 M3 (aprox. 260 peças)', 'Display Interseção (aprox. 480 peças)', 'Embalagem premium de presente'],
        isCombo: true
    }
];

// Mapa rápido de id → produto
const allProducts = [...veiculos, ...displays, ...combos].reduce((acc, p) => {
    acc[p.id] = p;
    return acc;
}, {});

// --- Carrinho de Compras ---
let cart = [];

function formatPrice(price) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// --- Renderização dos Produtos ---
function createProductCard(product) {
    const isComboTag = product.isCombo ? `<span class="tag-combo">Combo Oferta</span>` : '';

    let imageHtml;
    if (product.isCombo) {
        imageHtml = `
            <div class="combo-images">
                <img src="${product.carImage}" alt="Carro" class="combo-image-half" loading="lazy">
                <img src="${product.displayImage}" alt="Display" class="combo-image-half" loading="lazy">
                <div class="combo-image-divider"></div>
                <div class="combo-image-plus">+</div>
            </div>
        `;
    } else {
        imageHtml = `
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
            </div>
        `;
    }

    return `
        <div class="product-card reveal-up" data-id="${product.id}" data-tilt onclick="openProductDetail('${product.id}')">
            ${isComboTag}
            ${imageHtml}
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                ${product.subtitle ? `<p style="font-size:0.85rem;color:var(--text-secondary);margin:0 0 0.5rem;">${product.subtitle}</p>` : ''}
                <span class="product-price">${formatPrice(product.price)}</span>
                <div class="product-action">
                    <button class="btn btn-secondary add-to-cart" onclick="event.stopPropagation(); addToCart('${product.id}', '${product.title}', ${product.price}, '${product.image}')">
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderProducts() {
    document.getElementById('carros-grid').innerHTML = veiculos.map(createProductCard).join('');
    document.getElementById('displays-grid').innerHTML = displays.map(createProductCard).join('');
    document.getElementById('combos-grid').innerHTML = combos.map(createProductCard).join('');
    initTiltEffect();
}

// --- Hero Slideshow ---
const heroSlideImages = [
    'uploads/veiculos/porsche-911-turbo-black.jpg',
    'uploads/veiculos/lamborghini-gt3-yellow.jpg',
    'uploads/veiculos/bmw-e30-m3-white.jpg',
    'uploads/veiculos/porsche-911-rwb-red.jpg',
    'uploads/veiculos/audi-rs-touring-black.jpg',
    'uploads/veiculos/lancer-evo-red.jpg',
];

let currentSlide = 0;
let slideInterval = null;

function initHeroSlideshow() {
    const slideshowEl = document.getElementById('hero-slideshow');
    const indicatorsEl = document.getElementById('hero-indicators');

    // Criar slides
    heroSlideImages.forEach((src, i) => {
        const slide = document.createElement('div');
        slide.className = 'hero-slide' + (i === 0 ? ' active' : '');
        slide.style.backgroundImage = `url('${src}')`;
        slideshowEl.appendChild(slide);

        // Criar dot indicator
        const dot = document.createElement('button');
        dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        indicatorsEl.appendChild(dot);
    });

    slideInterval = setInterval(nextSlide, 4500);
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');

    // Reset interval
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 4500);
}

function nextSlide() {
    goToSlide((currentSlide + 1) % heroSlideImages.length);
}

// --- Efeito 3D (Tilt) ---
function initTiltEffect() {
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });
}

// --- Scroll Reveal Animation ---
function initScrollReveal() {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
}

// --- Hero Scroll Scrubbing ---
function initScrollScrubbing() {
    const heroWrapper = document.getElementById('hero-wrapper');
    const heroSection = document.getElementById('hero-section');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const heroHeight = heroSection.offsetHeight;

        if (scrollY < heroHeight) {
            const progress = scrollY / heroHeight;
            const translateY = scrollY * 0.4;
            const scale = 1 - (progress * 0.1);
            const opacity = 1 - (progress * 1.5);
            heroWrapper.style.transform = `translateY(${translateY}px) scale(${scale})`;
            heroWrapper.style.opacity = Math.max(0, opacity);
        }
    });
}

// --- Navbar Blur on Scroll ---
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// --- Product Detail Modal ---
function openProductDetail(id) {
    const product = allProducts[id];
    if (!product) return;

    const overlay = document.getElementById('product-detail-overlay');
    const wrapper = document.getElementById('product-detail-wrapper');
    const imagesEl = document.getElementById('product-detail-images');
    const badgeEl = document.getElementById('product-detail-badge');
    const titleEl = document.getElementById('product-detail-title');
    const priceEl = document.getElementById('product-detail-price');
    const descEl = document.getElementById('product-detail-description');
    const specsEl = document.getElementById('product-detail-specs');
    const addBtn = document.getElementById('product-detail-add');

    // Images
    if (product.isCombo) {
        imagesEl.className = 'product-detail-images combo-detail';
        imagesEl.innerHTML = `
            <img src="${product.carImage}" alt="Carro">
            <div class="combo-detail-divider"></div>
            <img src="${product.displayImage}" alt="Display">
        `;
    } else {
        imagesEl.className = 'product-detail-images';
        imagesEl.innerHTML = `<img src="${product.cenario || product.image}" alt="${product.title}" class="detail-img-main">`;
    }

    // Info
    badgeEl.textContent = product.isCombo ? 'Combo — 15% OFF' : (id.startsWith('v') ? 'Miniatura' : 'Display / Cenário');
    badgeEl.style.display = '';
    titleEl.textContent = product.title;
    priceEl.textContent = formatPrice(product.price);
    descEl.textContent = product.description || '';
    specsEl.innerHTML = (product.specs || []).map(s => `<li>${s}</li>`).join('');

    addBtn.onclick = () => {
        addToCart(product.id, product.title, product.price, product.image);
        closeProductDetail();
    };

    overlay.classList.add('active');
    wrapper.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductDetail() {
    document.getElementById('product-detail-overlay').classList.remove('active');
    document.getElementById('product-detail-wrapper').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('close-product-detail').addEventListener('click', closeProductDetail);
document.getElementById('product-detail-overlay').addEventListener('click', closeProductDetail);

// --- Lógica do Carrinho 3D ---
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total-price');
    const cartBadge = document.getElementById('cart-badge');

    cartBadge.textContent = cart.length;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="cart-empty-msg">Seu carrinho está vazio. Adicione miniaturas incríveis!</p>';
        cartTotalEl.textContent = 'R$ 0,00';
        return;
    }

    let total = 0;
    cartItemsContainer.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `
            <div class="cart-large-item">
                <img src="${item.image}" alt="${item.title}" class="cart-large-img">
                <div class="cart-large-info">
                    <div class="cart-large-title">${item.title}</div>
                    <div class="cart-large-price">${formatPrice(item.price)}</div>
                </div>
                <button class="cart-large-remove" onclick="removeFromCart(${index})" title="Remover">&times;</button>
            </div>
        `;
    }).join('');

    cartTotalEl.textContent = formatPrice(total);
}

window.addToCart = function(id, title, price, image) {
    cart.push({ id, title, price, image });
    updateCartUI();
    openCart();
};

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    updateCartUI();
};

// Cart UI
const cartOverlay = document.getElementById('cart-overlay');
const cart3dWrapper = document.getElementById('cart-3d-wrapper');

function openCart() {
    cartOverlay.classList.add('active');
    cart3dWrapper.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartOverlay.classList.remove('active');
    cart3dWrapper.classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('cart-icon').addEventListener('click', openCart);
document.getElementById('close-cart').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// --- Checkout Modal ---
const checkoutBtn = document.getElementById('checkout-btn');
const modalOverlay = document.getElementById('modal-overlay');
const closeModalBtn = document.getElementById('close-modal');

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Adicione itens ao carrinho primeiro.");
        return;
    }
    closeCart();
    modalOverlay.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlideshow();
    renderProducts();
    initScrollReveal();
    initScrollScrubbing();
    updateCartUI();
});
