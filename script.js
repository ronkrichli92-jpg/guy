/* ============================================
   CROWNBET - AGENT GUY - JAVASCRIPT
   Dark Minimal & Bold Design
   ============================================ */

// Add loading class IMMEDIATELY
document.body.classList.add('loading');
console.log('🔴 Agent Guy - Script loaded!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM Content Loaded!');
    
    // ============================================
    // PRELOADER
    // ============================================
    const preloader = document.getElementById('preloader');
    const body = document.body;
    
    if (!preloader) {
        console.error('❌ Preloader element not found!');
        return;
    }
    
    console.log('✅ Preloader found!');
    console.log('Preloader display:', window.getComputedStyle(preloader).display);
    console.log('Preloader opacity:', window.getComputedStyle(preloader).opacity);
    console.log('Body classList:', body.classList);
    
    // Make sure preloader is visible
    preloader.style.display = 'flex';
    preloader.style.opacity = '1';
    body.classList.add('loading');
    
    // Maximum timeout - hide preloader after 5 seconds no matter what
    const maxTimeout = setTimeout(() => {
        console.log('⚠️ Max timeout reached - Force hiding preloader!');
        hidePreloader();
    }, 5000);
    
    function hidePreloader() {
        // Clear max timeout
        clearTimeout(maxTimeout);
        
        // Hide preloader smoothly
        preloader.classList.add('hidden');
        
        // Remove loading class after transition completes
        setTimeout(() => {
            body.classList.remove('loading');
            body.style.overflow = 'auto';
            console.log('✅ Preloader fully hidden, page ready!');
        }, 500);
        
        // Initialize all effects after preloader starts hiding
        setTimeout(initAllEffects, 200);
    }
    
    window.addEventListener('load', function() {
        console.log('🎬 Window loaded! Starting preloader timer...');
        
        // Force minimum display time
        const startTime = Date.now();
        const minDisplayTime = 1000; // 1 second - Super fast!
        
        setTimeout(() => {
            const elapsed = Date.now() - startTime;
            console.log(`⏰ Time elapsed: ${elapsed}ms - Hiding preloader...`);
            hidePreloader();
        }, minDisplayTime);
    });
    
    // ============================================
    // SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
        }
        
        lastScroll = currentScroll;
    });

    // ============================================
    // INITIALIZE ALL EFFECTS
    // ============================================
    function initAllEffects() {
        console.log('🚀 Initializing Agent Guy effects...');
        
        // 1. PARTICLES.JS - Red particles background (Optimized for mobile)
        console.log('1️⃣ Initializing Particles.js...');
        const isMobile = window.innerWidth <= 768;
        
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: isMobile ? 15 : 50,  // Reduced for better performance
                    density: {
                        enable: true,
                        value_area: 1000
                    }
                },
                color: {
                    value: ['#ff0000', '#cc0000', '#ff3333']
                },
                shape: {
                    type: ['circle', 'triangle'],
                    stroke: {
                        width: 0
                    }
                },
                opacity: {
                    value: 0.4,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ff0000',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
        
        // 2. TYPED.JS - Typing Effect
        console.log('2️⃣ Initializing Typed.js...');
        new Typed('#typed-text', {
            strings: ['הקזינו הלייב 🎰', 'הפוקר המקצועי ♠️', 'הספורט בלייב ⚽', 'הזכיות הגדולות 💎'],
            typeSpeed: 70,
            backSpeed: 50,
            backDelay: 2500,
            loop: true,
            cursorChar: '|',
            smartBackspace: true,
            shuffle: false
        });

        // 3. AOS - Scroll Animations (Optimized for mobile)
        console.log('3️⃣ Initializing AOS...');
        AOS.init({
            duration: isMobile ? 600 : 800,  // Faster on mobile
            easing: 'ease-out',
            once: true,  // Animation happens once (better performance)
            mirror: false,  // Don't animate on scroll up (better performance)
            offset: isMobile ? 50 : 100,
            disable: function() {
                // Disable on very small screens or slow devices
                return window.innerWidth < 480;
            }
        });

        // 4. VANILLA TILT - 3D Cards (Disabled on mobile for performance)
        console.log('4️⃣ Checking for tilt elements...');
        if (!isMobile) {  // Only on desktop
        const tiltElements = document.querySelectorAll('.casino-card-big, .bonus-compact-card, .trust-icon-box');
        if (tiltElements.length > 0) {
            VanillaTilt.init(tiltElements, {
                    max: 8,
                speed: 400,
                    scale: 1.01
            });
                console.log('✅ Tilt enabled (desktop only)');
            }
        } else {
            console.log('📱 Tilt disabled for mobile performance');
        }

        // 5. GSAP - Advanced Animations
        console.log('5️⃣ Initializing GSAP...');
        gsap.registerPlugin(ScrollTrigger);

        // Hero entrance
        gsap.from('.mega-badge', {
            duration: 0.8,
            y: -50,
            opacity: 0,
            ease: 'power2.out',
            delay: 0.2
        });

        gsap.from('.mega-title .mega-line', {
            duration: 1,
            x: 100,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.4
        });

        gsap.from('.hero-info-box', {
            duration: 1,
            x: 100,
            opacity: 0,
            ease: 'power2.out',
            delay: 0.8
        });

        gsap.from('.mega-cta', {
            duration: 0.8,
            scale: 0,
            opacity: 0,
            ease: 'back.out(1.7)',
            delay: 1.2
        });

        gsap.from('.hero-stats .stat-item', {
            duration: 0.6,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 1.4
        });

        // Section titles animation
        gsap.utils.toArray('.bold-title').forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                duration: 0.8,
                x: 100,
                opacity: 0,
                ease: 'power2.out'
            });
        });

        // Card symbols animation
        gsap.from('.card-symbol', {
            scrollTrigger: {
                trigger: '.poker-cards-display',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.6,
            scale: 0,
            rotation: 180,
            opacity: 0,
            stagger: 0.1,
            ease: 'back.out(1.7)'
        });
        
        console.log('✅ All effects initialized!');
    }

    // Card hover effects
    const cards = document.querySelectorAll('.casino-card-big, .win-card, .bonus-compact-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // ============================================
    // ALL VIDEOS - Load and Play Immediately
    // ============================================
    console.log('📹 Loading all videos immediately...');
    
    const allVideos = document.querySelectorAll('.hero-video, .casino-video, .card-video');
    
    allVideos.forEach((video, index) => {
        // Mark as loaded immediately for styling
        video.classList.add('loaded');
        
        // Try to play
        video.play().catch(err => {
            console.log(`🔇 Video ${index + 1} autoplay blocked, will play on interaction`);
        });
        
        video.addEventListener('loadeddata', () => {
            console.log(`✅ Video ${index + 1} loaded!`);
            video.play().catch(err => console.log('Play prevented'));
        });
    });
    
    console.log(`✅ ${allVideos.length} videos loading...`);
                    
    // Lazy Loading removed - all videos load immediately for instant display
    
    // ============================================
    // VIDEO AUTO-PLAY - Ensure continuous playback
    // ============================================
    console.log('🔄 Ensuring video autoplay...');
    
    // Retry autoplay on user interaction
    document.addEventListener('click', function() {
        allVideos.forEach(video => {
            if (video.paused) {
                video.play().catch(() => {});
            }
        });
    }, { once: true });
    
    console.log('✅ Video autoplay enabled! 🚀');
    console.log('✅ Agent Guy - Dark Minimal Design Loaded! 🚀');
});
