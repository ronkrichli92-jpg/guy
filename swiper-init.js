/* ============================================
   SWIPER INITIALIZATION - AGENT GUY
   ============================================ */

console.log('🎰 Swiper script loaded - Agent Guy!');

// Initialize immediately when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('📦 DOM Ready, initializing Swipers immediately...');
    
    // Initialize right away - no waiting!
    function initializeSwipers() {
        console.log('🚀 Starting Swiper initialization...');
        
        // Initialize Partners Slider
        console.log('🏢 Initializing Partners Slider...');
        try {
            const partnersSwiper = new Swiper('.partnersSwiper', {
                slidesPerView: 'auto',
                spaceBetween: 35,
                loop: true,
                speed: 400,
                centeredSlides: false,
                autoplay: {
                    delay: 700,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 0.8,
                },
                grabCursor: true,
                breakpoints: {
                    320: {
                        spaceBetween: 15,
                        speed: 300,
                        autoplay: {
                            delay: 500,
                        }
                    },
                    480: {
                        spaceBetween: 20,
                        speed: 350,
                        autoplay: {
                            delay: 600,
                        }
                    },
                    768: {
                        spaceBetween: 28,
                        speed: 400,
                    },
                    1024: {
                        spaceBetween: 35,
                        speed: 400,
                    }
                }
            });
            console.log('✅ Partners Slider created!', partnersSwiper);
        } catch (error) {
            console.error('❌ Error creating Partners Slider:', error);
        }
        
        // Initialize Wins Slider with Coverflow Effect
        console.log('🏆 Initializing Wins Slider with Coverflow...');
        try {
            const isMobile = window.innerWidth <= 768;
            
            const winsSwiper = new Swiper('.winsSwiper', {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                loop: true,
                speed: isMobile ? 500 : 800,
                loopedSlides: 5,
                
                coverflowEffect: {
                    rotate: isMobile ? 20 : 50,
                    stretch: 0,
                    depth: isMobile ? 100 : 100,
                    modifier: 1,
                    slideShadows: true,
                },
                
                autoplay: {
                    delay: isMobile ? 3000 : 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    waitForTransition: true,
                },
                
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                
                keyboard: {
                    enabled: true,
                },
                
                // Better touch support
                touchEventsTarget: 'container',
                simulateTouch: true,
                touchRatio: 1,
                touchAngle: 45,
                shortSwipes: true,
                longSwipes: true,
                longSwipesMs: 300,
                
                // Disable mousewheel on mobile
                mousewheel: isMobile ? false : {
                    forceToAxis: true,
                },
                
                // Enable resistance for better feel
                resistance: true,
                resistanceRatio: 0.85,
            });
            console.log('✅ Wins Slider with Coverflow created!', winsSwiper);
        } catch (error) {
            console.error('❌ Error creating Wins Slider:', error);
        }
        
        // Initialize Sports Slider
        console.log('⚽ Initializing Sports Slider...');
        try {
            const sportsSwiper = new Swiper('.sportsSwiper', {
                slidesPerView: 'auto',
                spaceBetween: 30,
                loop: true,
                speed: 400,
                centeredSlides: false,
                autoplay: {
                    delay: 800,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 0.8,
                },
                grabCursor: true,
                breakpoints: {
                    320: {
                        spaceBetween: 15,
                        speed: 300,
                        autoplay: {
                            delay: 600,
                        }
                    },
                    480: {
                        spaceBetween: 20,
                        speed: 350,
                        autoplay: {
                            delay: 700,
                        }
                    },
                    768: {
                        spaceBetween: 25,
                        speed: 400,
                    },
                    1024: {
                        spaceBetween: 30,
                        speed: 400,
                    }
                }
            });
            console.log('✅ Sports Slider created!', sportsSwiper);
        } catch (error) {
            console.error('❌ Error creating Sports Slider:', error);
        }
        
        console.log('🎉 All Swipers initialized successfully!');
    }
    
    // Initialize immediately
    initializeSwipers();
});
