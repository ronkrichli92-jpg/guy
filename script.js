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
        
        // 1. PARTICLES.JS - Red particles background
        console.log('1️⃣ Initializing Particles.js...');
        const isMobile = window.innerWidth <= 768;
        
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: isMobile ? 30 : 60,
                    density: {
                        enable: true,
                        value_area: 800
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

        // 3. AOS - Scroll Animations
        console.log('3️⃣ Initializing AOS...');
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: false,
            mirror: true,
            offset: 100
        });

        // 4. VANILLA TILT - 3D Cards (if elements exist)
        console.log('4️⃣ Checking for tilt elements...');
        const tiltElements = document.querySelectorAll('.casino-card-big, .bonus-compact-card, .trust-icon-box');
        if (tiltElements.length > 0) {
            VanillaTilt.init(tiltElements, {
                max: 10,
                speed: 400,
                scale: 1.02
            });
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
    // INSTANT VIDEO LOADING - Hero & Casino
    // ============================================
    console.log('📹 Loading hero and casino videos...');
    
    const heroVideo = document.querySelector('.hero-video');
    const casinoVideo = document.querySelector('.casino-video');
    
    if (heroVideo) {
        heroVideo.addEventListener('loadeddata', () => {
            console.log('✅ Hero video loaded!');
            heroVideo.classList.add('loaded');
        });
    }
    
    if (casinoVideo) {
        casinoVideo.addEventListener('loadeddata', () => {
            console.log('✅ Casino video loaded!');
            casinoVideo.classList.add('loaded');
        });
    }
    
    // ============================================
    // CARD VIDEOS LOADING - Slots, Live Casino, Table Games
    // ============================================
    console.log('🎰 Loading casino card videos...');
    
    const cardVideos = document.querySelectorAll('.card-video');
    
    cardVideos.forEach((video, index) => {
        video.addEventListener('loadeddata', () => {
            console.log(`✅ Card video ${index + 1} loaded!`);
            video.classList.add('loaded');
        });
        
        // Ensure video plays
        video.play().catch(err => {
            console.log(`🔇 Card video ${index + 1} autoplay blocked, that's okay`);
        });
    });
    
    // ============================================
    // VIDEO LAZY LOADING - Smart Loading for Sports Video
    // ============================================
    console.log('📹 Setting up video lazy loading for sports...');
    
    const sportsVideo = document.querySelector('.sports-video');
    
    if (sportsVideo) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('⚽ Sports section visible - Loading video...');
                    
                    // Load the video
                    const videoSrc = sportsVideo.getAttribute('data-src');
                    if (videoSrc) {
                        sportsVideo.src = videoSrc;
                        sportsVideo.load();
                        
                        sportsVideo.addEventListener('loadeddata', () => {
                            console.log('✅ Sports video loaded!');
                            sportsVideo.play();
                            sportsVideo.classList.add('loaded');
                        });
                        
                        sportsVideo.addEventListener('error', () => {
                            console.error('❌ Error loading sports video');
                        });
                        
                        // Stop observing after loading
                        videoObserver.unobserve(sportsVideo);
                    }
                }
            });
        }, {
            rootMargin: '200px' // Start loading 200px before section is visible
        });
        
        videoObserver.observe(sportsVideo);
    }
    
    // ============================================
    // VIDEO CONTINUOUS PLAY - NONSTOP! 🔥
    // ============================================
    console.log('🎬 Ensuring all videos play NONSTOP...');
    
    // Keep ALL videos playing continuously - NO PAUSING!
    const allVideos = document.querySelectorAll('.hero-video, .casino-video, .sports-video, .card-video');
    
    allVideos.forEach((video, index) => {
        // Force play
        video.play().catch(err => {
            console.log(`🔇 Video ${index + 1} autoplay blocked initially, will retry`);
        });
        
        // If video pauses for any reason, restart it immediately
        video.addEventListener('pause', () => {
            console.log(`🔄 Video ${index + 1} paused, restarting...`);
            video.play().catch(err => console.log('Restart prevented:', err));
        });
        
        // When video ends, replay immediately (backup for loop attribute)
        video.addEventListener('ended', () => {
            console.log(`🔄 Video ${index + 1} ended, replaying...`);
            video.currentTime = 0;
            video.play().catch(err => console.log('Replay prevented:', err));
        });
        
        // Ensure video is always ready to play
        video.addEventListener('loadeddata', () => {
            console.log(`✅ Video ${index + 1} loaded and ready!`);
            video.play().catch(err => console.log('Play prevented:', err));
        });
    });
    
    console.log('✅ All videos set to NONSTOP mode! 🚀');
    console.log('✅ Agent Guy - Dark Minimal Design Loaded! 🚀');
});
