document.addEventListener('DOMContentLoaded', () => {

    // --- 0.0) GSAP Setup (Native Scroll) ---
    gsap.registerPlugin(ScrollTrigger);

    // --- 0.0b) Lenis Smooth Scrolling ---
    let lenis = null;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        // Connect Lenis to GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
    }

    // --- 0.1) Translations & i18n ---
    const translations = {
        en: {
            title: "Gourmet Haven",
            cart: "Your Cart",
            total: "Total",
            checkout: "Checkout",
            addToCart: "Add to Cart",
            viewDetails: "View Details",
            chefPick: "Chef's Pick",
            bookTable: "Book a Table",
            admin: "Admin Dashboard",
            reservations: "Recent Reservations",
            menuMgmt: "Menu Management",
            price: "Price",
            actions: "Actions",
            emptyCart: "Your cart is empty.",
            navHome: "Home",
            navStory: "Our Story",
            navMenu: "Menu",
            navReviews: "Reviews",
            heroTitle: "Taste the Extraordinary",
            heroSubtitle: "Experience culinary excellence in an atmosphere of elegance.",
            viewMenu: "View Menu",
            storyTitle: "A Love Letter to Casablanca",
            storyQuote: "\"To cook in Casablanca is to paint with spices. We honor tradition not by preserving it in amber, but by letting it dance with the new.\"",
            storyText: "Nestled where the Atlantic breeze meets the vibrant pulse of the Medina, Gourmet Haven is a Culinary Sanctuary. We weave the rich tapestry of Moroccan Heritage with the precision of Modern Artistry. From the Souk to the Plate, every ingredient tells a story of sun-drenched earth and ancient spice routes, reimagined for the contemporary palate.",
            menuTitle: "Signature Dishes",
            menuSubtitle: "A selection of our most popular creations",
            filterAll: "All",
            filterStarters: "Starters",
            filterMains: "Mains",
            filterDesserts: "Desserts",
            filterFavorites: "Favorites",
            reviewsTitle: "Guest Reviews",
            teaserTitle: "Reserve Your Spot",
            teaserText: "Join us for an unforgettable evening. Reservations are highly recommended for weekends.",
            bookNow: "Book Now",
            newsletterTitle: "Join Our Newsletter",
            newsletterText: "Subscribe to get the latest updates and secret recipes.",
            subscribe: "Subscribe",
            footerDesc: "Experience culinary excellence in the heart of Casablanca.",
            openingHours: "Opening Hours",
            followUs: "Follow Us",
            copyright: "© 2025 Gourmet Haven. All rights reserved.",
            noResults: "No dishes match your search.",
            checkoutTitle: "Confirm Order",
            checkoutDesc: "Complete your order via WhatsApp",
            sendWhatsApp: "Send to WhatsApp",
            printOrders: "Print Orders"
        },
        fr: {
            title: "Gourmet Haven",
            cart: "Votre Panier",
            total: "Total",
            checkout: "Commander",
            addToCart: "Ajouter au panier",
            viewDetails: "Voir Détails",
            chefPick: "Choix du Chef",
            bookTable: "Réserver",
            admin: "Tableau de Bord",
            reservations: "Réservations Récentes",
            menuMgmt: "Gestion du Menu",
            price: "Prix",
            actions: "Actions",
            emptyCart: "Votre panier est vide.",
            navHome: "Accueil",
            navStory: "Notre Histoire",
            navMenu: "Menu",
            navReviews: "Avis",
            heroTitle: "Goûtez à l'Extraordinaire",
            heroSubtitle: "L'excellence culinaire dans une atmosphère d'élégance.",
            viewMenu: "Voir le Menu",
            storyTitle: "Une Lettre d'Amour à Casablanca",
            storyQuote: "\"Cuisiner à Casablanca, c'est peindre avec des épices. Nous honorons la tradition non pas en la figeant, mais en la faisant danser avec le nouveau.\"",
            storyText: "Niché là où la brise atlantique rencontre le pouls vibrant de la Médina, Gourmet Haven est un sanctuaire culinaire. Nous tissons la riche tapisserie de l'héritage marocain avec la précision de l'art moderne. Du Souk à l'Assiette, chaque ingrédient raconte une histoire de terre ensoleillée et d'anciennes routes des épices.",
            menuTitle: "Plats Signature",
            menuSubtitle: "Une sélection de nos créations les plus populaires",
            filterAll: "Tous",
            filterStarters: "Entrées",
            filterMains: "Plats",
            filterDesserts: "Desserts",
            filterFavorites: "Favoris",
            reviewsTitle: "Avis des Clients",
            teaserTitle: "Réservez Votre Place",
            teaserText: "Rejoignez-nous pour une soirée inoubliable. Réservations recommandées pour les week-ends.",
            bookNow: "Réserver",
            newsletterTitle: "Rejoignez Notre Newsletter",
            newsletterText: "Abonnez-vous pour obtenir les dernières mises à jour et recettes secrètes.",
            subscribe: "S'abonner",
            footerDesc: "L'excellence culinaire au cœur de Casablanca.",
            openingHours: "Heures d'Ouverture",
            followUs: "Suivez-nous",
            copyright: "© 2025 Gourmet Haven. Tous droits réservés.",
            noResults: "Aucun plat ne correspond à votre recherche.",
            checkoutTitle: "Confirmer la commande",
            checkoutDesc: "Complétez votre commande via WhatsApp",
            sendWhatsApp: "Envoyer sur WhatsApp",
            printOrders: "Imprimer les commandes"
        },
        ar: {
            title: "الملاذ الذواقة",
            cart: "عربة التسوق",
            total: "المجموع",
            checkout: "دفع",
            addToCart: "أضف إلى العربة",
            viewDetails: "التفاصيل",
            chefPick: "اختيار الشيف",
            bookTable: "احجز طاولة",
            admin: "لوحة التحكم",
            reservations: "الحجوزات الأخيرة",
            menuMgmt: "إدارة القائمة",
            price: "السعر",
            actions: "إجراءات",
            emptyCart: "عربة التسوق فارغة.",
            navHome: "الرئيسية",
            navStory: "قصتنا",
            navMenu: "القائمة",
            navReviews: "آراء الزبائن",
            heroTitle: "تذوق الاستثنائي",
            heroSubtitle: "تجربة الطهي الممتازة في جو من الأناقة.",
            viewMenu: "عرض القائمة",
            storyTitle: "رسالة حب إلى الدار البيضاء",
            storyQuote: "\"الطبخ في الدار البيضاء هو الرسم بالتوابل. نحن نكرم التقاليد ليس بتجميدها، بل بجعلها تتناغم مع كل ما هو جديد.\"",
            storyText: "يقع ملاذ الذواقة حيث يلتقي نسيم المحيط الأطلسي بنبض المدينة العتيقة، ليكون ملاذاً للطهي. ننسج النسيج الغني للتراث المغربي بدقة الفن الحديث. من السوق إلى الصحن، يحكي كل مكون قصة الأرض المشمسة وطرق التوابل القديمة.",
            menuTitle: "أطباق مميزة",
            menuSubtitle: "مختارات من إبداعاتنا الأكثر شعبية",
            filterAll: "الكل",
            filterStarters: "مقبلات",
            filterMains: "أطباق رئيسية",
            filterDesserts: "حلويات",
            filterFavorites: "المفضلة",
            reviewsTitle: "آراء الضيوف",
            teaserTitle: "احجز مكانك",
            teaserText: "انضم إلينا لأمسية لا تُنسى. الحجوزات موصى بها بشدة لعطلات نهاية الأسبوع.",
            bookNow: "احجز الآن",
            newsletterTitle: "اشترك في نشرتنا الإخبارية",
            newsletterText: "اشترك للحصول على آخر التحديثات والوصفات السرية.",
            subscribe: "اشتراك",
            footerDesc: "التميز في الطهي في قلب الدار البيضاء.",
            openingHours: "ساعات العمل",
            followUs: "تابعنا",
            copyright: "© 2025 الملاذ الذواقة. جميع الحقوق محفوظة.",
            noResults: "لا توجد أطباق تطابق بحثك.",
            checkoutTitle: "تأكيد الطلب",
            checkoutDesc: "أكمل طلبك عبر واتساب",
            sendWhatsApp: "أرسل إلى واتساب",
            printOrders: "طباعة الطلبات"
        }
    };

    let currentLang = localStorage.getItem('gh-lang') || 'en';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- 1) Toasts ---
    const toastContainer = document.getElementById('toastContainer');
    const showToast = (message, type = 'info', timeout = 3200) => {
        if (!toastContainer) {
            alert(message);
            return;
        }

        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        toast.innerHTML = `
            <div class="toast__msg">${message}</div>
            <button class="toast__close" type="button" aria-label="Close notification">&times;</button>
        `;

        const remove = () => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            setTimeout(() => toast.remove(), 180);
        };

        toast.querySelector('.toast__close')?.addEventListener('click', remove);
        toastContainer.appendChild(toast);
        window.setTimeout(remove, timeout);
    };

    // --- 2) Theme Toggle ---
    const THEME_KEY = 'gh-theme';
    const themeToggle = document.getElementById('themeToggle');

    const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const applyTheme = (theme) => {
        document.documentElement.dataset.theme = theme;
        if (!themeToggle) return;

        themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
        const icon = themeToggle.querySelector('i');
        if (icon) icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    };

    const initTheme = () => {
        const saved = localStorage.getItem(THEME_KEY);
        applyTheme(saved || getSystemTheme());
    };
    initTheme();

    themeToggle?.addEventListener('click', () => {
        const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        localStorage.setItem(THEME_KEY, next);
        applyTheme(next);
        showToast(`Theme: ${next === 'dark' ? 'Dark' : 'Light'}`, 'success', 1700);
    });

    // --- 3) Dish Data ---
    // Modified to load from LocalStorage for Admin features
    let dishData = JSON.parse(localStorage.getItem('gh-dishes')) || [
        { id: 'Tiramisu', category: 'dessert', featured: true, title: 'Classic Tiramisu', price: '$12', img: 'images/tiramisu.jpg', desc: 'A timeless Italian dessert. Layers of coffee-soaked ladyfingers and creamy, rich mascarpone cheese.', dietary: ['V'] },
        { id: 'BeefBurrito', category: 'main', title: 'Angus Beef Burrito', price: '$18', img: 'images/burrito.jpg', desc: 'Succulent, slow-cooked Angus beef, seasoned black beans, cilantro-lime rice, and aged cheddar cheese.' },
        { id: 'RolledCrepes', category: 'dessert', title: 'Chocolate Rolled Crepes', price: '$10', img: 'images/dish3.jpg', desc: 'Thin, delicate crepes generously filled and rolled with a smooth, rich chocolate sauce.', dietary: ['V'] },
        { id: 'FudgyBrownies', category: 'dessert', title: 'Fudgy Chocolate Brownies', price: '$9', img: 'images/zucchini.jpg', desc: 'Intensely rich and fudgy chocolate brownies with a perfectly crackled top.', dietary: ['V', 'GF'] },
        { id: 'PepperSteak', category: 'main', title: 'Sizzling Pepper Steak', price: '$26', img: 'images/pepper-steak.jpg', desc: 'Tender strips of beef tenderloin and colorful bell peppers, stir-fried in a rich and savory black pepper sauce.', dietary: ['GF'] },
        { id: 'PestoPasta', category: 'main', featured: true, title: 'Pesto Chicken Pasta', price: '$22', img: 'images/chicken-pasta.jpg', desc: 'Al dente pasta tossed with grilled chicken breast in a vibrant, house-made basil pesto sauce.', dietary: ['GF'] },
        { id: 'CrispyChicken', category: 'main', title: 'Crispy Fried Chicken', price: '$20', img: 'images/Crispy Fried Chicken 🐔.jpg', desc: 'Our signature fried chicken, brined for 24 hours and double-dredged for an unbeatable crispy crust.' },
        { id: 'MozzarellaSticks', category: 'starter', title: 'Gourmet Mozzarella Sticks', price: '$14', img: 'images/Healthy Mozzarella Sticks with String Cheese.jpg', desc: 'Premium mozzarella cheese sticks, coated in a seasoned panko breadcrumb mix and fried to a perfect golden brown.', dietary: ['V'] },
        { id: 'SweetCrepes', category: 'dessert', title: 'Artisanal Sweet Crepes', price: '$11', img: 'images/Quick and Easy Crepe Recipe (in a Blender).jpg', desc: 'Light and airy French crepes, filled with a decadent, smooth chocolate-hazelnut spread.', dietary: ['V'] },
        { id: 'HerbChicken', category: 'main', title: 'Creamy Herb Chicken', price: '$24', img: 'images/Creamy Herb Chicken with Mashed Potatoes & Glazed Carrots_ A Complete Comfort Food Dinner.jpg', desc: 'Pan-seared chicken breast bathed in a creamy herb sauce, served with mashed potatoes.', dietary: ['GF'] },
        { id: 'CreamyRamen', category: 'main', title: 'Creamy Miso Ramen', price: '$19', img: 'images/Ramen Crémeux Facile_Ingrédients ___1 paquet de nouilles ramen_200 ml de crème liquide_1 cuillère à soupe de beurre_1 gousse d’ail hachée_1 cuillère à soupe de sauce soja_1 cuillère à café de miso (optionnel)_1 œuf.jpg', desc: 'A rich, creamy broth infused with garlic, soy, and miso, served with perfectly chewy noodles.' },
        { id: 'AromaticSteak', category: 'main', featured: true, title: 'Aromatic Herb Steak', price: '$32', img: 'images/Aromatic.jpg', desc: 'Prime cut sirloin steak, marinated in aromatic herbs like rosemary and thyme, grilled to perfection.', dietary: ['GF'] }
    ];

    const saveDishes = () => localStorage.setItem('gh-dishes', JSON.stringify(dishData));

    const parsePrice = (price) => {
        const n = Number(String(price).replace(/[^0-9.]/g, ''));
        return Number.isFinite(n) ? n : 0;
    };

    // --- 4) Favorites (LocalStorage) ---
    const FAVORITES_KEY = 'gh-favorites';
    const favorites = new Set(JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]'));
    const persistFavorites = () => localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
    const isFavorite = (id) => favorites.has(id);
    const toggleFavorite = (id) => {
        if (favorites.has(id)) {
            favorites.delete(id);
            showToast('Removed from favorites', 'info', 2000);
        } else {
            favorites.add(id);
            showToast('Saved to favorites', 'success', 2000);
        }
        persistFavorites();
    };

    // --- 5) Modal Logic (Accessible) ---
    const reservationModal = document.getElementById('reservationModal');
    const dishModal = document.getElementById('dishModal');
    const checkoutModal = document.getElementById('checkoutModal');

    let openModalEl = null;
    let lastFocusEl = null;

    const getFocusable = (root) => {
        if (!root) return [];
        const selectors = [
            'a[href]',
            'button:not([disabled])',
            'textarea:not([disabled])',
            'input:not([disabled])',
            'select:not([disabled])',
            '[tabindex]:not([tabindex="-1"])'
        ].join(',');
        return [...root.querySelectorAll(selectors)].filter(el => !el.hasAttribute('disabled'));
    };

    const openModal = (modal, opener = null) => {
        if (!modal) return;
        if (openModalEl && openModalEl !== modal) closeModal(openModalEl);

        lastFocusEl = opener || document.activeElement;
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        openModalEl = modal;

        const focusables = getFocusable(modal);
        focusables[0]?.focus();
    };

    const closeModal = (modal) => {
        if (!modal) return;
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        openModalEl = null;

        if (lastFocusEl && typeof lastFocusEl.focus === 'function') lastFocusEl.focus();
        lastFocusEl = null;
    };

    const trapFocus = (e) => {
        if (!openModalEl || e.key !== 'Tab') return;
        const focusables = getFocusable(openModalEl);
        if (!focusables.length) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const isShift = e.shiftKey;

        if (isShift && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!isShift && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    };

    // Bind all buttons that open reservation
    document.querySelectorAll('[id^="openReservation"], #mobileReserveBtn').forEach(btn => {
        btn.addEventListener('click', () => openModal(reservationModal, btn));
    });

    document.querySelector('.close-reservation')?.addEventListener('click', () => closeModal(reservationModal));
    document.querySelector('.close-dish')?.addEventListener('click', () => closeModal(dishModal));
    document.querySelector('.close-checkout')?.addEventListener('click', () => closeModal(checkoutModal));

    window.addEventListener('click', (e) => {
        if (e.target === reservationModal) closeModal(reservationModal);
        if (e.target === dishModal) closeModal(dishModal);
        if (e.target === checkoutModal) closeModal(checkoutModal);
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (openModalEl) closeModal(openModalEl);
        }
        trapFocus(e);
    });

    // Dish Modal Content
    const modalDishImage = document.getElementById('modalDishImage');
    const modalDishTitle = document.getElementById('modalDishTitle');
    const modalDishDesc = document.getElementById('modalDishDesc');
    const modalDishMeta = document.getElementById('modalDishMeta');
    const modalFavoriteBtn = document.getElementById('modalFavoriteBtn');
    const orderDishBtn = document.getElementById('orderDishBtn');
    const copyDishBtn = document.getElementById('copyDishBtn');
    const notesInput = document.getElementById('notes');

    // Inject "Add to Cart" in Modal
    const modalActionContainer = orderDishBtn?.parentElement;
    const modalAddToCartBtn = document.createElement('button');
    modalAddToCartBtn.className = 'submit-btn'; // Reuse existing class
    modalAddToCartBtn.style.marginLeft = '10px';
    modalAddToCartBtn.style.background = '#333';
    if (modalActionContainer) modalActionContainer.insertBefore(modalAddToCartBtn, copyDishBtn);

    let currentDish = null;

    const syncDishFavoriteUI = () => {
        if (!currentDish || !modalFavoriteBtn) return;
        const fav = isFavorite(currentDish.id);
        modalFavoriteBtn.setAttribute('aria-pressed', fav ? 'true' : 'false');
        const icon = modalFavoriteBtn.querySelector('i');
        if (icon) icon.className = `${fav ? 'fas' : 'far'} fa-heart`;
    };

    const openDishModal = (dish, opener = null) => {
        currentDish = dish;
        if (modalDishImage) {
            modalDishImage.src = dish.img;
            modalDishImage.alt = dish.title;
        }
        if (modalDishTitle) modalDishTitle.textContent = dish.title;
        if (modalDishDesc) modalDishDesc.textContent = dish.desc;
        if (modalDishMeta) {
            const cat = dish.category.charAt(0).toUpperCase() + dish.category.slice(1);
            modalDishMeta.textContent = `${cat} • ${dish.price}`;
        }

        // Update Modal Add to Cart Text
        modalAddToCartBtn.textContent = translations[currentLang].addToCart;
        modalAddToCartBtn.onclick = () => {
            addToCart(dish);
            closeModal(dishModal);
        };

        syncDishFavoriteUI();
        openModal(dishModal, opener);
    };

    modalFavoriteBtn?.addEventListener('click', () => {
        if (!currentDish) return;
        toggleFavorite(currentDish.id);
        syncDishFavoriteUI();
        renderMenu();
    });

    orderDishBtn?.addEventListener('click', () => {
        if (!currentDish) return;
        closeModal(dishModal);
        openModal(reservationModal, orderDishBtn);
        if (notesInput) {
            const line = `Booking for: ${currentDish.title}`;
            notesInput.value = notesInput.value.trim() ? `${notesInput.value.trim()}\n${line}` : line;
        }
    });

    copyDishBtn?.addEventListener('click', async () => {
        if (!currentDish) return;
        try {
            await navigator.clipboard.writeText(currentDish.title);
            showToast('Dish name copied', 'success', 1800);
        } catch {
            showToast('Copy not available in this browser. Please copy manually.', 'error', 2600);
        }
    });

    // --- 5.1) Shopping Cart Logic ---
    let cart = JSON.parse(localStorage.getItem('gh-cart')) || [];
    
    const cartSidebar = document.createElement('div');
    cartSidebar.className = 'cart-sidebar';
    document.body.appendChild(cartSidebar);

    const cartFloat = document.createElement('div');
    cartFloat.className = 'cart-float';
    cartFloat.innerHTML = `<i class="fas fa-shopping-cart"></i><span class="cart-count">0</span>`;
    document.body.appendChild(cartFloat);

    const toggleCart = () => cartSidebar.classList.toggle('open');
    cartFloat.addEventListener('click', toggleCart);

    const saveCart = () => {
        localStorage.setItem('gh-cart', JSON.stringify(cart));
        renderCart();
    };

    const addToCart = (dish) => {
        const existing = cart.find(item => item.id === dish.id);
        if (existing) {
            existing.qty++;
        } else {
            cart.push({ ...dish, qty: 1 });
        }
        saveCart();
        showToast(`${dish.title} added to cart`, 'success', 1500);
    };

    const updateCartQty = (id, change) => {
        const item = cart.find(i => i.id === id);
        if (!item) return;
        item.qty += change;
        if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
        saveCart();
    };

    const renderCart = () => {
        const t = translations[currentLang];
        const count = cart.reduce((acc, item) => acc + item.qty, 0);
        const total = cart.reduce((acc, item) => acc + (parsePrice(item.price) * item.qty), 0);
        
        cartFloat.querySelector('.cart-count').textContent = count;

        cartSidebar.innerHTML = `
            <div class="cart-header">
                <h2>${t.cart}</h2>
                <button class="toast__close" style="font-size:1.5rem;">&times;</button>
            </div>
            <div class="cart-items">
                ${cart.length === 0 ? `<p>${t.emptyCart}</p>` : cart.map(item => `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <h4>${item.title}</h4>
                            <span>${item.price} x ${item.qty}</span>
                        </div>
                        <div class="cart-controls">
                            <button class="cart-btn dec" data-id="${item.id}">-</button>
                            <span>${item.qty}</span>
                            <button class="cart-btn inc" data-id="${item.id}">+</button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="cart-footer">
                <div class="cart-total">
                    <span>${t.total}</span>
                    <span>$${total.toFixed(2)}</span>
                </div>
                <button class="checkout-btn">${t.checkout}</button>
            </div>
        `;

        cartSidebar.querySelector('.toast__close').addEventListener('click', toggleCart);
        cartSidebar.querySelectorAll('.dec').forEach(b => b.addEventListener('click', () => updateCartQty(b.dataset.id, -1)));
        cartSidebar.querySelectorAll('.inc').forEach(b => b.addEventListener('click', () => updateCartQty(b.dataset.id, 1)));
        cartSidebar.querySelector('.checkout-btn')?.addEventListener('click', () => {
            if (cart.length === 0) return;
            toggleCart();
            openModal(checkoutModal);
        });
    };
    renderCart();

    // --- 5.2) WhatsApp Checkout Logic ---
    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('waName').value;
        const address = document.getElementById('waAddress').value;
        
        if (!name || !address) return;

        const itemsList = cart.map(i => `- ${i.qty}x ${i.title} ($${(parsePrice(i.price) * i.qty).toFixed(2)})`).join('%0a');
        const total = cart.reduce((acc, item) => acc + (parsePrice(item.price) * item.qty), 0).toFixed(2);
        
        const message = `*New Order from ${name}*%0a` +
                        `📍 Address: ${address}%0a%0a` +
                        `*Items:*%0a${itemsList}%0a%0a` +
                        `*Total Price: $${total}*`;

        const phoneNumber = "212645713066"; // Morocco format
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        
        window.open(url, '_blank');
        closeModal(checkoutModal);
        cart = []; // Clear cart after sending
        saveCart();
    });

    // --- 6) Menu (Filters + Search + Sort) ---
    const menuGrid = document.getElementById('menuGrid');
    const menuEmpty = document.getElementById('menuEmpty');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuSearch = document.getElementById('menuSearch');
    const menuSort = document.getElementById('menuSort');

    let activeFilter = 'all';

    const debounce = (fn, wait = 140) => {
        let t;
        return (...args) => {
            clearTimeout(t);
            t = setTimeout(() => fn(...args), wait);
        };
    };

    const getMenuState = () => {
        return {
            filter: activeFilter,
            q: (menuSearch?.value || '').trim().toLowerCase(),
            sort: menuSort?.value || 'recommended'
        };
    };

    const renderMenu = () => {
        if (!menuGrid) return;
        const { filter, q, sort } = getMenuState();
        const t = translations[currentLang];

        let dishes = [...dishData];

        if (filter === 'favorites') dishes = dishes.filter(d => isFavorite(d.id));
        else if (filter !== 'all') dishes = dishes.filter(d => d.category === filter);

        if (q) dishes = dishes.filter(d => (d.title + ' ' + d.desc).toLowerCase().includes(q));

        if (sort === 'price-asc') dishes.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        if (sort === 'price-desc') dishes.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));

        menuGrid.innerHTML = '';
        dishes.forEach((dish, index) => {
            const card = document.createElement('article');
            card.className = 'dish-card';
            card.style.animationDelay = `${index * 90}ms`;

            const fav = isFavorite(dish.id);
            
            // Generate Dietary Icons
            const dietaryHtml = dish.dietary ? dish.dietary.map(d => 
                `<span class="dietary-icon" data-tooltip="${d === 'V' ? 'Vegetarian' : (d === 'GF' ? 'Gluten Free' : d)}">${d}</span>`
            ).join('') : '';

            card.innerHTML = `
                ${dish.featured ? `<span class="badge">${t.chefPick}</span>` : ''}
                <button class="favorite-btn${fav ? ' active' : ''}" type="button" aria-label="${fav ? 'Remove from favorites' : 'Save to favorites'}" aria-pressed="${fav}">
                    <i class="${fav ? 'fas' : 'far'} fa-heart" aria-hidden="true"></i>
                </button>
                <div class="img-container">
                    <img src="${dish.img}" alt="${dish.title}" loading="lazy" decoding="async">
                    <div class="overlay"><span class="view-text">${t.viewDetails}</span></div>
                </div>
                <div class="dish-info">
                    <div class="dish-header">
                        <h3>${dish.title}</h3>
                        <div style="display:flex; align-items:center;">${dietaryHtml}<span class="price" style="margin-left:8px;">${dish.price}</span></div>
                    </div>
                    <p class="short-desc">${dish.desc}</p>
                    <button class="add-cart-btn" type="button">${t.addToCart}</button>
                </div>
            `;

            card.querySelector('.favorite-btn')?.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFavorite(dish.id);
                renderMenu();
            });

            card.querySelector('.add-cart-btn')?.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(dish);
            });

            card.addEventListener('click', () => openDishModal(dish, card));
            menuGrid.appendChild(card);
        });

        if (menuEmpty) menuEmpty.hidden = dishes.length !== 0;
    };

    renderMenu();

    filterBtns.forEach(btn => {
        btn.setAttribute('aria-pressed', btn.classList.contains('active'));
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            activeFilter = btn.dataset.filter;
            renderMenu();
        });
    });

    menuSearch?.addEventListener('input', debounce(renderMenu, 120));
    menuSort?.addEventListener('change', renderMenu);

    // --- 7) Navbar & Mobile Logic ---
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    // Language Switcher UI
    const langContainer = document.createElement('div');
    langContainer.className = 'lang-switch';
    ['en', 'fr', 'ar'].forEach(lang => {
        const btn = document.createElement('button');
        btn.className = `lang-btn ${currentLang === lang ? 'active' : ''}`;
        btn.textContent = lang.toUpperCase();
        btn.onclick = () => setLanguage(lang);
        langContainer.appendChild(btn);
    });
    if (navLinks) navLinks.appendChild(langContainer);

    const setLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('gh-lang', lang);
        
        // Update HTML attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update UI
        document.querySelectorAll('.lang-btn').forEach(b => {
            b.classList.toggle('active', b.textContent.toLowerCase() === lang);
        });

        // Update Static Content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) el.textContent = translations[lang][key];
        });

        // Re-render dynamic content
        renderMenu();
        renderCart();
        // Note: Static HTML content would typically be updated here using data-i18n attributes
    };
    setLanguage(currentLang); // Init

    const setNavOpen = (open) => {
        if (!hamburger || !navLinks) return;
        navLinks.classList.toggle('active', open);
        hamburger.classList.toggle('active', open);
        hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    const onScrollNav = () => {
        if (!navbar) return;
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScrollNav, { passive: true });
    onScrollNav();

    hamburger?.addEventListener('click', () => {
        const open = !navLinks?.classList.contains('active');
        setNavOpen(open);
    });

    navLinks?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setNavOpen(false));
    });

    window.addEventListener('click', (e) => {
        if (!navLinks || !hamburger) return;
        const isOpen = navLinks.classList.contains('active');
        if (!isOpen) return;
        const target = e.target;
        if (target instanceof Node) {
            if (!navLinks.contains(target) && !hamburger.contains(target)) setNavOpen(false);
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setNavOpen(false);
    });

    // Scroll-spy for active nav link
    const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];
    const linkByHash = new Map(navAnchors.map(a => [a.getAttribute('href'), a]));
    const sections = navAnchors
        .map(a => document.querySelector(a.getAttribute('href')))
        .filter(Boolean);

    const spy = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const id = `#${entry.target.id}`;
            navAnchors.forEach(a => a.classList.remove('active'));
            linkByHash.get(id)?.classList.add('active');
        });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });

    sections.forEach(s => spy.observe(s));

    // --- 8) Reservation Logic (Dynamic Hours) ---
    const timeSlotsContainer = document.getElementById('timeSlots');
    const timeInput = document.getElementById('time');
    const dateInput = document.getElementById('date');
    const timeError = document.getElementById('timeError');

    const HOURS_BY_DAY = {
        0: { open: 17 * 60, close: 23 * 60 },
        1: { open: 17 * 60, close: 23 * 60 },
        2: { open: 17 * 60, close: 23 * 60 },
        3: { open: 17 * 60, close: 23 * 60 },
        4: { open: 17 * 60, close: 23 * 60 },
        5: { open: 17 * 60, close: 24 * 60 },
        6: { open: 17 * 60, close: 24 * 60 }
    };

    const getHoursForDate = (dateObj) => HOURS_BY_DAY[dateObj.getDay()] || HOURS_BY_DAY[0];

    const formatMinutesToLabel = (minutes) => {
        if (minutes === 24 * 60) return '12:00 AM';
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        const d = new Date(1970, 0, 1, h, m);
        return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    };

    const parseDateInputValue = (value) => {
        if (!value) return null;
        const [y, m, d] = value.split('-').map(Number);
        if (!y || !m || !d) return null;
        return new Date(y, m - 1, d);
    };

    const setTimeError = (msg) => {
        if (!timeError) return;
        timeError.textContent = msg || '';
    };

    const clearTimeSelection = () => {
        if (timeInput) timeInput.value = '';
        setTimeError('');
        document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('active'));
    };

    const generateTimeSlots = (dateObj = new Date()) => {
        if (!timeSlotsContainer || !timeInput) return;
        timeSlotsContainer.innerHTML = '';

        const { open, close } = getHoursForDate(dateObj);
        const lastSlot = Math.max(open, close - 90); // last booking slot = 90min before close

        const now = new Date();
        const isToday = dateObj.toDateString() === now.toDateString();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();

        for (let t = open; t <= lastSlot; t += 30) {
            if (isToday && t < currentMinutes + 60) continue;

            const hh = String(Math.floor(t / 60)).padStart(2, '0');
            const mm = String(t % 60).padStart(2, '0');
            const timeStr = `${hh}:${mm}`;

            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'time-slot';
            btn.textContent = formatMinutesToLabel(t);

            btn.addEventListener('click', () => {
                document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('active'));
                btn.classList.add('active');
                timeInput.value = timeStr;
                setTimeError('');
            });

            timeSlotsContainer.appendChild(btn);
        }
    };

    // Min date = today
    if (dateInput) {
        const today = new Date();
        const pad = (n) => String(n).padStart(2, '0');
        dateInput.min = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
    }

    const getSelectedDateOrToday = () => parseDateInputValue(dateInput?.value) || new Date();
    generateTimeSlots(getSelectedDateOrToday());

    dateInput?.addEventListener('change', () => {
        clearTimeSelection();
        generateTimeSlots(getSelectedDateOrToday());
    });

    // --- 9) Form Submit (EmailJS) ---
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        // Save reservations locally for Admin Dashboard
        const saveReservation = (data) => {
            const res = JSON.parse(localStorage.getItem('gh-reservations')) || [];
            res.unshift({ ...data, timestamp: new Date().toISOString() });
            localStorage.setItem('gh-reservations', JSON.stringify(res.slice(0, 50))); // Keep last 50
        };

        const isEmailJsLoaded = typeof emailjs !== 'undefined';
        if (isEmailJsLoaded) {
            emailjs.init('VNqzMBGY8visqvXfA');
        }

        reservationForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const submitBtn = this.querySelector('.submit-btn');

            if (!isEmailJsLoaded) {
                showToast('Reservation system offline. Please call us.', 'error');
                return;
            }

            if (!timeInput?.value) {
                setTimeError('Please select a time for your reservation.');
                showToast('Please select a reservation time.', 'error');
                return;
            }
            setTimeError('');

            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            const templateParams = {
                first_name: document.getElementById('firstName')?.value,
                last_name: document.getElementById('lastName')?.value,
                email: document.getElementById('email')?.value,
                phone: document.getElementById('phone')?.value,
                guests: document.getElementById('guests')?.value,
                date: document.getElementById('date')?.value,
                time: timeInput.value,
                notes: notesInput?.value || ''
            };

            saveReservation(templateParams);

            emailjs.send('service_aihpksc', 'template_s9bs0vg', templateParams)
                .then(() => {
                    showToast('Reservation confirmed! Check your email.', 'success');
                    closeModal(reservationModal);
                    this.reset();
                    clearTimeSelection();
                }, (err) => {
                    showToast('Error sending reservation. Please try again.', 'error');
                    console.error(err);
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Confirm Reservation';
                });
        });
    }

    // --- 10) Status, Scroll Reveal, Scroll Top ---
    const checkStatus = () => {
        const statusEl = document.getElementById('opening-status');
        if (!statusEl) return;

        const now = new Date();
        const { open, close } = getHoursForDate(now);
        const nowMins = now.getHours() * 60 + now.getMinutes();
        const isOpen = nowMins >= open && nowMins < close;

        statusEl.textContent = isOpen
            ? `Open Now • Closes at ${formatMinutesToLabel(close)}`
            : `Closed • Opens at ${formatMinutesToLabel(open)}`;

        statusEl.className = isOpen ? 'opening-status open' : 'opening-status';
    };
    checkStatus();
    setInterval(checkStatus, 60000);

    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el));

    // Scroll to Top
    const scrollBtn = document.getElementById('scrollTopBtn');
    const onScrollTopToggle = () => {
        if (!scrollBtn) return;
        if (window.scrollY > 300) scrollBtn.classList.add('active');
        else scrollBtn.classList.remove('active');
    };
    window.addEventListener('scroll', onScrollTopToggle, { passive: true });
    onScrollTopToggle();
    scrollBtn?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });

    // --- 11) Newsletter ---
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Subscribed! Welcome to Gourmet Haven.', 'success');
        newsletterForm.reset();
    });

    // --- 12) Reviews Slider ---
    const reviewsTrack = document.getElementById('reviewsTrack');
    const reviewsPrev = document.getElementById('reviewsPrev');
    const reviewsNext = document.getElementById('reviewsNext');
    const reviewsDots = document.getElementById('reviewsDots');

    if (reviewsTrack && reviewsDots) {
        const cards = [...reviewsTrack.querySelectorAll('.testimonial-card')];
        let index = 0;
        let timer = null;

        const setIndex = (next) => {
            if (!cards.length) return;
            index = (next + cards.length) % cards.length;
            reviewsTrack.style.transform = `translateX(-${index * 100}%)`;
            [...reviewsDots.querySelectorAll('button')].forEach((dot, i) => {
                dot.setAttribute('aria-current', i === index ? 'true' : 'false');
            });
        };

        reviewsDots.innerHTML = '';
        cards.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.setAttribute('aria-label', `Go to review ${i + 1}`);
            dot.setAttribute('aria-current', i === 0 ? 'true' : 'false');
            dot.addEventListener('click', () => setIndex(i));
            reviewsDots.appendChild(dot);
        });

        reviewsPrev?.addEventListener('click', () => setIndex(index - 1));
        reviewsNext?.addEventListener('click', () => setIndex(index + 1));

        const start = () => {
            if (prefersReducedMotion) return;
            timer = window.setInterval(() => setIndex(index + 1), 6500);
        };
        const stop = () => {
            if (timer) window.clearInterval(timer);
            timer = null;
        };

        reviewsTrack.addEventListener('mouseenter', stop);
        reviewsTrack.addEventListener('mouseleave', () => {
            stop();
            start();
        });

        // Touch Swipe Support
        let touchStartX = 0;
        reviewsTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stop();
        }, { passive: true });

        reviewsTrack.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].screenX;
            if (touchEndX < touchStartX - 50) setIndex(index + 1);
            if (touchEndX > touchStartX + 50) setIndex(index - 1);
            start();
        }, { passive: true });

        // Keyboard Navigation
        reviewsTrack.setAttribute('tabindex', '0');
        reviewsTrack.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                setIndex(index - 1);
                stop();
                start();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                setIndex(index + 1);
                stop();
                start();
            }
        });

        setIndex(0);
        start();
    }

    // --- 13) Dynamic Footer Year ---
    const copyrightYear = document.querySelector('.copyright p');
    if (copyrightYear) {
        copyrightYear.innerHTML = `&copy; ${new Date().getFullYear()} Gourmet Haven. All rights reserved.`;
    }

    // --- 14) Update Social Media Links ---
    const updateSocialLinks = () => {
        // Instagram
        const instagramLink = document.querySelector('.fa-instagram')?.closest('a');
        if (instagramLink) {
            instagramLink.href = 'https://www.instagram.com/h.adam.07';
            instagramLink.target = '_blank';
            instagramLink.rel = 'noopener';
        }

        // Facebook
        const facebookLink = document.querySelector('.fa-facebook, .fa-facebook-f')?.closest('a');
        if (facebookLink) {
            facebookLink.href = 'https://web.facebook.com/anas.adam.242015/';
            facebookLink.target = '_blank';
            facebookLink.rel = 'noopener';
        }

        // WhatsApp
        const whatsappLink = document.querySelector('.fa-whatsapp')?.closest('a');
        if (whatsappLink) {
            whatsappLink.href = 'https://wa.me/212645713066';
            whatsappLink.target = '_blank';
            whatsappLink.rel = 'noopener';
        }
    };
    updateSocialLinks();

    // --- 15) Admin Dashboard (Hidden) ---
    const adminTrigger = document.createElement('div');
    adminTrigger.className = 'admin-trigger';
    adminTrigger.title = "Admin Login";
    document.body.appendChild(adminTrigger);

    const adminModal = document.createElement('div');
    adminModal.id = 'adminModal';
    adminModal.className = 'modal';
    adminModal.innerHTML = `
        <div class="modal-content admin-panel" style="background: var(--surface);">
            <button class="close-modal" id="closeAdmin">&times;</button>
            <h2>Admin Dashboard</h2>
            <button id="printAdminBtn" class="admin-btn" style="background:#555; margin-bottom:15px;">Print Orders</button>
            
            <h3>Recent Reservations</h3>
            <table class="admin-table" id="adminResTable">
                <thead><tr><th>Name</th><th>Date</th><th>Time</th><th>Guests</th></tr></thead>
                <tbody></tbody>
            </table>

            <h3>Menu Management</h3>
            <table class="admin-table" id="adminMenuTable">
                <thead><tr><th>Dish</th><th>Price</th><th>Actions</th></tr></thead>
                <tbody></tbody>
            </table>
        </div>
    `;
    document.body.appendChild(adminModal);

    const renderAdmin = () => {
        const resBody = adminModal.querySelector('#adminResTable tbody');
        const menuBody = adminModal.querySelector('#adminMenuTable tbody');
        const reservations = JSON.parse(localStorage.getItem('gh-reservations')) || [];
        const t = translations[currentLang];
        adminModal.querySelector('#printAdminBtn').textContent = t.printOrders;

        resBody.innerHTML = reservations.map(r => `
            <tr><td>${r.first_name} ${r.last_name}</td><td>${r.date}</td><td>${r.time}</td><td>${r.guests}</td></tr>
        `).join('');

        menuBody.innerHTML = dishData.map((d, i) => `
            <tr>
                <td>${d.title}</td>
                <td>${d.price}</td>
                <td class="admin-actions">
                    <button class="admin-btn btn-edit" data-idx="${i}">Edit</button>
                    <button class="admin-btn btn-delete" data-idx="${i}">Delete</button>
                </td>
            </tr>
        `).join('');

        menuBody.querySelectorAll('.btn-edit').forEach(btn => {
            btn.onclick = () => {
                const idx = btn.dataset.idx;
                const newTitle = prompt("Edit Title:", dishData[idx].title);
                const newPrice = prompt("Edit Price:", dishData[idx].price);
                if (newTitle && newPrice) {
                    dishData[idx].title = newTitle;
                    dishData[idx].price = newPrice;
                    saveDishes();
                    renderAdmin();
                    renderMenu();
                }
            };
        });

        menuBody.querySelectorAll('.btn-delete').forEach(btn => {
            btn.onclick = () => {
                if(confirm('Delete this dish?')) {
                    dishData.splice(btn.dataset.idx, 1);
                    saveDishes();
                    renderAdmin();
                    renderMenu();
                }
            };
        });
    };

    adminTrigger.addEventListener('click', () => {
        const pin = prompt("Enter Admin PIN:");
        if (pin === "1234") {
            openModal(adminModal);
            renderAdmin();
        } else if (pin !== null) {
            alert("Access Denied");
        }
    });
    adminModal.querySelector('#closeAdmin').addEventListener('click', () => closeModal(adminModal));
    
    // Print Functionality
    adminModal.querySelector('#printAdminBtn').addEventListener('click', () => {
        const content = adminModal.querySelector('.admin-panel').innerHTML;
        const win = window.open('', '', 'height=600,width=800');
        win.document.write('<html><head><title>Print Orders</title>');
        win.document.write('<style>body{font-family:sans-serif;} table{width:100%;border-collapse:collapse;} th,td{border:1px solid #333;padding:8px;} .admin-actions, .close-modal, #printAdminBtn {display:none;}</style>');
        win.document.write('</head><body>');
        win.document.write(content);
        win.document.write('</body></html>');
        win.document.close();
        win.print();
    });

    // --- 17) Visual Effects (GSAP & Preloader) ---
    // Preloader Logic
    const preloader = document.getElementById('preloader');
    if (preloader) {
        const removePreloader = () => {
            preloader.classList.add('fade-out');
            preloader.setAttribute('aria-hidden', 'true');
            setTimeout(() => preloader.remove(), 600);
        };
        if (document.readyState === 'complete') removePreloader();
        else window.addEventListener('load', removePreloader);
    }

    // Parallax Effects (Desktop Only for Performance)
    if (!prefersReducedMotion) {
        ScrollTrigger.matchMedia({
            // Desktop: Enable Parallax
            "(min-width: 800px)": function() {
                gsap.to('.hero', {
                    backgroundPosition: `50% 150px`, 
                    ease: 'none',
                    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
                });

                const storyImg = document.querySelector('.story-image');
                if (storyImg) {
                    gsap.to(storyImg, { yPercent: 20, ease: 'none', scrollTrigger: { trigger: '.story', start: 'top bottom', end: 'bottom top', scrub: true } });
                }
            }
        });
    }

    // --- 16) SEO: JSON-LD Schema ---
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Gourmet Haven",
        "image": dishData[0]?.img || "",
        "priceRange": "$$$",
        "servesCuisine": "International",
        "menu": dishData.map(d => ({
            "@type": "MenuItem",
            "name": d.title,
            "description": d.desc,
            "offers": { "@type": "Offer", "price": parsePrice(d.price), "priceCurrency": "USD" }
        }))
    });
    document.head.appendChild(schemaScript);

    // --- 18) Scroll Progress Bar ---
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const progressBar = document.querySelector('.scroll-progress');
        if (progressBar) progressBar.style.width = scrolled + "%";
    });

    // --- 19) Mobile Nav Optimizer (FIX: Dark Mode & Buttons on Phone) ---
    function optimizeMobileLayout() {
        const navActions = document.querySelector('.nav-actions');
        const navLinks = document.getElementById('navLinks');
        const navbar = document.querySelector('.navbar');
        const hamburger = document.getElementById('hamburger');

        if (!navActions || !navLinks || !navbar) return;

        if (window.innerWidth <= 768) {
            // ILA TELEPHONE: Hzz actions khchihum DAKHL nav-links
            if (!navLinks.contains(navActions)) {
                navActions.style.marginTop = "20px"; 
                navActions.style.justifyContent = "center";
                navLinks.appendChild(navActions);
            }
        } else {
            // ILA PC: Rdhum l blasthum (9bl hamburger)
            if (navLinks.contains(navActions)) {
                navActions.style.marginTop = "0";
                navActions.style.justifyContent = "flex-end";
                navbar.insertBefore(navActions, hamburger);
            }
        }
    }
    window.addEventListener('load', optimizeMobileLayout);
    window.addEventListener('resize', optimizeMobileLayout);
});
