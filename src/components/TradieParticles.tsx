import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
  type: 'spark' | 'sawdust' | 'metal';
}

export default function TradieParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#f97316', '#fbbf24', '#9ca3af', '#6b7280', '#374151', '#ef4444'];

    const createParticle = (): Particle => {
      const typeRoll = Math.random();
      let type: Particle['type'];
      if (typeRoll < 0.3) type = 'spark';
      else if (typeRoll < 0.7) type = 'sawdust';
      else type = 'metal';

      return {
        x: Math.random() * canvas.width,
        y: type === 'spark' ? canvas.height + Math.random() * 30 : Math.random() * canvas.height,
        size: type === 'spark' ? Math.random() * 2 + 0.5 : Math.random() * 3 + 1,
        speedY: type === 'spark' ? -(Math.random() * 1.5 + 0.5) : Math.random() * 0.4 + 0.1,
        speedX: (Math.random() - 0.5) * (type === 'spark' ? 2 : 0.5),
        opacity: Math.random() * 0.4 + 0.08,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 600 + 300,
        type,
      };
    };

    for (let i = 0; i < 50; i++) {
      const p = createParticle();
      p.y = Math.random() * canvas.height;
      p.life = Math.random() * p.maxLife;
      particlesRef.current.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;

        const lifeRatio = p.life / p.maxLife;
        const fadeIn = Math.min(lifeRatio * 5, 1);
        const fadeOut = lifeRatio > 0.85 ? (1 - lifeRatio) / 0.15 : 1;
        const currentOpacity = p.opacity * fadeIn * fadeOut;

        ctx.save();
        ctx.globalAlpha = currentOpacity;

        if (p.type === 'spark') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = currentOpacity * 0.08;
          ctx.fill();
        } else if (p.type === 'sawdust') {
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, p.size, p.size * 0.6);
        } else {
          // metal shaving
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.ellipse(p.x, p.y, p.size, p.size * 0.3, Math.random(), 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        if (p.life >= p.maxLife || (p.type === 'spark' && p.y < -10)) {
          particlesRef.current[i] = createParticle();
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
