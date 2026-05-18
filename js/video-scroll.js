document.addEventListener('DOMContentLoaded', () => {
            const video = document.getElementById('hero-video');
            const scrollContainer = document.getElementById('hero-scroll-container');

            const initVideo = () => {
                let rafId = null;

                const updateVideoTime = () => {
                    const rect = scrollContainer.getBoundingClientRect();

                    // scrollProgress = 0 when container starts passing top of viewport
                    // scrollProgress = 1 when container finishes passing top of viewport
                    const maxScroll = rect.height - window.innerHeight;
                    let scrollProgress = -rect.top / maxScroll;

                    if (scrollProgress < 0) scrollProgress = 0;
                    if (scrollProgress > 1) scrollProgress = 1;

                    // Update video current time smoothly
                    if (isFinite(video.duration) && video.duration > 0) {
                        // Use requestVideoFrameCallback if available for smoother scrubbing
                        video.currentTime = video.duration * scrollProgress;
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
