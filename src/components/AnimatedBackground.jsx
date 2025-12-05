import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];
        let nebulaClouds = [];
        let constellations = [];
        let cosmicDust = [];
        let mouseX = 0;
        let mouseY = 0;
        let time = 0;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Star class - organized twinkling stars
        class Star {
            constructor(layer = 0) {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5 + layer * 0.5;
                this.brightness = Math.random() * 0.5 + 0.5;
                this.twinkleSpeed = Math.random() * 0.02 + 0.005;
                this.twinklePhase = Math.random() * Math.PI * 2;
                this.layer = layer;
                // Color variation: white, blue-white, yellow-white
                this.colorType = Math.floor(Math.random() * 3);
            }

            draw() {
                const twinkle = Math.sin(time * this.twinkleSpeed + this.twinklePhase) * 0.3 + 0.7;
                const opacity = this.brightness * twinkle;

                // Mouse interaction for stars
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                let offsetX = 0;
                let offsetY = 0;
                if (distance < 150) {
                    const force = (150 - distance) / 150;
                    offsetX = -(dx / distance) * force * 15;
                    offsetY = -(dy / distance) * force * 15;
                }

                let color;
                switch (this.colorType) {
                    case 0: color = `rgba(255, 255, 255, ${opacity})`; break; // White
                    case 1: color = `rgba(200, 220, 255, ${opacity})`; break; // Blue-white
                    case 2: color = `rgba(255, 245, 220, ${opacity})`; break; // Yellow-white
                }

                // Draw star with glow
                const gradient = ctx.createRadialGradient(
                    this.x + offsetX, this.y + offsetY, 0,
                    this.x + offsetX, this.y + offsetY, this.size * 3
                );
                gradient.addColorStop(0, color);
                gradient.addColorStop(0.5, color.replace(/[\d.]+\)$/g, `${opacity * 0.3})`));
                gradient.addColorStop(1, color.replace(/[\d.]+\)$/g, '0)'));

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x + offsetX, this.y + offsetY, this.size * 3, 0, Math.PI * 2);
                ctx.fill();

                // Bright core
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(this.x + offsetX, this.y + offsetY, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Nebula Cloud class - colorful cosmic clouds
        class NebulaCloud {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.radius = Math.random() * 150 + 100;
                this.speedX = (Math.random() - 0.5) * 0.1;
                this.speedY = (Math.random() - 0.5) * 0.1;
                // Nebula colors: purple, blue, pink, cyan
                this.hue = [270, 220, 320, 180][Math.floor(Math.random() * 4)];
                this.pulseSpeed = Math.random() * 0.01 + 0.005;
                this.pulsePhase = Math.random() * Math.PI * 2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Mouse interaction for nebula clouds
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 250) {
                    const force = (250 - distance) / 250;
                    this.x -= (dx / distance) * force * 1.5;
                    this.y -= (dy / distance) * force * 1.5;
                }

                // Wrap around edges
                if (this.x < -this.radius) this.x = canvas.width + this.radius;
                if (this.x > canvas.width + this.radius) this.x = -this.radius;
                if (this.y < -this.radius) this.y = canvas.height + this.radius;
                if (this.y > canvas.height + this.radius) this.y = -this.radius;
            }

            draw() {
                const pulse = Math.sin(time * this.pulseSpeed + this.pulsePhase) * 0.2 + 0.8;
                const currentRadius = this.radius * pulse;

                // Create multi-layer nebula effect
                for (let i = 0; i < 3; i++) {
                    const layerRadius = currentRadius * (1 - i * 0.2);
                    const gradient = ctx.createRadialGradient(
                        this.x, this.y, 0,
                        this.x, this.y, layerRadius
                    );

                    const baseOpacity = 0.08 - i * 0.02;
                    gradient.addColorStop(0, `hsla(${this.hue + i * 10}, 80%, 60%, ${baseOpacity})`);
                    gradient.addColorStop(0.5, `hsla(${this.hue + i * 10}, 70%, 50%, ${baseOpacity * 0.5})`);
                    gradient.addColorStop(1, `hsla(${this.hue + i * 10}, 60%, 40%, 0)`);

                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, layerRadius, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        // Constellation class - connected star patterns
        class Constellation {
            constructor() {
                this.stars = [];
                const starCount = Math.floor(Math.random() * 3) + 3; // 3-5 stars
                const centerX = Math.random() * canvas.width;
                const centerY = Math.random() * canvas.height;
                const spread = 100;

                for (let i = 0; i < starCount; i++) {
                    this.stars.push({
                        x: centerX + (Math.random() - 0.5) * spread,
                        y: centerY + (Math.random() - 0.5) * spread,
                        size: Math.random() * 1.5 + 1
                    });
                }
            }

            draw() {
                // Draw connections
                ctx.strokeStyle = 'rgba(100, 150, 255, 0.15)';
                ctx.lineWidth = 1;
                for (let i = 0; i < this.stars.length - 1; i++) {
                    ctx.beginPath();
                    ctx.moveTo(this.stars[i].x, this.stars[i].y);
                    ctx.lineTo(this.stars[i + 1].x, this.stars[i + 1].y);
                    ctx.stroke();
                }

                // Draw stars
                this.stars.forEach(star => {
                    const gradient = ctx.createRadialGradient(
                        star.x, star.y, 0,
                        star.x, star.y, star.size * 2
                    );
                    gradient.addColorStop(0, 'rgba(200, 220, 255, 0.9)');
                    gradient.addColorStop(1, 'rgba(200, 220, 255, 0)');

                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
                    ctx.fill();
                });
            }
        }

        // Cosmic Dust class - small particles forming patterns
        class CosmicDust {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.3;
                this.speedX = Math.random() * 0.2 - 0.1;
                this.speedY = Math.random() * 0.2 - 0.1;
                this.opacity = Math.random() * 0.4 + 0.1;
                this.hue = Math.random() * 40 + 200; // Blue to cyan
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Enhanced mouse interaction
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    const force = (200 - distance) / 200;
                    this.x -= (dx / distance) * force * 2.0;
                    this.y -= (dy / distance) * force * 2.0;
                }

                // Wrap around edges
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = `hsla(${this.hue}, 70%, 70%, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Create organized star field (3 layers for depth)
        for (let layer = 0; layer < 3; layer++) {
            const starCount = Math.floor((canvas.width * canvas.height) / (15000 - layer * 3000));
            for (let i = 0; i < starCount; i++) {
                stars.push(new Star(layer));
            }
        }

        // Create nebula clouds
        const nebulaCount = Math.min(4, Math.floor(canvas.width / 500));
        for (let i = 0; i < nebulaCount; i++) {
            nebulaClouds.push(new NebulaCloud());
        }

        // Create constellations
        const constellationCount = Math.min(5, Math.floor(canvas.width / 400));
        for (let i = 0; i < constellationCount; i++) {
            constellations.push(new Constellation());
        }

        // Create cosmic dust
        const dustCount = Math.floor((canvas.width * canvas.height) / 10000);
        for (let i = 0; i < dustCount; i++) {
            cosmicDust.push(new CosmicDust());
        }

        // Mouse move handler
        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const animate = () => {
            time++;

            // Deep space background with subtle gradient
            const gradient = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0,
                canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
            );
            gradient.addColorStop(0, '#0a0a15');
            gradient.addColorStop(0.5, '#050510');
            gradient.addColorStop(1, '#000005');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw nebula clouds (background layer)
            nebulaClouds.forEach(nebula => {
                nebula.update();
                nebula.draw();
            });

            // Draw constellations
            constellations.forEach(constellation => constellation.draw());

            // Draw stars (multiple layers for depth)
            stars.forEach(star => star.draw());

            // Update and draw cosmic dust
            cosmicDust.forEach(dust => {
                dust.update();
                dust.draw();
            });

            // Draw subtle connections between nearby dust particles
            cosmicDust.forEach((dustA, indexA) => {
                cosmicDust.slice(indexA + 1, indexA + 5).forEach(dustB => {
                    const dx = dustA.x - dustB.x;
                    const dy = dustA.y - dustB.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 80) {
                        const opacity = 0.1 * (1 - distance / 80);
                        ctx.strokeStyle = `rgba(150, 180, 255, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(dustA.x, dustA.y);
                        ctx.lineTo(dustB.x, dustB.y);
                        ctx.stroke();
                    }
                });
            });

            // Draw cursor glow effect
            const cursorGradient = ctx.createRadialGradient(
                mouseX, mouseY, 0,
                mouseX, mouseY, 150
            );
            cursorGradient.addColorStop(0, 'rgba(99, 102, 241, 0.15)');
            cursorGradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.05)');
            cursorGradient.addColorStop(1, 'rgba(99, 102, 241, 0)');

            ctx.fillStyle = cursorGradient;
            ctx.beginPath();
            ctx.arc(mouseX, mouseY, 150, 0, Math.PI * 2);
            ctx.fill();

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, #0a0a15 0%, #050510 50%, #000005 100%)' }}
        />
    );
};

export default AnimatedBackground;
