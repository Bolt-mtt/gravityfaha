// --- Dados dos Produtos ---
const linhapadrao = [
    {
        id: 'p1', title: 'Mini Car Blocos ABS – Azul', price: 140,
        image: 'https://s.alicdn.com/@sc04/kf/H1608910cf6a84e9380d72127178287764.jpg_960x960q80.jpg',
        description: 'Miniatura esportiva azul com 386 blocos ABS de alta precisão. Montagem manual que desenvolve raciocínio e resulta em uma peça de coleção incrível.',
        specs: ['386 peças ABS de alta qualidade', 'Cor: Azul vibrante', 'Ideal para maiores de 14 anos', 'Embalagem presente inclusa']
    },
    {
        id: 'p2', title: 'Mini Model Car – Branco', price: 140,
        image: 'https://s.alicdn.com/@sc04/kf/H6a4e1d314df94e2f9bd0d7796c57c2d4e.jpg_960x960q80.jpg',
        description: 'Elegância em branco puro. Modelo esportivo com 354 peças ABS para montar, ideal para presentear ou exibir com estilo na sua coleção.',
        specs: ['354 peças ABS de alta qualidade', 'Cor: Branco', 'Ideal para maiores de 14 anos', 'Embalagem presente inclusa']
    },
    {
        id: 'p3', title: 'SUV Sport Car MOC – Preto', price: 140,
        image: 'https://s.alicdn.com/@sc04/kf/H28a0ffceb9e4454f93ba5dda0134b9f8m.jpg_960x960q80.jpg',
        description: 'SUV esportivo em preto intenso. Com 408 peças, reproduz detalhes de um veículo de alto padrão que vai impressionar qualquer colecionador.',
        specs: ['408 peças ABS de alta qualidade', 'Cor: Preto', 'Ideal para maiores de 14 anos', 'Embalagem presente inclusa']
    },
    {
        id: 'p4', title: 'Sport Car MOC – Preto', price: 140,
        image: 'https://s.alicdn.com/@sc04/kf/H7ac2980ac2314e818968b515b80dc5883.jpg_960x960q80.jpg',
        description: 'Sport car compacto em preto para colecionadores. Blocos ABS precisos que reproduzem o charme de um carro esportivo clássico em miniatura.',
        specs: ['50 peças ABS de alta qualidade', 'Cor: Preto', 'Ideal para maiores de 14 anos', 'Embalagem presente inclusa']
    },
    {
        id: 'p5', title: 'Sport Car DIY – Cinza', price: 140,
        image: 'https://s.alicdn.com/@sc04/kf/Hc97b27fb43b14c64b26dfae8eea93032V.jpg_960x960q80.jpg',
        description: 'Sport car criativo em cinza neutro. Montagem DIY que mistura diversão e habilidade para criar uma miniatura elegante e sofisticada.',
        specs: ['50 peças ABS de alta qualidade', 'Cor: Cinza', 'Ideal para maiores de 14 anos', 'Embalagem presente inclusa']
    },
    {
        id: 'p6', title: 'Sport Car MOC – Azul 2025', price: 140,
        image: 'https://s.alicdn.com/@sc04/kf/H1eab19e0b8e246b9ab1f48951cef69d4Y.jpg_960x960q80.jpg',
        description: 'Lançamento 2025 em azul moderno. Sport car com 303 peças que combina design arrojado e montagem prazerosa para quem ama automóveis.',
        specs: ['303 peças ABS de alta qualidade', 'Cor: Azul', 'Novidade 2025', 'Embalagem presente inclusa']
    },
    {
        id: 'p7', title: 'Mini Car Blocos – Vermelho', price: 140,
        image: 'https://s.alicdn.com/@sc04/kf/Hb260df7bafcb46c59e11c5688633701fi.jpg_960x960q80.jpg',
        description: 'Miniatura vibrante em vermelho paixão. Blocos ABS compactos que criam um carro esportivo digno de destaque em qualquer estante.',
        specs: ['50 peças ABS de alta qualidade', 'Cor: Vermelho', 'Ideal para maiores de 14 anos', 'Embalagem presente inclusa']
    },
    {
        id: 'p8', title: 'Sport Car MOC Colorido', price: 140,
        image: 'https://s.alicdn.com/@sc04/kf/H75de83813b674065970db9413315da57x.jpg_960x960q80.jpg',
        description: 'O mais alegre da coleção! Com 455 peças coloridas, este sport car MOC é perfeito para quem quer personalidade e diversidade visual.',
        specs: ['455 peças ABS multicoloridas', 'Design único colorido', 'Ideal para maiores de 14 anos', 'Embalagem presente inclusa']
    },
    {
        id: 'p9', title: 'Mini Car MOC – Branco', price: 140,
        image: 'https://s.alicdn.com/@sc04/kf/Hb0a37725cf0046a4a53785193b2d94ecA.jpg_960x960q80.jpg',
        description: 'Sofisticação em branco puro. 268 peças ABS para montar um sport car elegante, ideal para presentear ou exibir na prateleira.',
        specs: ['268 peças ABS de alta qualidade', 'Cor: Branco', 'Ideal para maiores de 14 anos', 'Embalagem presente inclusa']
    },
    {
        id: 'p10', title: 'Sport Car MOC – Vermelho', price: 140,
        image: 'https://s.alicdn.com/@sc04/kf/H0735dff1ec5c4351992a51aef0d8925ek.jpg_960x960q80.jpg',
        description: 'Clássico vermelho esportivo em miniatura. Blocos ABS com excelente custo-benefício para iniciar ou complementar sua coleção.',
        specs: ['50 peças ABS de alta qualidade', 'Cor: Vermelho', 'Ideal para maiores de 14 anos', 'Embalagem presente inclusa']
    },
    {
        id: 'p11', title: 'Super Car ABS – Laranja & Preto', price: 140,
        image: 'https://s.alicdn.com/@sc04/kf/H46ccc11548c24a6d8f83c564c2b2887em.jpg_960x960q80.jpg',
        description: 'Combinação explosiva de laranja e preto. Supercar com contraste marcante e blocos ABS de qualidade para uma montagem incrível.',
        specs: ['50 peças ABS de alta qualidade', 'Cores: Laranja e Preto', 'Ideal para maiores de 14 anos', 'Embalagem presente inclusa']
    },
    {
        id: 'p12', title: 'Supercar Técnico – Branco & Amarelo', price: 140,
        image: 'https://s.alicdn.com/@sc04/kf/H4a02826aa2174fbb9291835c5a6e28dbJ.jpg_960x960q80.jpg',
        description: 'Supercar técnico com 326 peças em branco e amarelo racing. Design inspirado em carros de competição com montagem detalhada e precisa.',
        specs: ['326 peças ABS de alta qualidade', 'Cores: Branco e Amarelo', 'Ideal para maiores de 14 anos', 'Embalagem presente inclusa']
    },
    {
        id: 'p13', title: 'Mini Super Car – Cinza', price: 140,
        image: 'https://s.alicdn.com/@sc04/kf/H903513c1c02d45269fa7e05b25be39ceH.jpg_960x960q80.jpg',
        description: 'Supercar compacto em cinza elegante. Blocos ABS que reproduzem um carro esportivo com estilo discreto e sofisticado.',
        specs: ['50 peças ABS de alta qualidade', 'Cor: Cinza', 'Ideal para maiores de 14 anos', 'Embalagem presente inclusa']
    },
    {
        id: 'p14', title: 'Technical SUV – Preto', price: 140,
        image: 'https://s.alicdn.com/@sc04/kf/Haedb162b50484bcfacbad12115581044w.jpg_960x960q80.jpg',
        description: 'SUV técnico em preto poderoso. Com 351 peças detalhadas, reproduz um veículo de alto padrão com precisão e robustez impressionantes.',
        specs: ['351 peças ABS de alta qualidade', 'Cor: Preto', 'Ideal para maiores de 14 anos', 'Embalagem presente inclusa']
    },
    {
        id: 'p15', title: 'Nostalgic Supercar – Preto', price: 140,
        image: 'https://s.alicdn.com/@sc04/kf/H58439e436ec640948e2535e2528c5dc2d.jpg_960x960q80.jpg',
        description: 'Arte nostálgica em blocos pretos. 359 peças que reconstroem o charme atemporal dos supercars clássicos numa montagem cativante e criativa.',
        specs: ['359 peças ABS de alta qualidade', 'Cor: Preto', 'Ideal para maiores de 14 anos', 'Embalagem presente inclusa']
    },
    {
        id: 'p16', title: 'Technical Car MOC – Cinza', price: 140,
        image: 'https://s.alicdn.com/@sc04/kf/H6adae2f5f5824e2ea06735997e1a6521z.jpg_960x960q80.jpg',
        description: 'Carro técnico em cinza refinado. Conjunto com 332 peças que combina engenharia e arte num modelo que vale qualquer prateleira de colecionador.',
        specs: ['332 peças ABS de alta qualidade', 'Cor: Cinza', 'Ideal para maiores de 14 anos', 'Embalagem presente inclusa']
    },
    {
        id: 'p17', title: 'Mini Sport Car – Preto & Branco', price: 140,
        image: 'https://s.alicdn.com/@sc04/kf/H2d271c4b85974d8da09e4bc3730a3f23l.jpg_960x960q80.jpg',
        description: 'Contraste clássico em preto e branco. 313 peças eco-friendly que montam um sport car elegante com personalidade marcante e acabamento impecável.',
        specs: ['313 peças ABS eco-friendly', 'Cores: Preto e Branco', 'Ideal para maiores de 14 anos', 'Embalagem presente inclusa']
    }
];

const linhapremiun = [
    {
        id: 'm1', title: 'MOC Mini Beetle Camping Car – PB8805', price: 230,
        image: 'https://s.alicdn.com/@sc04/kf/Hd58c85a3c1da41b2bc71ffb070088e2eX.jpg_960x960q80.jpg',
        description: 'O icônico Fusca Camping em escala 1:18 com 582 blocos de alta precisão. Design nostálgico e encantador que cativa colecionadores do mundo inteiro.',
        specs: ['582 peças ABS premium', 'Escala 1:18', 'Design MOC exclusivo', 'Embalagem caixa colorida premium']
    },
    {
        id: 'm2', title: 'Mini Racing Car Supra A80 – PB8815', price: 230,
        image: 'https://s.alicdn.com/@sc04/kf/H3746b73546fb466fbe0343eb037490ddC.jpg_960x960q80.jpg',
        description: 'A lenda japonesa Toyota Supra A80 em escala 1:32 com 439 peças. Detalhes de corrida que fazem deste modelo uma joia para fãs do JDM.',
        specs: ['439 peças ABS premium', 'Escala 1:32', 'Design MOC exclusivo Supra A80', 'Embalagem caixa colorida premium']
    },
    {
        id: 'm3', title: 'MOC MK2 Mini Sports Car – PB8839', price: 230,
        image: 'https://s.alicdn.com/@sc04/kf/H634f883c7e8140c8b2e6c6ab2c02fbd32.jpg_960x960q80.jpg',
        description: 'O clássico MK2 em escala 1:18 com 479 peças detalhadas. Um tributo ao design esportivo dos anos 80 recriado com fidelidade absoluta em blocos.',
        specs: ['479 peças ABS premium', 'Escala 1:18', 'Design MOC MK2 exclusivo', 'Embalagem caixa colorida premium']
    },
    {
        id: 'm4', title: 'MOC Mini Sports Car – PB8808', price: 230,
        image: 'https://s.alicdn.com/@sc04/kf/H66c2c75f4401491eb65ed252490ecb8aa.jpg_960x960q80.jpg',
        description: 'Supercar esportivo em escala 1:18 com 367 peças de altíssima qualidade. Design simulação que reproduz cada curva com precisão de detalhes impressionante.',
        specs: ['367 peças ABS premium', 'Escala 1:18', 'Design MOC exclusivo', 'Embalagem caixa colorida premium']
    }
];

const expositores = [
    {
        id: 'e1', title: 'City Speed Racer Vintage Garage', price: 220,
        image: 'https://s.alicdn.com/@sc04/kf/H7f7955955e554d388f9c695a519b4908D.jpg_960x960q80.jpg',
        description: 'Garagem vintage com rampa elevatória e cena de oficina em escala 1:24. Com 750 peças, cria o cenário perfeito para expor sua coleção de miniaturas.',
        specs: ['750 peças ABS de alta qualidade', 'Escala 1:24', 'Cena de oficina com rampa elevatória', 'Compatível com miniaturas 1:24']
    },
    {
        id: 'e2', title: 'MOC Vintage Garage Workshop – X5007', price: 220,
        image: 'https://s.alicdn.com/@sc04/kf/H3a0391bd765a4033a39f730518c001ffn.jpg_960x960q80.jpg',
        description: 'Oficina vintage estilo Speed Racer com 532 peças e rampa elevatória em escala 1:35. O cenário ideal para colecionar e exibir com personalidade.',
        specs: ['532 peças ABS de alta qualidade', 'Escala 1:35', 'Rampa elevatória inclusa', 'Design nostálgico Speed Racer']
    },
    {
        id: 'e3', title: 'City Street View – Car Repair Shop', price: 220,
        image: 'https://s.alicdn.com/@sc04/kf/He03456dc3a104fc1aa156e7cccf46282C.jpg_960x960q80.jpg',
        description: 'Loja de reparo automotivo com visual urbano e 489 peças detalhadas. Cenário da série City Street View para exibir sua coleção com charme e estilo.',
        specs: ['489 peças ABS de alta qualidade', 'Série City Street View', 'Cena de loja de reparo automotivo', 'Compatível com miniaturas da linha']
    }
];

// Mapa rápido de id → produto
const allProducts = [...linhapadrao, ...linhapremiun, ...expositores].reduce((acc, p) => {
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
    const imageHtml = `
        <div class="product-image-wrapper">
            <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
        </div>
    `;

    return `
        <div class="product-card reveal-up" data-id="${product.id}" data-tilt onclick="openProductDetail('${product.id}')">
            ${imageHtml}
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
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
    document.getElementById('padrao-grid').innerHTML = linhapadrao.map(createProductCard).join('');
    document.getElementById('premium-grid').innerHTML = linhapremiun.map(createProductCard).join('');
    document.getElementById('expositores-grid').innerHTML = expositores.map(createProductCard).join('');
    initTiltEffect();
}

// --- Hero Slideshow ---
const heroSlideImages = [
    'https://s.alicdn.com/@sc04/kf/H1608910cf6a84e9380d72127178287764.jpg_960x960q80.jpg',
    'https://s.alicdn.com/@sc04/kf/H28a0ffceb9e4454f93ba5dda0134b9f8m.jpg_960x960q80.jpg',
    'https://s.alicdn.com/@sc04/kf/H75de83813b674065970db9413315da57x.jpg_960x960q80.jpg',
    'https://s.alicdn.com/@sc04/kf/Hd58c85a3c1da41b2bc71ffb070088e2eX.jpg_960x960q80.jpg',
    'https://s.alicdn.com/@sc04/kf/H3746b73546fb466fbe0343eb037490ddC.jpg_960x960q80.jpg',
    'https://s.alicdn.com/@sc04/kf/H7f7955955e554d388f9c695a519b4908D.jpg_960x960q80.jpg',
];

let currentSlide = 0;
let slideInterval = null;

function initHeroSlideshow() {
    const slideshowEl = document.getElementById('hero-slideshow');
    const indicatorsEl = document.getElementById('hero-indicators');

    heroSlideImages.forEach((src, i) => {
        const slide = document.createElement('div');
        slide.className = 'hero-slide' + (i === 0 ? ' active' : '');
        slide.style.backgroundImage = `url('${src}')`;
        slideshowEl.appendChild(slide);

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
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
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
function trackEvent(eventName, params) {
    if (typeof gtag === 'function') {
        gtag('event', eventName, params);
    }
}

function openProductDetail(id) {
    const product = allProducts[id];
    if (!product) return;

    const categoryMap = { p: 'Linha Padrão', m: 'Linha Premium', e: 'Expositor' };
    trackEvent('view_item', {
        item_id: id,
        item_name: product.title,
        item_category: categoryMap[id[0]] || 'Produto',
        price: product.price
    });

    const overlay = document.getElementById('product-detail-overlay');
    const wrapper = document.getElementById('product-detail-wrapper');
    const imagesEl = document.getElementById('product-detail-images');
    const badgeEl = document.getElementById('product-detail-badge');
    const titleEl = document.getElementById('product-detail-title');
    const priceEl = document.getElementById('product-detail-price');
    const descEl = document.getElementById('product-detail-description');
    const specsEl = document.getElementById('product-detail-specs');
    const addBtn = document.getElementById('product-detail-add');

    imagesEl.className = 'product-detail-images';
    imagesEl.innerHTML = `<img src="${product.image}" alt="${product.title}" class="detail-img-main">`;

    const badgeMap = { p: 'Linha Padrão', m: 'Linha Premium', e: 'Expositor' };
    badgeEl.textContent = badgeMap[id[0]] || 'Produto';
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
    trackEvent('add_to_cart', { item_id: id, item_name: title, price: price });
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
    trackEvent('begin_checkout', {
        value: cart.reduce((s, i) => s + i.price, 0),
        items: cart.map(i => ({ item_id: i.id, item_name: i.title, price: i.price }))
    });
    closeCart();
    modalOverlay.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

// --- Rastreamento de seções visitadas ---
function initSectionTracking() {
    const sections = [
        { id: 'padrao', name: 'Linha Padrão' },
        { id: 'premium', name: 'Linha Premium' },
        { id: 'expositores', name: 'Expositores' }
    ];
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = sections.find(s => s.id === entry.target.id);
                if (section) trackEvent('view_section', { section_name: section.name });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(s => {
        const el = document.getElementById(s.id);
        if (el) observer.observe(el);
    });
}

// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlideshow();
    renderProducts();
    initScrollReveal();
    initScrollScrubbing();
    updateCartUI();
    initSectionTracking();
});
