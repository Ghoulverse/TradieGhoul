import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Twitter, Instagram, Youtube, ArrowRight, Gamepad2,
  Ghost, ExternalLink, Wrench, HardHat, Cog, Zap,
} from 'lucide-react';
import { config } from '@/data/ghoul.config';

gsap.registerPlugin(ScrollTrigger);

const GHOULVERSE_LINK = config.crossLinks.find((g) => g.id === 'ghoulverse');
const OTHER_GHOULS = config.crossLinks.filter((g) => g.id !== 'ghoulverse');

const PRODUCT_ICONS = [Wrench, HardHat, Cog, Zap, Zap];
const TABS = [
  { key: 'core' as const, label: 'CORE' },
  { key: 'pro' as const, label: 'PRO' },
  { key: 'tool' as const, label: 'TOOLS' },
  { key: 'refill' as const, label: 'REFILLS' },
  { key: 'limited' as const, label: 'LIMITED' },
];

function HazardStripe({ className }: { className?: string }) {
  return (
    <div className={`h-3 w-full ${className || ''}`}
      style={{
        background: 'repeating-linear-gradient(45deg, #eab308, #eab308 8px, #1a1a1a 8px, #1a1a1a 16px)',
      }} />
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'core' | 'pro' | 'tool' | 'refill' | 'limited'>('core');
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const scienceRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const crewRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero: slam in like a hammer
      gsap.from('.hero-slam', {
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power4.out',
        delay: 0.2,
      });

      // Spark animation on badges
      gsap.to('.spark', {
        opacity: 0,
        scale: 1.5,
        duration: 0.6,
        repeat: -1,
        repeatDelay: 2,
        ease: 'power2.out',
      });

      // Scroll reveals — hard and fast
      [statsRef, scienceRef, productRef, crewRef, gameRef, portfolioRef, ctaRef].forEach((ref) => {
        if (ref.current) {
          gsap.from(ref.current.querySelectorAll('.reveal'), {
            x: -40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power4.out',
            scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
          });
        }
      });
    });
    return () => ctx.revert();
  }, []);

  const filtered = config.products.filter((p) => p.category === activeTab);

  return (
    <div className="relative font-mono min-h-screen overflow-x-hidden" style={{ background: '#1a1a1a' }}>
      {/* Industrial noise texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        }} />

      {/* Metal scratch lines */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(234,179,8,0.3) 2px, rgba(234,179,8,0.3) 3px)',
          backgroundSize: '100% 8px',
        }} />

      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-3 px-4 md:px-8 border-b-2"
        style={{ borderColor: 'rgba(234,179,8,0.2)', background: 'rgba(26,26,26,0.95)', backdropFilter: 'blur(8px)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border-2 flex items-center justify-center relative overflow-hidden"
              style={{ borderColor: '#eab308', boxShadow: 'inset 0 0 6px rgba(234,179,8,0.3)' }}>
              <span className="text-base">{config.icon}</span>
              <div className="spark absolute inset-0 bg-[#eab308]/30" />
            </div>
            <span className="font-stencil text-sm tracking-[0.3em] text-[#eab308] uppercase">{config.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#eab308]/60">
              <span className="w-1.5 h-1.5 bg-[#eab308] animate-pulse" />
              ISO 9001
            </span>
            <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#a3a3a3] hover:text-[#d97706] transition-colors">
              GHOULVERSE <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex items-center px-4 md:px-8 overflow-hidden">
        {/* Hazard stripe top */}
        <div className="absolute top-0 left-0 right-0">
          <HazardStripe />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-20">
          <div className="lg:col-span-8 relative z-10">
            <div className="hero-slam mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold tracking-[0.3em] uppercase border-2 text-[#eab308]"
                style={{ borderColor: '#eab30840', background: 'rgba(234,179,8,0.05)' }}>
                <span className="w-2 h-2 bg-[#eab308] animate-pulse" />
                Industrial Strength Spirit
              </span>
            </div>

            <h1 className="hero-slam font-stencil leading-[0.85] mb-8">
              <span className="block text-[14vw] lg:text-[10rem] text-[#eab308]"
                style={{ textShadow: '0 0 30px rgba(234,179,8,0.3)' }}>
                TRADIE
              </span>
              <span className="block text-[14vw] lg:text-[10rem] text-[#d97706] -mt-2 lg:-mt-6"
                style={{ textShadow: '0 0 30px rgba(217,119,6,0.3)' }}>
                GHOUL
              </span>
            </h1>

            <p className="hero-slam text-[#a3a3a3] text-lg max-w-lg mb-10 leading-relaxed">
              Built tough for tough builds. <span className="text-[#eab308] font-bold">Industrial-grade formulas</span> that handle the mess no ordinary cleaner would survive.
            </p>

            <div className="hero-slam flex items-center gap-4">
              <a href="#workshop" className="group inline-flex items-center gap-3 px-7 py-3.5 font-stencil text-sm tracking-wider uppercase text-[#1a1a1a] transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #eab308, #d97706)', boxShadow: '0 0 25px rgba(234,179,8,0.3)' }}>
                EXPLORE THE WORKSHOP
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-[#a3a3a3]/30 text-xs tracking-wider">Click the ghoul to build!</span>
            </div>
          </div>

          <div className="lg:col-span-4 relative hidden lg:flex items-center justify-center">
            <div className="w-72 h-72 border-2 relative flex items-center justify-center"
              style={{ borderColor: '#eab30820', transform: 'rotate(3deg)' }}>
              <div className="absolute inset-2 border" style={{ borderColor: '#eab30810' }} />
              <div className="absolute inset-4 border" style={{ borderColor: '#eab30808' }} />
              <span className="text-[8rem] opacity-[0.06]">{config.icon}</span>
              {/* Rivets */}
              {[[0,0], [0,1], [1,0], [1,1]].map(([x, y], i) => (
                <div key={i} className="absolute w-2 h-2 rounded-full bg-[#eab308]/20"
                  style={{ [x ? 'right' : 'left']: '6px', [y ? 'bottom' : 'top']: '6px' }} />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <HazardStripe />
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section ref={statsRef} className="relative py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { label: 'TOOLS SAVED', value: '∞', color: '#eab308', sub: 'From the scrap heap' },
              { label: 'GREASE LEFT', value: '0', color: '#d97706', sub: 'Not a drop' },
              { label: 'RESTORATION', value: '100%', color: '#f97316', sub: 'Full recovery' },
            ].map((stat, i) => (
              <div key={i} className="reveal relative p-8 md:p-12 text-center group"
                style={{ border: `2px solid ${stat.color}30`, background: 'rgba(26,26,26,0.9)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = stat.color; e.currentTarget.style.boxShadow = `0 0 30px ${stat.color}15`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${stat.color}30`; e.currentTarget.style.boxShadow = 'none'; }}>
                <div className="absolute top-3 left-3 w-2 h-2 bg-[#eab308]/20" />
                <div className="absolute top-3 right-3 w-2 h-2 bg-[#eab308]/20" />
                <div className="absolute bottom-3 left-3 w-2 h-2 bg-[#eab308]/20" />
                <div className="absolute bottom-3 right-3 w-2 h-2 bg-[#eab308]/20" />
                <div className="font-stencil text-5xl md:text-6xl mb-2 transition-all group-hover:scale-110" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-white mb-1">{stat.label}</div>
                <div className="text-[10px] text-[#a3a3a3]/40 tracking-wider">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SCIENCE ===== */}
      <section ref={scienceRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="reveal mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#eab308]" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#eab308]">Proprietary Technology</span>
            </div>
            <h2 className="font-stencil text-4xl md:text-6xl text-white mb-4" style={{ textShadow: '0 0 20px rgba(255,255,255,0.05)' }}>
              THE SCIENCE
            </h2>
            <p className="text-[#eab308] text-xl md:text-2xl font-stencil">{config.science.subtitle}</p>
          </div>

          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-0 mb-12">
            <div className="p-8 border-2" style={{ borderColor: '#eab30820', background: 'rgba(26,26,26,0.9)' }}>
              <p className="text-[#a3a3a3] leading-relaxed">{config.science.description}</p>
            </div>
            <div className="p-8 border-2 border-l-0 md:border-l-2" style={{ borderColor: '#d9770620', background: 'rgba(26,26,26,0.9)' }}>
              <p className="text-[#a3a3a3]/70 text-sm leading-relaxed">{config.science.adaptation}</p>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-0">
            {config.science.stats.map((stat, i) => (
              <div key={i} className="p-6 text-center border-2"
                style={{ borderColor: '#eab30815', background: 'rgba(26,26,26,0.9)' }}>
                <div className="font-stencil text-2xl md:text-3xl text-[#eab308] mb-1">{stat.value}</div>
                <div className="text-[#a3a3a3] text-[10px] tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section ref={productRef} id="workshop" className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="reveal mb-12">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#eab308] mb-4 block">Product Architecture</span>
            <h2 className="font-stencil text-4xl md:text-5xl text-white mb-4" style={{ textShadow: '0 0 20px rgba(255,255,255,0.05)' }}>
              THE WORKSHOP
            </h2>
            <p className="text-[#a3a3a3] max-w-md">Five lines. Nine formulations. Total industrial domination.</p>
          </div>

          {/* Tabs */}
          <div className="reveal flex flex-wrap gap-2 mb-8">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              const count = config.products.filter((p) => p.category === tab.key).length;
              return (
                <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                  className="px-5 py-2 text-xs font-bold tracking-wider uppercase transition-all"
                  style={{
                    background: isActive ? '#eab308' : 'transparent',
                    color: isActive ? '#1a1a1a' : '#a3a3a3',
                    border: isActive ? '2px solid #eab308' : '2px solid #eab30825',
                    boxShadow: isActive ? '0 0 20px rgba(234,179,8,0.3)' : 'none',
                  }}>
                  {tab.label} ({count})
                </button>
              );
            })}
          </div>

          {/* Product Grid — Industrial labels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((product, i) => {
              const Icon = PRODUCT_ICONS[i % PRODUCT_ICONS.length];
              const colors = ['#eab308', '#d97706', '#f97316', '#eab308', '#d97706'];
              const color = colors[i % colors.length];

              return (
                <div key={i} className="reveal group relative p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(26,26,26,0.95)', border: `2px solid ${color}20` }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 0 25px ${color}20`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${color}20`; e.currentTarget.style.boxShadow = 'none'; }}>

                  {/* Industrial badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 border-2 flex items-center justify-center rotate-12"
                    style={{ borderColor: `${color}30`, background: '#1a1a1a' }}>
                    <Icon className="w-4 h-4 -rotate-12" style={{ color }} />
                  </div>

                  {/* Rivet corners */}
                  {[[0,0], [0,1], [1,0], [1,1]].map(([x, y], ri) => (
                    <div key={ri} className="absolute w-1.5 h-1.5 rounded-full bg-[#eab308]/15"
                      style={{ [x ? 'right' : 'left']: '4px', [y ? 'bottom' : 'top']: '4px' }} />
                  ))}

                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 border-2 flex items-center justify-center"
                      style={{ borderColor: `${color}30` }}>
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-1 border"
                      style={{ color, borderColor: `${color}30` }}>
                      {product.category}
                    </span>
                  </div>

                  <h3 className="font-stencil text-base text-white mb-1 tracking-wide uppercase">{product.name}</h3>
                  <p className="text-[#eab308] text-xs font-bold mb-3">{product.tagline}</p>
                  <p className="text-[#a3a3a3] text-xs leading-relaxed mb-4">{product.description}</p>

                  {product.heroIngredient && (
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-[9px] tracking-wider uppercase text-[#a3a3a3]/40">Powered by</span>
                      <span className="text-[10px] font-bold" style={{ color }}>{product.heroIngredient}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.features.map((feat, fi) => (
                      <span key={fi} className="text-[9px] px-2 py-0.5 border"
                        style={{ color: '#a3a3a3', borderColor: `${color}20` }}>
                        {feat}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t-2" style={{ borderColor: `${color}15` }}>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#a3a3a3]/40">{product.volume}</span>
                    <span className="text-sm font-bold font-stencil" style={{ color }}>{product.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CREW (LINEUP) ===== */}
      <section ref={crewRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#d97706] mb-4 block">Workshop Crew</span>
            <h2 className="font-stencil text-4xl md:text-6xl text-white mb-4" style={{ textShadow: '0 0 20px rgba(255,255,255,0.05)' }}>
              THE GHOULVERSE
            </h2>
            <p className="text-[#a3a3a3] max-w-lg mx-auto">Eight legendary crews. One epic universe. Don't miss a single shift.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {OTHER_GHOULS.map((g) => (
              <a key={g.id}
                href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                target="_blank" rel="noopener noreferrer"
                className="reveal group relative p-5 text-center transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                style={{ background: 'rgba(26,26,26,0.9)', border: `2px solid ${g.color}20` }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = g.color; e.currentTarget.style.boxShadow = `0 0 25px ${g.color}20`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${g.color}20`; e.currentTarget.style.boxShadow = 'none'; }}>
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: `drop-shadow(0 0 10px ${g.color}40)` }}>
                  {g.icon}
                </div>
                <h3 className="font-stencil text-xs text-white tracking-wider uppercase">{g.name}</h3>
                <p className="text-[#a3a3a3]/50 text-[10px] uppercase tracking-wider mt-1">{g.realm}</p>
                {!g.live && <span className="text-[9px] text-[#a3a3a3]/30 uppercase tracking-wider block mt-1">TBA</span>}
              </a>
            ))}
          </div>

          <div className="reveal text-center">
            <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-stencil text-sm tracking-wider uppercase text-[#1a1a1a] transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #eab308, #f97316)', boxShadow: '0 0 30px rgba(234,179,8,0.3)' }}>
              ENTER THE GHOULVERSE <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== GAME ===== */}
      <section ref={gameRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="reveal relative p-10 md:p-16 text-center overflow-hidden"
            style={{ border: '2px solid #eab30830', background: 'linear-gradient(135deg, rgba(234,179,8,0.05), rgba(249,115,22,0.05))' }}>
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#eab308]" />
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#d97706]" />
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#d97706]" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#eab308]" />
            <div className="absolute top-4 left-4 w-2 h-2 bg-[#eab308]/20" />
            <div className="absolute top-4 right-4 w-2 h-2 bg-[#eab308]/20" />
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#eab308]/20" />
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#eab308]/20" />

            <Gamepad2 className="w-14 h-14 text-[#eab308] mx-auto mb-6" style={{ filter: 'drop-shadow(0 0 12px rgba(234,179,8,0.5))' }} />
            <h2 className="font-stencil text-4xl md:text-6xl text-white mb-4" style={{ textShadow: '0 0 20px rgba(234,179,8,0.2)' }}>
              PLAY GHOULVERSE
            </h2>
            <p className="text-[#a3a3a3] max-w-xl mx-auto mb-8">Pilot {config.name} through the Void. Battle bacteria, unlock all 8 ghouls, claim the leaderboard.</p>
            <a href={config.gameUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-stencil text-sm tracking-wider uppercase text-[#1a1a1a] transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #eab308, #d97706)', boxShadow: '0 0 30px rgba(234,179,8,0.4)' }}>
              <Gamepad2 className="w-5 h-5" /> PLAY NOW
            </a>
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section ref={portfolioRef} className="relative py-16 px-4 md:px-8 border-t-2" style={{ borderColor: 'rgba(234,179,8,0.1)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-10">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#a3a3a3]/40 mb-2 block">The House of GHOUL</span>
            <h3 className="font-stencil text-2xl text-white">THE PORTFOLIO</h3>
          </div>
          <div className="reveal grid grid-cols-4 md:grid-cols-8 gap-3">
            {config.crossLinks.map((g) => {
              const isActive = g.id === config.id;
              return (
                <a key={g.id}
                  href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                  target="_blank" rel="noopener noreferrer"
                  className="group text-center p-3 transition-all duration-300"
                  style={{ background: isActive ? `${g.color}15` : 'rgba(26,26,26,0.5)', border: isActive ? `2px solid ${g.color}` : '2px solid transparent' }}
                  onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.borderColor = `${g.color}30`; e.currentTarget.style.background = `${g.color}05`; } }}
                  onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.background = 'rgba(26,26,26,0.5)'; } }}>
                  <div className="text-2xl md:text-3xl mb-2 group-hover:scale-110 transition-transform">{g.icon}</div>
                  <p className="text-[9px] font-bold tracking-wider uppercase text-white mb-0.5">{g.name.replace(' GHOUL', '')}</p>
                  <p className="text-[8px] text-[#a3a3a3]/30 uppercase tracking-wider">{g.realm}</p>
                  {isActive && <span className="text-[8px] mt-1 inline-block px-1.5 py-0.5" style={{ color: g.color, border: `1px solid ${g.color}30` }}>{config.products.length} Products</span>}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA / FOOTER ===== */}
      <section ref={ctaRef} className="relative py-24 md:py-40 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal mb-8">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#eab308] mb-4 block">Investor Relations</span>
            <h2 className="font-stencil text-4xl md:text-5xl text-white mb-4" style={{ textShadow: '0 0 20px rgba(255,255,255,0.05)' }}>
              {config.cta.headline}
            </h2>
            <p className="text-[#a3a3a3]">{config.cta.subheadline}</p>
          </div>

          <div className="reveal flex flex-col sm:flex-row gap-3 mb-16">
            <input type="email" placeholder={config.cta.placeholderText}
              className="flex-1 px-5 py-4 font-mono text-sm text-white placeholder:text-[#a3a3a3]/30 outline-none bg-transparent border-2 transition-all focus:border-[#eab308]"
              style={{ borderColor: 'rgba(234,179,8,0.2)' }} />
            <button className="px-8 py-4 font-stencil text-sm tracking-wider uppercase text-[#1a1a1a] transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #eab308, #f97316)', boxShadow: '0 0 20px rgba(234,179,8,0.3)' }}>
              {config.cta.buttonText}
            </button>
          </div>

          <div className="reveal flex items-center justify-center gap-3 mb-10">
            {[Twitter, Instagram, Youtube].map((Icon, i) => {
              const colors = ['#eab308', '#d97706', '#f97316'];
              return (
                <a key={i} href="#" className="w-12 h-12 flex items-center justify-center transition-all hover:scale-110 border-2"
                  style={{ borderColor: `${colors[i]}25`, background: 'rgba(26,26,26,0.8)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors[i]; e.currentTarget.style.boxShadow = `0 0 15px ${colors[i]}30`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${colors[i]}25`; e.currentTarget.style.boxShadow = 'none'; }}>
                  <Icon className="w-4 h-4" style={{ color: colors[i] }} />
                </a>
              );
            })}
          </div>

          <div className="reveal mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono">
            <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer"
              className="text-[#a3a3a3] hover:text-[#eab308] transition-colors flex items-center gap-1 tracking-wider">
              <Ghost className="w-3 h-3" /> Explore GHOULVERSE
            </a>
            <span className="text-[#a3a3a3]/20 hidden sm:inline">|</span>
            <a href={config.gameUrl} target="_blank" rel="noopener noreferrer"
              className="text-[#a3a3a3] hover:text-[#f97316] transition-colors flex items-center gap-1 tracking-wider">
              <Gamepad2 className="w-3 h-3" /> Play GHOULVERSE
            </a>
          </div>

          <p className="reveal text-[#a3a3a3]/20 text-xs tracking-wider font-mono">
            &copy; 2025 <span className="font-stencil text-[#eab308]/40">{config.name}</span> — Part of the{' '}
            <a href={GHOULVERSE_LINK?.domain || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-[#eab308] transition-colors">GHOULVERSE</a>
          </p>
        </div>
      </section>
    </div>
  );
}
