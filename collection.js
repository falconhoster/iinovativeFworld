/* ============================================
   INNOVATIVE FURNITURE — Collection Page Logic
   ============================================ */

(function () {
    const params = new URLSearchParams(window.location.search);
    const collectionId = params.get('id');

    if (!collectionId || !COLLECTIONS[collectionId]) {
        window.location.href = 'index.html';
        return;
    }

    const collection = COLLECTIONS[collectionId];

    // Update page title
    document.title = `${collection.name} Collection | Innovative Furniture`;

    // Populate hero
    document.getElementById('heroNumber').textContent = collection.number;
    document.getElementById('heroTitle').textContent = `${collection.name} Collection`;
    document.getElementById('heroDesc').textContent = collection.description;
    const heroImg = document.getElementById('heroImg');
    heroImg.src = collection.heroImage;
    heroImg.alt = `${collection.name} Collection`;

    // Populate products
    document.getElementById('productsTitle').textContent = `${collection.name} Products`;
    document.getElementById('productsCount').textContent = `${collection.products.length} pieces in this collection`;

    const grid = document.getElementById('productsGrid');
    collection.products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-card-img">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-card-info">
                <h3 class="product-card-name">${product.name}</h3>
                <p class="product-card-price">${product.price} NZD</p>
                ${product.colors ? `<p class="product-card-colors">${product.colors}</p>` : ''}
                ${product.variant ? `<p class="product-card-colors">${product.variant}</p>` : ''}
            </div>
        `;
        grid.appendChild(card);
    });

    // Populate other collections (up to 3, excluding current)
    const otherGrid = document.getElementById('otherGrid');
    const allIds = Object.keys(COLLECTIONS).filter(id => id !== collectionId);
    const shuffled = allIds.sort(() => 0.5 - Math.random()).slice(0, 3);

    shuffled.forEach(id => {
        const col = COLLECTIONS[id];
        const link = document.createElement('a');
        link.href = `collection.html?id=${id}`;
        link.className = 'collection-card';
        link.innerHTML = `
            <div class="card-img">
                <img src="${col.heroImage}" alt="${col.name} Collection" loading="lazy">
            </div>
            <div class="card-overlay">
                <span class="card-number">${col.number}</span>
                <h3 class="card-title">${col.name}</h3>
                <p class="card-subtitle">${col.tagline}</p>
                <span class="card-cta">Explore &rarr;</span>
            </div>
        `;
        otherGrid.appendChild(link);
    });

    // Re-init scroll reveal for dynamically added cards
    const cards = document.querySelectorAll('.product-card, .collection-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 60);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    cards.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
})();
