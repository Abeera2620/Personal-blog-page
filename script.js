  // Enhanced blog posts data with travel, fashion, and skincare content
        const blogPosts = [
            {
                id: 1,
                title: "Santorini Summer Style: White & Blue Fashion Guide",
                excerpt: "Discover the perfect outfits for exploring Santorini's stunning landscapes while staying comfortable and Instagram-ready in the Mediterranean heat.",
                category: "fashion",
                date: "2023-10-18",
                image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
                readTime: "7 min read"
            },
            {
                id: 2,
                title: "Japanese Skincare Secrets: The 10-Step Routine Simplified",
                excerpt: "Learn how to adapt the famous Japanese skincare philosophy for your travel routine and achieve glass skin no matter where you are.",
                category: "skincare",
                date: "2023-10-12",
                image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                readTime: "10 min read"
            },
            {
                id: 3,
                title: "Bali Hidden Gems: Beyond the Tourist Trail",
                excerpt: "Explore secret waterfalls, untouched beaches, and local warungs that most tourists never discover in this tropical paradise.",
                category: "travel",
                date: "2023-10-05",
                image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                readTime: "12 min read"
            },
            {
                id: 4,
                title: "Parisian Chic: Mastering Effortless French Style",
                excerpt: "Learn the secrets of Parisian women's timeless fashion sense and how to incorporate these elements into your own wardrobe.",
                category: "fashion",
                date: "2023-09-28",
                image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
                readTime: "8 min read"
            },
            {
                id: 5,
                title: "Travel-Size Skincare: Maintaining Your Routine On The Go",
                excerpt: "The ultimate guide to packing effective skincare products that won't take up precious luggage space during your adventures.",
                category: "skincare",
                date: "2023-09-21",
                image: "https://images.unsplash.com/photo-1556228577-8ed329c5b3c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                readTime: "6 min read"
            },
            {
                id: 6,
                title: "Moroccan Souks: A Fashion Lover's Paradise",
                excerpt: "Navigate the vibrant markets of Marrakech and discover unique textiles, handmade leather, and traditional craftsmanship.",
                category: "travel",
                date: "2023-09-14",
                image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80",
                readTime: "9 min read"
            },
            {
                id: 7,
                title: "Swimwear Trends: From Mediterranean to Tropical Destinations",
                excerpt: "This season's must-have swimwear styles that flatter every body type and work perfectly for both beach lounging and ocean adventures.",
                category: "fashion",
                date: "2023-09-07",
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
                readTime: "5 min read"
            },
            {
                id: 8,
                title: "Sun Protection Around the World: A Traveler's Guide",
                excerpt: "How to choose and apply sunscreen effectively in different climates and protect your skin from harsh environmental conditions.",
                category: "skincare",
                date: "2023-08-30",
                image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                readTime: "8 min read"
            },
            {
                id: 9,
                title: "Italian Riviera: Cinque Terre Fashion & Photography Guide",
                excerpt: "What to wear while exploring the colorful cliffside villages and how to capture stunning photos of this picturesque destination.",
                category: "travel",
                date: "2023-08-23",
                image: "https://images.unsplash.com/photo-1520250497596-6b4bcdb88bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                readTime: "11 min read"
            }
        ];

        // App State
        let currentState = {
            currentCategory: 'all',
            searchQuery: '',
            filteredPosts: [...blogPosts]
        };

        // DOM Elements
        const postsGrid = document.getElementById('postsGrid');
        const searchInput = document.getElementById('searchInput');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const newsletterForm = document.getElementById('newsletterForm');
        const themeToggle = document.getElementById('themeToggle');
        const scrollToTopBtn = document.getElementById('scrollToTop');

        // Initialize the blog
        function initBlog() {
            renderPosts();
            setupEventListeners();
            setupScrollAnimations();
            startCounterAnimations();
        }

        // Render posts based on current state
        function renderPosts() {
            const postsToShow = currentState.filteredPosts;

            postsGrid.innerHTML = '';

            if (postsToShow.length === 0) {
                postsGrid.innerHTML = `
                    <div class="no-posts" style="grid-column: 1 / -1; text-align: center; padding: 5rem; color: var(--text-light);">
                        <i class="fas fa-search" style="font-size: 5rem; margin-bottom: 2rem; opacity: 0.5;"></i>
                        <h3 style="font-size: 2rem; margin-bottom: 1.5rem;">No posts found</h3>
                        <p style="font-size: 1.25rem;">Try adjusting your search or filter criteria</p>
                    </div>
                `;
                return;
            }

            postsToShow.forEach((post, index) => {
                const postCard = createPostCard(post, index);
                postsGrid.appendChild(postCard);
            });

            setupScrollAnimations();
        }

        // Create post card element with enhanced design
        function createPostCard(post, index) {
            const card = document.createElement('article');
            card.className = 'post-card';
            card.dataset.category = post.category;
            card.style.animationDelay = `${index * 0.1}s`;

            const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            card.innerHTML = `
                <div class="post-image">
                    <img src="${post.image}" alt="${post.title}" loading="lazy">
                    <div class="post-category">${post.category}</div>
                </div>
                <div class="post-content">
                    <div class="post-meta">
                        <span class="post-date">${formattedDate} • ${post.readTime}</span>
                    </div>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <a href="#" class="read-more">
                        Read Full Story
                        <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            `;

            return card;
        }

        // Filter posts based on category and search
        function filterPosts() {
            let filtered = blogPosts;

            // Apply category filter
            if (currentState.currentCategory !== 'all') {
                filtered = filtered.filter(post => post.category === currentState.currentCategory);
            }

            // Apply search filter
            if (currentState.searchQuery) {
                const query = currentState.searchQuery.toLowerCase();
                filtered = filtered.filter(post => 
                    post.title.toLowerCase().includes(query) ||
                    post.excerpt.toLowerCase().includes(query) ||
                    post.category.toLowerCase().includes(query)
                );
            }

            currentState.filteredPosts = filtered;
            renderPosts();
        }

        // Counter animation for stats
        function startCounterAnimations() {
            const counters = document.querySelectorAll('.stat-number');
            
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current).toLocaleString();
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                };
                
                // Start animation when element is in viewport
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            updateCounter();
                            observer.unobserve(entry.target);
                        }
                    });
                });
                
                observer.observe(counter);
            });
        }

        // Setup event listeners
        function setupEventListeners() {
            // Search input with debounce
            let searchTimeout;
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    currentState.searchQuery = e.target.value;
                    filterPosts();
                }, 300);
            });

            // Enter key for search
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    currentState.searchQuery = e.target.value;
                    filterPosts();
                }
            });

            // Category filters
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    currentState.currentCategory = btn.dataset.category;
                    filterPosts();
                });
            });

            // Newsletter form
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = newsletterForm.querySelector('input[type="email"]').value;
                
                // Show success message
                const button = newsletterForm.querySelector('button');
                const originalText = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
                button.style.background = '#10b981';
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.style.background = '';
                }, 3000);
                
                newsletterForm.reset();
            });

            // Theme toggle
            themeToggle.addEventListener('click', toggleTheme);

            // Footer category links
            document.querySelectorAll('.footer-links a[data-category]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const category = link.dataset.category;
                    const correspondingBtn = document.querySelector(`.filter-btn[data-category="${category}"]`);
                    if (correspondingBtn) {
                        correspondingBtn.click();
                        document.querySelector('.blog-posts').scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });

            // Scroll to top button
            window.addEventListener('scroll', toggleScrollToTop);
            scrollToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // Hero buttons
            document.querySelector('.cta-button.primary').addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.blog-posts').scrollIntoView({ behavior: 'smooth' });
            });

            document.querySelector('.cta-button.secondary').addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.newsletter').scrollIntoView({ behavior: 'smooth' });
            });

            // Mobile menu
            document.querySelector('.mobile-menu').addEventListener('click', toggleMobileMenu);
        }

        // Toggle mobile menu
        function toggleMobileMenu() {
            const navLinks = document.querySelector('.nav-links');
            const isVisible = navLinks.style.display === 'flex';
            
            if (isVisible) {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.backgroundColor = 'var(--background)';
                navLinks.style.padding = '2rem';
                navLinks.style.boxShadow = '0 10px 30px var(--shadow)';
                navLinks.style.gap = '1.5rem';
                navLinks.style.borderTop = '1px solid var(--border)';
            }
        }

        // Toggle scroll to top button
        function toggleScrollToTop() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }

        // Theme toggle functionality
        function toggleTheme() {
            const themeIcon = themeToggle.querySelector('i');
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                localStorage.setItem('theme', 'light');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }

        // Scroll animation setup
        function setupScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('animate-in');
                        }, entry.target.dataset.delay || 0);
                    }
                });
            }, observerOptions);

            // Observe elements for animation
            const animatedElements = document.querySelectorAll('.hero-title, .hero-subtitle, .section-title, .section-subtitle, .post-card, .stat, .featured-content > *');
            animatedElements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(40px)';
                el.dataset.delay = index * 100;
                observer.observe(el);
            });
        }

        // Apply saved theme on load
        function applySavedTheme() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            const themeIcon = themeToggle.querySelector('i');
            
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-mode');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            applySavedTheme();
            initBlog();
        });

        // Add parallax effect to floating elements
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const elements = document.querySelectorAll('.floating-element');
            
            elements.forEach((element, index) => {
                const speed = 0.3 + (index * 0.1);
                element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg) scale(${1 - (scrolled * 0.0001)})`;
            });
        });
    