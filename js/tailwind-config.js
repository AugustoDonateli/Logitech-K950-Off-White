tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Outfit', 'sans-serif'],
                        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
                    },
                    colors: {
                        zinc: {
                            950: '#09090b',
                        }
                    },
                    boxShadow: {
                        'diffusion': '0 20px 40px -15px rgba(0,0,0,0.05)',
                        'liquid-inset': 'inset 0 1px 0 rgba(255,255,255,0.8), 0 20px 40px -15px rgba(0,0,0,0.05)',
                    },
                    transitionTimingFunction: {
                        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'carousel': 'carousel 10s linear infinite',
                        'wave': 'wave 2s infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-15px)' },
                        },
                        carousel: {
                            '0%': { transform: 'translateX(0%)' },
                            '100%': { transform: 'translateX(-50%)' },
                        },
                        wave: {
                            '0%, 100%': { transform: 'scaleY(0.5)' },
                            '50%': { transform: 'scaleY(1)' },
                        }
                    }
                }
            }
        }
