const canvas = document.getElementById("particleCanvas");
        const ctx = canvas.getContext("2d");
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        let particles = [];
        const particleCount = 150;
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.alpha = 0;
                this.fadeIn = Math.random() < 0.5;
                this.fadeSpeed = Math.random() * 0.01 + 0.005;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.fadeIn) {
                    this.alpha += this.fadeSpeed;
                    if (this.alpha >= 1) this.fadeIn = false;
                } else {
                    this.alpha -= this.fadeSpeed;
                    if (this.alpha <= 0) {
                        this.x = Math.random() * canvas.width;
                        this.y = Math.random() * canvas.height;
                        this.alpha = 0;
                        this.fadeIn = Math.random() < 0.5;
                    }
                }
                
                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
            }
            
            draw() {
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
                ctx.shadowBlur = 10;
                ctx.shadowColor = "rgba(255, 255, 255, 1)";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animateParticles);
        }
        
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        });
        
        initParticles();
        animateParticles();