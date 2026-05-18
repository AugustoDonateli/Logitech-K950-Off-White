document.addEventListener('DOMContentLoaded', () => {
            const video = document.getElementById('hero-video');
            const scrollContainer = document.getElementById('hero-scroll-container');
            
            // Check if on mobile to reduce update frequency
            const isMobile = window.innerWidth < 768;

            const initVideo = () => {
                let rafId = null;
                let lastScrollProgress = -1;

                const updateVideoTime = () => {
                    const rect = scrollContainer.getBoundingClientRect();

                    // Only calculate if visible in viewport
                    if (rect.bottom > 0 && rect.top < window.innerHeight) {
                        const maxScroll = rect.height - window.innerHeight;
                        let scrollProgress = -rect.top / maxScroll;

                        if (scrollProgress < 0) scrollProgress = 0;
                        if (scrollProgress > 1) scrollProgress = 1;

                        // Only update if it actually changed significantly (throttling for mobile)
                        const threshold = isMobile ? 0.01 : 0.001; 
                        if (Math.abs(scrollProgress - lastScrollProgress) > threshold) {
                            if (isFinite(video.duration) && video.duration > 0) {
                                video.currentTime = video.duration * scrollProgress;
                            }
                            lastScrollProgress = scrollProgress;
                        }
                    }

                    rafId = requestAnimationFrame(updateVideoTime);
                };

                // Start the loop
                rafId = requestAnimationFrame(updateVideoTime);
            };

            // Check if metadata is already loaded
            if (video.readyState >= 1) {
                initVideo();
            } else {
                video.addEventListener('loadedmetadata', initVideo);
            }

            // Preload video to ensure smooth seeking
            video.load();
        });
