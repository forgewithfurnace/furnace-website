// FURNACE Website JavaScript

// Medium Blog Integration
async function loadMediumPosts() {
    const blogContainer = document.getElementById('blog-posts');
    
    try {
        // Try multiple RSS-to-JSON services for reliability
        const MEDIUM_USER = '@forgewithfurnace';
        const feedUrl = encodeURIComponent(`https://medium.com/feed/${MEDIUM_USER}`);
        const apis = [
            `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${MEDIUM_USER}`,
            `https://api.allorigins.win/raw?url=${feedUrl}`
        ];

        let posts = null;

        // Try rss2json first
        try {
            const response = await fetch(apis[0]);
            const data = await response.json();
            if (data.status === 'ok' && data.items && data.items.length > 0) {
                posts = data.items.slice(0, 5);
            }
        } catch (e) {
            console.warn('rss2json failed, trying fallback...', e);
        }

        // Fallback: parse RSS XML via allorigins proxy
        if (!posts) {
            const response = await fetch(apis[1]);
            const text = await response.text();
            const parser = new DOMParser();
            const xml = parser.parseFromString(text, 'text/xml');
            const items = xml.querySelectorAll('item');
            if (items.length > 0) {
                posts = Array.from(items).slice(0, 5).map(item => ({
                    title: item.querySelector('title')?.textContent || '',
                    link: item.querySelector('link')?.textContent || '',
                    pubDate: item.querySelector('pubDate')?.textContent || '',
                    author: item.querySelector('dc\\:creator, creator')?.textContent || MEDIUM_USER,
                    description: item.querySelector('description')?.textContent || ''
                }));
            }
        }

        if (!posts || posts.length === 0) {
            throw new Error('No posts found');
        }
        
        if (posts.length === 0) {
            blogContainer.innerHTML = '<p class="blog-loading">No posts yet. Check back soon!</p>';
            return;
        }
        
        // Generate HTML for posts
        const postsHTML = posts.map(post => {
            // Clean up description (remove HTML tags and limit length)
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = post.description;
            const cleanDescription = tempDiv.textContent || tempDiv.innerText || '';
            const excerpt = cleanDescription.substring(0, 200) + '...';
            
            // Format date
            const date = new Date(post.pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            return `
                <div class="blog-post">
                    <h3><a href="${post.link}" target="_blank">${post.title}</a></h3>
                    <p class="blog-meta">${date} · ${post.author}</p>
                    <p class="blog-excerpt">${excerpt}</p>
                    <a href="${post.link}" target="_blank" class="read-more">
                        Read on Medium →
                    </a>
                </div>
            `;
        }).join('');
        
        blogContainer.innerHTML = postsHTML;
        
    } catch (error) {
        console.error('Error loading Medium posts:', error);
        blogContainer.innerHTML = `
            <p class="blog-loading">
                Unable to load posts. 
                <a href="https://medium.com/@forgewithfurnace" target="_blank" style="color: var(--ice-cyan);">
                    Visit our Medium page directly →
                </a>
            </p>
        `;
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.problem, .solution, .features, .blog, .download').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Animate knowledge bars on scroll
const knowledgeBars = document.querySelectorAll('.knowledge-bar');
const barsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Trigger animation
            entry.target.style.animation = 'slideIn 1s ease forwards';
        }
    });
}, observerOptions);

knowledgeBars.forEach(bar => observer.observe(bar));

// Add animation keyframe dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            width: 0;
            opacity: 0;
        }
        to {
            width: var(--width);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Load Medium posts when page loads
window.addEventListener('DOMContentLoaded', loadMediumPosts);

// Add particle effect to hero (optional)
function createParticles() {
    const particlesContainer = document.querySelector('.hero-particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = Math.random() > 0.5 ? 'var(--fire-orange)' : 'var(--ice-cyan)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5;
        particle.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 2 + 's';
        particlesContainer.appendChild(particle);
    }
}

createParticles();
