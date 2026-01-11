
// Product Database
const productsData = {
    'frankincense': {
        name: 'Frankincense',
        subtitle: 'Gum Olibanum',
        img: 'images/f 1.jpg',
        overview: 'Known for its spiritual significance and soothing aroma, Frankincense, also known as Gum Olibanum resin, is extensively used in aromatherapy, skincare, and wellness products. Its calming scent has made it a staple in many therapeutic practices.',
        usage: 'Frankincense is widely used in the creation of incense, essential oils, and perfumes. Its anti-inflammatory properties make it a popular ingredient in skincare products.',
        group: 'Aromatic Resin, Resin',
        packaging: '25kg, 50kg, and 100kg bags',
        sources: 'Somalia, Ethiopia, Kenya',
        applications: ['Cosmetics', 'Flavor + Fragrance', 'Incense', 'Perfumery', 'Technical', 'Aromatherapy', 'Supplements']
    },
    'myrrh': {
        name: 'Myrrh',
        subtitle: 'Commiphora Myrrha',
        img: 'images/myrrh 2.jpg',
        overview: 'Myrrh gum is a highly sought-after and naturally-growing aromatic resin prized for its use in perfumery, traditional medicine, and religious rituals. Its rich, earthy scent and therapeutic properties have been valued for centuries.',
        usage: 'Myrrh is commonly used in incense and perfumes for its distinctive fragrance. It also plays a significant role in traditional medicine for its antiseptic properties.',
        group: 'Aromatic Resin, Resin',
        packaging: '25kg, 50kg, and 100kg bags',
        sources: 'Somalia, Ethiopia, Kenya',
        applications: ['Cosmetics', 'Flavor + Fragrance', 'Incense', 'Perfumery', 'Aromatherapy', 'Supplements', 'Oral Health']
    },
    'gum-arabic': {
        name: 'Gum Arabic',
        subtitle: 'Acacia Gum',
        img: 'images/agum 2.jpg',
        overview: 'The Acacia Gum, also known as Arabic Gum, is a versatile resin highly valued in the food, pharmaceutical, and cosmetic industries. Its natural emulsifying properties make it an essential ingredient.',
        usage: 'Gum Arabic is commonly used as a thickening agent in food products, a binder in pharmaceuticals, and an emulsifier in cosmetics.',
        group: 'Hydrocolloid, Emulsifier, Stabiliser',
        packaging: '25kg, 50kg, and 100kg bags',
        sources: 'Sudan Belt, Kenya, Ethiopia',
        applications: ['Bakery', 'Beverage', 'Chewing Gum', 'Confectionery', 'Cosmetics', 'Dairy', 'Food', 'Pharma']
    },
    'opoponax': {
        name: 'Opoponax',
        subtitle: 'Sweet Myrrh',
        img: 'images/opoponax 4.png',
        overview: 'Often called "sweet myrrh", Opoponax has an earthy-sweet, balsam-like fragrance. Its unique scent makes it a favorite in aromatherapy and perfumery.',
        usage: 'Opoponax is widely used in incense and perfumes due to its soothing and grounding scent. Valued in aromatherapy for calming effects.',
        group: 'Aromatic Resin',
        packaging: '25kg, 50kg, and 100kg bags',
        sources: 'Somalia, Ethiopia, Kenya',
        applications: ['Cosmetics', 'Fragrance', 'Incense', 'Perfumery', 'Aromatherapy']
    }
};

// Logic for Product Details Page
function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const container = document.getElementById('product-content');

    if (!container) return; // Not on details page

    const p = productsData[productId];

    if (!p) {
        container.innerHTML = '<div class="text-center py-5"><h3>Product not found</h3><a href="products.html" class="btn btn-primary mt-3">Back to Products</a></div>';
        return;
    }

    // Update Page Title
    document.title = `${p.name} - Bari Trading`;

    // Render Content
    const appsHtml = p.applications.map(app => 
        `<div class="col-6 col-md-4 mb-2"><div class="d-flex align-items-center"><i class="bi bi-check-circle-fill text-success me-2"></i> ${app}</div></div>`
    ).join('');

    container.innerHTML = `
        <div class="position-relative" style="height: 400px; margin-top: -76px;">
            <div class="position-absolute w-100 h-100 bg-dark opacity-50 z-1"></div>
            <img src="${p.img}" class="w-100 h-100 object-fit-cover position-absolute top-0 start-0" alt="${p.name}">
            <div class="container position-relative z-2 h-100 d-flex flex-column justify-content-center text-white text-center">
                <h1 class="display-3 fw-bold mb-2 animate-fade-up">${p.name}</h1>
                <p class="fs-3 text-warning mb-4">${p.subtitle}</p>
            </div>
        </div>

        <div class="container section-padding">
            <div class="row gx-5">
                <div class="col-lg-8 mb-5 mb-lg-0">
                    <div class="mb-5">
                        <h2 class="fw-bold mb-3">Overview</h2>
                        <p class="lead text-secondary">${p.overview}</p>
                    </div>

                    <div class="mb-5">
                        <h4 class="fw-bold mb-3">Usage</h4>
                        <p class="text-secondary">${p.usage}</p>
                    </div>

                    <div class="card bg-amber-50 border-0 p-4 mb-4">
                        <h5 class="fw-bold text-primary mb-3"><i class="bi bi-tag me-2"></i>Group Info</h5>
                        <p class="mb-0 text-dark">${p.group}</p>
                    </div>

                    <div class="row g-4 mb-5">
                        <div class="col-md-6">
                            <div class="card bg-light border-0 p-4 h-100">
                                <h5 class="fw-bold text-dark mb-3"><i class="bi bi-globe me-2 text-success"></i>Our Sources</h5>
                                <p class="mb-0 text-secondary">${p.sources}</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card bg-light border-0 p-4 h-100">
                                <h5 class="fw-bold text-dark mb-3"><i class="bi bi-box-seam me-2 text-warning"></i>Packaging</h5>
                                <p class="mb-0 text-secondary">${p.packaging}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 class="fw-bold mb-4">Applications</h4>
                        <div class="row">
                            ${appsHtml}
                        </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card border-0 shadow-lg p-4 sticky-top" style="top: 100px;">
                        <h3 class="fw-bold mb-2">Interested?</h3>
                        <p class="text-muted mb-4">Contact us for a quote, specification sheet, or sample request.</p>
                        
                        <a href="https://wa.me/254741708331?text=I am interested in ${p.name}" target="_blank" class="btn btn-success btn-lg w-100 mb-3 d-flex align-items-center justify-content-center">
                            <i class="bi bi-whatsapp me-2"></i> Order via WhatsApp
                        </a>
                        
                        <a href="contact.html" class="btn btn-outline-dark w-100 py-2">Contact Sales Team</a>

                        <hr class="my-4">
                        <div class="small text-muted">
                            <div class="mb-2"><i class="bi bi-truck me-2"></i> Global Shipping Available</div>
                            <div><i class="bi bi-shield-check me-2"></i> Certified Quality</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Logic for Gallery Filtering
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item-col');
    const buttons = document.querySelectorAll('.gallery-filter-btn');

    // Update active button
    buttons.forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.add('active', 'btn-primary');
            btn.classList.remove('btn-outline-primary');
        } else {
            btn.classList.remove('active', 'btn-primary');
            btn.classList.add('btn-outline-primary');
        }
    });

    // Show/Hide items
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            setTimeout(() => item.style.opacity = '1', 50);
        } else {
            item.style.opacity = '0';
            setTimeout(() => item.style.display = 'none', 300);
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProductDetails();
});
