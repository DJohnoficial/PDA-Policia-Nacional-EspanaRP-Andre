const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

let particles = [];
const colors = ['#0a84ff','#5ac8fa','#ff2d55','#ff9500'];

// Crear partículas
for(let i=0; i<150; i++){
    particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
        color: colors[Math.floor(Math.random() * colors.length)]
    });
}

// Animar partículas
function animateParticles(){
    ctx.clearRect(0,0,w,h);
    particles.forEach(p=>{
        p.x += p.dx;
        p.y += p.dy;

        // Rebote
        if(p.x < 0 || p.x > w) p.dx *= -1;
        if(p.y < 0 || p.y > h) p.dy *= -1;

        // Dibujar
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = p.color;
        ctx.fill();
    });
    requestAnimationFrame(animateParticles);
}

animateParticles();

// Ajustar canvas al redimensionar ventana
window.addEventListener('resize', ()=>{
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
});
