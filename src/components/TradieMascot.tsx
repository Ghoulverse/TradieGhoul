import { useEffect, useRef, useState, useCallback } from 'react';
import { useTradieCursor } from '@/hooks/useTradieCursor';

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

interface MiniTradieGhoul {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  scale: number;
  rotation: number;
}

const SPARK_COLORS = ['#f97316', '#fbbf24', '#ef4444', '#ffffff', '#eab308'];
const SPEECH_LINES = [
  "Built tough!",
  "No worries, mate!",
  "She'll be right!",
  "Get it done!",
  "Full send!",
  "Hard yakka!",
];

export function TradieGhostSVG({ expression, isHovered }: {
  expression: number;
  isHovered: boolean;
}) {
  const hoverScale = isHovered ? 1.06 : 1;

  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      style={{
        filter: `drop-shadow(0 0 ${isHovered ? 20 : 12}px rgba(249,115,22,${isHovered ? 0.45 : 0.25})) drop-shadow(0 0 ${isHovered ? 40 : 24}px rgba(234,179,8,${isHovered ? 0.2 : 0.15}))`,
        transform: `scale(${hoverScale})`,
        transition: 'transform 0.15s ease-out',
      }}
    >
      <defs>
        <linearGradient id="tradieBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde68a" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#fcd34d" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="highVis" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="50%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>

      {/* Ghost body */}
      <path
        d="M100 12 C142 12 174 44 174 88 C174 114 168 136 162 152 C159 160 152 156 148 164 C144 172 137 168 132 176 C127 184 121 180 116 188 C111 196 105 192 100 200 C95 192 89 196 84 188 C79 180 73 184 68 176 C63 168 56 172 52 164 C48 156 41 160 38 152 C32 134 26 112 26 88 C26 44 58 12 100 12Z"
        fill="url(#tradieBody)"
        stroke="rgba(249,115,22,0.3)"
        strokeWidth="1.5"
      />

      {/* Hard hat (all expressions) */}
      <path d="M45 35 Q100 5 155 35 L155 42 Q100 15 45 42Z" fill="#f97316" />
      <path d="M40 42 Q100 12 160 42 L160 48 Q100 20 40 48Z" fill="#ea580c" />
      <rect x="95" y="15" width="10" height="12" fill="#ea580c" rx="2" />

      {/* High-vis stripes on body */}
      <rect x="32" y="95" width="136" height="8" rx="2" fill="#f97316" opacity="0.8" />
      <rect x="35" y="97" width="130" height="4" rx="1" fill="#fbbf24" opacity="0.9" />
      <rect x="32" y="120" width="136" height="8" rx="2" fill="#f97316" opacity="0.8" />
      <rect x="35" y="122" width="130" height="4" rx="1" fill="#fbbf24" opacity="0.9" />

      {expression === 0 && (
        <>
          {/* Default - Determined eyes, grease smudge, wrench */}
          <ellipse cx="68" cy="72" rx="11" ry="9" fill="#fff" />
          <circle cx="68" cy="72" r="4.5" fill="#1f2937" />
          <circle cx="69" cy="70" r="1.5" fill="#fff" />
          <ellipse cx="132" cy="72" rx="11" ry="9" fill="#fff" />
          <circle cx="132" cy="72" r="4.5" fill="#1f2937" />
          <circle cx="133" cy="70" r="1.5" fill="#fff" />

          {/* Determined brow */}
          <path d="M56 62 Q68 58 80 62" fill="none" stroke="#1f2937" strokeWidth="1.5" />
          <path d="M120 62 Q132 58 144 62" fill="none" stroke="#1f2937" strokeWidth="1.5" />

          {/* Grease smudge */}
          <ellipse cx="55" cy="85" rx="6" ry="4" fill="#374151" opacity="0.3" transform="rotate(-20 55 85)" />
          <ellipse cx="52" cy="88" rx="3" ry="2" fill="#374151" opacity="0.2" />

          {/* Small smile */}
          <path d="M92 108 Q100 112 108 108" fill="none" stroke="#1f2937" strokeWidth="1.5" strokeLinecap="round" />

          {/* Wrench in hand */}
          <rect x="158" y="100" width="6" height="35" rx="2" fill="#9ca3af" transform="rotate(25 161 117)" />
          <rect x="155" y="95" width="12" height="8" rx="2" fill="#6b7280" transform="rotate(25 161 99)" />
          <rect x="155" y="130" width="12" height="8" rx="2" fill="#6b7280" transform="rotate(25 161 134)" />
        </>
      )}

      {expression === 1 && (
        <>
          {/* Power - Flexing, tool belt, sparks in eyes */}
          <ellipse cx="68" cy="70" rx="12" ry="10" fill="#fff" />
          <circle cx="68" cy="70" r="5" fill="#f97316" />
          <circle cx="69" cy="68" r="2" fill="#fff" />
          <ellipse cx="132" cy="70" rx="12" ry="10" fill="#fff" />
          <circle cx="132" cy="70" r="5" fill="#f97316" />
          <circle cx="133" cy="68" r="2" fill="#fff" />

          {/* Big grin */}
          <path d="M88 105 Q100 118 112 105" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
          <path d="M90 106 Q100 115 110 106" fill="#f97316" opacity="0.3" />

          {/* Tool belt */}
          <rect x="40" y="140" width="120" height="10" rx="2" fill="#4b5563" />
          <rect x="60" y="138" width="15" height="14" rx="2" fill="#374151" />
          <rect x="90" y="138" width="12" height="14" rx="2" fill="#374151" />
          <rect x="120" y="138" width="18" height="14" rx="2" fill="#374151" />

          {/* Flexing arms */}
          <ellipse cx="30" cy="110" rx="14" ry="18" fill="#fde68a" opacity="0.6" transform="rotate(-30 30 110)" />
          <ellipse cx="170" cy="110" rx="14" ry="18" fill="#fde68a" opacity="0.6" transform="rotate(30 170 110)" />
        </>
      )}

      {expression === 2 && (
        <>
          {/* Rage - Grinding wheel effect, intense glow, oil splatters */}
          <ellipse cx="68" cy="70" rx="13" ry="11" fill="#fff" />
          <circle cx="68" cy="70" r="5.5" fill="#ef4444">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="0.1s" repeatCount="indefinite" />
          </circle>
          <circle cx="69" cy="68" r="2" fill="#fff" />
          <ellipse cx="132" cy="70" rx="13" ry="11" fill="#fff" />
          <circle cx="132" cy="70" r="5.5" fill="#ef4444">
            <animate attributeName="opacity" values="1;0.7;1" dur="0.1s" repeatCount="indefinite" />
          </circle>
          <circle cx="133" cy="68" r="2" fill="#fff" />

          {/* Grinding wheel spark lines */}
          <line x1="30" y1="50" x2="20" y2="40" stroke="#fbbf24" strokeWidth="2" />
          <line x1="25" y1="60" x2="12" y2="55" stroke="#f97316" strokeWidth="2" />
          <line x1="170" y1="50" x2="180" y2="40" stroke="#fbbf24" strokeWidth="2" />
          <line x1="175" y1="60" x2="188" y2="55" stroke="#f97316" strokeWidth="2" />

          {/* Rage mouth */}
          <path d="M85 108 Q100 118 115 108" fill="none" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />

          {/* Oil splatters */}
          <circle cx="45" cy="150" r="5" fill="#374151" opacity="0.4" />
          <circle cx="155" cy="155" r="4" fill="#374151" opacity="0.3" />
          <circle cx="40" cy="165" r="3" fill="#374151" opacity="0.25" />
          <circle cx="160" cy="170" r="3.5" fill="#374151" opacity="0.3" />

          {/* Intense aura */}
          <circle cx="100" cy="100" r="92" fill="none" stroke="#f97316" strokeWidth="1" opacity="0.15">
            <animate attributeName="r" values="90;95;90" dur="0.3s" repeatCount="indefinite" />
          </circle>
        </>
      )}

      {/* Boots at bottom (all expressions) */}
      <ellipse cx="70" cy="188" rx="18" ry="8" fill="#374151" />
      <ellipse cx="130" cy="188" rx="18" ry="8" fill="#374151" />
    </svg>
  );
}

export default function TradieMascot() {
  const { x, y, isMoving, velocity } = useTradieCursor();
  const [_expression, setExpression] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [speechBubble, setSpeechBubble] = useState('');
  const [fullSendMode, setFullSendMode] = useState(false);

  const sparksRef = useRef<Spark[]>([]);
  const miniGhoulsRef = useRef<MiniTradieGhoul[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const clickCountRef = useRef(0);
  const typedRef = useRef('');
  const mascotSize = typeof window !== 'undefined' && window.innerWidth < 768 ? 180 : 280;
  const cursorRef = useRef({ x, y, isMoving, velocity, mascotSize, fullSendMode });

  const spawnSparks = useCallback((cx: number, cy: number, count = 35) => {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 1;
      const speed = Math.random() * 7 + 3;
      sparksRef.current.push({
        x: cx + mascotSize / 2,
        y: cy + mascotSize / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: Math.random() * 3 + 1,
        color: SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)],
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 50 + 30,
      });
    }
  }, [mascotSize]);

  const handleClick = useCallback(() => {
    clickCountRef.current = (clickCountRef.current + 1) % 3;
    const newExpr = clickCountRef.current;
    setExpression(newExpr);
    spawnSparks(x, y, newExpr === 2 ? 80 : 35);

    if (newExpr === 2) {
      document.body.classList.add('screen-shake');
      setTimeout(() => document.body.classList.remove('screen-shake'), 500);
    }

    const line = SPEECH_LINES[newExpr] || SPEECH_LINES[0];
    setSpeechBubble(line);
    setTimeout(() => setSpeechBubble(''), 2000);
  }, [x, y, spawnSparks]);

  const handleDoubleClick = useCallback(() => {
    if (miniGhoulsRef.current.length >= 5) return;
    for (let i = 0; i < 2; i++) {
      miniGhoulsRef.current.push({
        x: x + mascotSize / 2 + (Math.random() - 0.5) * 50,
        y: y + mascotSize,
        vx: (Math.random() - 0.5) * 3,
        vy: -Math.random() * 4 - 1,
        opacity: 1,
        scale: 0.25 + Math.random() * 0.2,
        rotation: Math.random() * 360,
      });
    }
  }, [x, y, mascotSize]);

  // Easter egg: type "send"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        spawnSparks(x, y, 15);
        return;
      }
      typedRef.current += e.key.toLowerCase();
      if (typedRef.current.length > 8) typedRef.current = typedRef.current.slice(-8);

      if (typedRef.current.includes('send')) {
        typedRef.current = '';
        setExpression(2);
        setFullSendMode(true);
        setSpeechBubble('FULL SEND!');
        document.body.classList.add('screen-shake');
        spawnSparks(x, y, 120);
        setTimeout(() => {
          setExpression(0);
          setFullSendMode(false);
          setSpeechBubble('');
          document.body.classList.remove('screen-shake');
          clickCountRef.current = 0;
        }, 3000);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [x, y, spawnSparks]);

  cursorRef.current = { x, y, isMoving, velocity, mascotSize, fullSendMode };

  // Animation loop
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

    let sparkTimer = 0;

    const animate = () => {
      const { x, y, isMoving, velocity, mascotSize, fullSendMode } = cursorRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Sparks on movement
      if (isMoving && velocity > 1.5) {
        sparkTimer++;
        if (sparkTimer > 8) {
          sparkTimer = 0;
          const cx = x + mascotSize / 2;
          const cy = y + mascotSize / 2;
          sparksRef.current.push({
            x: cx + (Math.random() - 0.5) * 20,
            y: cy + mascotSize * 0.8,
            vx: (Math.random() - 0.5) * 2,
            vy: -Math.random() * 3 - 1,
            size: Math.random() * 2.5 + 1,
            color: SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)],
            opacity: 0.8,
            life: 0,
            maxLife: Math.random() * 40 + 20,
          });
        }
      }

      // Sparks
      sparksRef.current = sparksRef.current.filter((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.12;
        s.life++;
        const lifeRatio = s.life / s.maxLife;
        s.opacity = Math.max(0, 1 - lifeRatio);

        if (s.opacity <= 0) return false;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.opacity;
        ctx.fill();

        // Spark glow
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.opacity * 0.1;
        ctx.fill();

        return true;
      });

      // Mini tradie ghouls
      miniGhoulsRef.current = miniGhoulsRef.current.filter((mg) => {
        mg.x += mg.vx;
        mg.y += mg.vy;
        mg.vy -= 0.015;
        mg.vx *= 0.995;
        mg.opacity -= 0.003;
        mg.rotation += 2;

        if (mg.opacity <= 0) return false;

        ctx.save();
        ctx.globalAlpha = mg.opacity;
        ctx.translate(mg.x, mg.y);
        ctx.rotate((mg.rotation * Math.PI) / 180);
        ctx.scale(mg.scale, mg.scale);

        // Mini ghost body
        ctx.beginPath();
        ctx.arc(0, -8, 18, Math.PI, 0);
        ctx.bezierCurveTo(18, 8, 14, 26, 10, 22);
        ctx.bezierCurveTo(5, 28, 0, 24, -5, 26);
        ctx.bezierCurveTo(-10, 28, -14, 24, -18, 22);
        ctx.bezierCurveTo(-22, 18, -18, 8, -18, -8);
        ctx.fillStyle = '#fcd34d';
        ctx.fill();

        {/* Mini hard hat */}
        ctx.fillStyle = '#f97316';
        ctx.beginPath();
        ctx.ellipse(0, -22, 14, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        // Mini eyes
        ctx.fillStyle = '#1f2937';
        ctx.beginPath();
        ctx.arc(-5, -8, 2, 0, Math.PI * 2);
        ctx.arc(5, -8, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
        return true;
      });

      // Full send mode orange tint
      if (fullSendMode) {
        ctx.fillStyle = 'rgba(249, 115, 22, 0.02)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9996 }}
      />

      <div
        className="fixed pointer-events-none"
        style={{
          left: x,
          top: y,
          zIndex: 9997,
          width: mascotSize,
          height: mascotSize,
        }}
      >
        {speechBubble && (
          <div
            className="absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2 whitespace-nowrap font-oswald text-sm tracking-wider pointer-events-none"
            style={{
              background: 'rgba(26, 26, 26, 0.95)',
              border: '2px solid #f97316',
              color: '#fbbf24',
              boxShadow: '0 0 20px rgba(249,115,22,0.4)',
              animation: 'bounce-subtle 0.3s ease-in-out infinite',
              zIndex: 9999,
            }}
          >
            {speechBubble}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid #f97316',
              }}
            />
          </div>
        )}

        <div
          className="relative pointer-events-auto cursor-pointer"
          style={{
            width: mascotSize,
            height: mascotSize,
            animation: !isMoving ? `ghost-bob 2.5s ease-in-out infinite, ghost-sway 3.5s ease-in-out infinite` : undefined,
          }}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src="/ghoul_mascot.png"
            alt="TRADIE GHOUL"
            className="w-full h-full object-contain"
            draggable={false}
            style={{
              filter: isHovered
                ? 'brightness(1.15)'
                : undefined,
              transition: 'filter 0.3s ease',
            }}
          />
        </div>
      </div>
    </>
  );
}
