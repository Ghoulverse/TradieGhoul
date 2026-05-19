import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Twitter, Instagram, Youtube, Gamepad2,
  Ghost, Wrench, Hammer, Drill, HardHat, Cog,
} from 'lucide-react';
import { config } from '@/data/ghoul.config';

gsap.registerPlugin(ScrollTrigger);

const OTHER_GHOULS = config.crossLinks.filter((g) => g.id !== 'ghoulverse');
const GHOULVERSE_LINK = config.crossLinks.find((g) => g.id === 'ghoulverse');

const PRODUCT_ICONS = [Wrench, Hammer, Drill, HardHat, Cog];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const crewRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroTextRef.current) {
        gsap.from(heroTextRef.current.children, {
          x: -50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power4.out',
          delay: 0.3,
        });
      }

      const sections = [codeRef, productRef, crewRef, gameRef, ctaRef];
      sections.forEach((ref) => {
        if (ref.current) {
          gsap.from(ref.current.querySelectorAll('.reveal'), {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative font-inter">
      {/* Grunge overlay */}
      <div className="grunge-overlay" />

      {/* ===== NAV ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 border-b border-[#f97316]/10"
        style={{ background: 'rgba(26, 26, 26, 0.95)' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#f97316]" />
            <span className="font-oswald text-sm tracking-[0.15em] uppercase text-[#e2e8f0]">
              {config.name}
            </span>
          </div>
          <a
            href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-oswald tracking-[0.2em] uppercase text-[#9ca3af] hover:text-[#f97316] transition-colors"
          >
            GHOULVERSE
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center px-4 md:px-8 overflow-hidden"
      >
        {/* Industrial accent lines */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#f97316] via-[#f97316]/20 to-transparent opacity-30" />
        <div className="absolute top-0 right-20 w-px h-32 bg-[#f97316]/20" />

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div ref={heroTextRef} className="z-10 pt-20 md:pt-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#f97316]" />
              <span className="text-[10px] font-oswald tracking-[0.3em] uppercase text-[#f97316]">
                The Industrial Wastes
              </span>
            </div>

            <h1 className="font-oswald text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight uppercase mb-6"
              style={{ color: '#e2e8f0' }}>
              Tradie
              <span className="block text-[#f97316]">Ghoul</span>
            </h1>

            <p className="text-[#9ca3af] text-base md:text-lg max-w-md mb-8 leading-relaxed">
              {config.tagline}. Built tough for tough builds. No mess too industrial.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#code"
                className="inline-flex items-center gap-2 px-6 py-3 font-oswald text-sm tracking-wider uppercase transition-all hover:scale-105"
                style={{
                  background: '#f97316',
                  color: '#1a1a1a',
                  clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
                }}
              >
                Get to Work
              </a>
              <span className="text-[#9ca3af]/40 text-xs tracking-wider uppercase">
                Click the ghoul
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center h-[50vh] relative">
            <div className="absolute w-64 h-64 border border-[#f97316]/10 rotate-45" />
            <div className="absolute w-48 h-48 border border-[#f97316]/5 rotate-12" />
            <div className="font-oswald text-[16rem] font-bold text-[#f97316] opacity-[0.03] select-none uppercase">
              T
            </div>
          </div>
        </div>
      </section>

      {/* ===== CODE OF HONOR ===== */}
      <section id="code" ref={codeRef} className="relative py-24 md:py-40 px-4 md:px-8 border-t border-[#f97316]/10">
        <div className="max-w-4xl mx-auto">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#f97316]" />
              <span className="text-[10px] font-oswald tracking-[0.3em] uppercase text-[#f97316]">
                Code of Honor
              </span>
            </div>

            <h2 className="font-oswald text-4xl md:text-6xl font-bold uppercase leading-tight mb-8"
              style={{ color: '#e2e8f0' }}>
              Built Tough
              <span className="text-[#f97316]"> For Tough Builds</span>
            </h2>

            <p className="text-[#9ca3af] text-lg leading-relaxed max-w-xl mb-6">
              We don't do delicate. We don't do gentle. We handle the industrial-grade messes
              that would break lesser entities. Concrete, grease, oil, rust — bring it on.
            </p>
            <p className="text-[#9ca3af]/70 leading-relaxed max-w-lg text-sm">
              Every product is formulated for the workshop, the site, the shed.
              No fancy fragrances. No soft promises. Just results.
            </p>
          </div>
        </div>
      </section>

      {/* ===== THE SHED (PRODUCTS) ===== */}
      <section ref={productRef} className="relative py-24 md:py-40 px-4 md:px-8 border-t border-[#f97316]/10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#f97316]" />
              <span className="text-[10px] font-oswald tracking-[0.3em] uppercase text-[#f97316]">
                The Shed
              </span>
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-[#e2e8f0] mb-4">
              Gear Up
            </h2>
            <p className="text-[#9ca3af] max-w-md text-sm">
              Industrial-grade essentials. No fluff.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#374151]/30">
            {config.products.map((product, i) => {
              const Icon = PRODUCT_ICONS[i % PRODUCT_ICONS.length];
              const colors = ['#f97316', '#fbbf24', '#ef4444', '#eab308', '#9ca3af'];
              const color = colors[i % colors.length];

              return (
                <div
                  key={i}
                  className="reveal group relative p-6 md:p-8 transition-all duration-300 hover:bg-[#262626]"
                  style={{ background: 'rgba(26, 26, 26, 0.95)' }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.5} />
                    <span className="font-oswald text-xs tracking-wider" style={{ color: `${color}60` }}>
                      GEAR-{String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="font-oswald text-lg font-bold uppercase text-[#e2e8f0] mb-2 tracking-wide">
                    {product.name}
                  </h3>
                  <p className="text-[#9ca3af] text-xs leading-relaxed">
                    {product.description || 'Heavy-duty formulation. Industrial strength.'}
                  </p>

                  {product.comingSoon && (
                    <div className="mt-4 pt-4 border-t border-[#374151]/50">
                      <span className="text-[10px] font-oswald tracking-[0.2em] uppercase"
                        style={{ color }}>
                        On Order
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== THE CREW (UNIVERSE) ===== */}
      <section ref={crewRef} className="relative py-24 md:py-40 px-4 md:px-8 border-t border-[#f97316]/10">
        <div className="max-w-6xl mx-auto">
          <div className="reveal mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#f97316]" />
              <span className="text-[10px] font-oswald tracking-[0.3em] uppercase text-[#f97316]">
                The Crew
              </span>
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-[#e2e8f0] mb-4">
              The GHOULVERSE
            </h2>
            <p className="text-[#9ca3af] max-w-md text-sm">
              Eight workers. One site.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-[#374151]/30">
            {OTHER_GHOULS.map((g) => {
              const isForeman = ['tradie', 'goo'].includes(g.id);

              return (
                <a
                  key={g.id}
                  href={g.live ? g.domain : `https://www.ghoulverse.com/ghouls/${g.id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal group relative p-5 md:p-6 text-center transition-all duration-300 hover:bg-[#262626]"
                  style={{ background: 'rgba(26, 26, 26, 0.95)' }}
                >
                  {isForeman && (
                    <span className="absolute top-2 right-2 text-[8px] font-oswald tracking-[0.15em] uppercase px-1.5 py-0.5"
                      style={{ color: g.color, border: `1px solid ${g.color}40` }}>
                      Foreman
                    </span>
                  )}

                  <div className="text-2xl md:text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {g.icon}
                  </div>

                  <h3 className="font-oswald text-xs tracking-wider uppercase text-[#e2e8f0]">
                    {g.name}
                  </h3>
                  <p className="text-[#9ca3af]/50 text-[10px] uppercase tracking-wider mt-1">
                    {g.realm}
                  </p>
                  {!g.live && (
                    <span className="text-[9px] text-[#9ca3af]/30 uppercase tracking-wider block mt-1">
                      Off Site
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="reveal mt-12 text-center">
            <a
              href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 font-oswald text-sm tracking-wider uppercase transition-all hover:scale-105"
              style={{
                background: '#f97316',
                color: '#1a1a1a',
                clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
              }}
            >
              Enter the GHOULVERSE
            </a>
          </div>
        </div>
      </section>

      {/* ===== GAME ===== */}
      <section ref={gameRef} className="relative py-24 md:py-40 px-4 md:px-8 border-t border-[#f97316]/10">
        <div className="max-w-4xl mx-auto">
          <div
            className="reveal relative p-10 md:p-16 text-center overflow-hidden border border-[#f97316]/20"
            style={{ background: 'rgba(26, 26, 26, 0.8)' }}
          >
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#f97316]/30" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#f97316]/30" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#f97316]/30" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#f97316]/30" />

            <Gamepad2 className="reveal w-10 h-10 text-[#f97316] mx-auto mb-6" />

            <h2 className="reveal font-oswald text-4xl md:text-5xl font-bold uppercase text-[#e2e8f0] mb-4 relative z-10">
              Play GHOULVERSE
            </h2>

            <p className="reveal text-[#9ca3af] max-w-xl mx-auto mb-8 relative z-10 text-sm">
              Pilot {config.name} through the Void in this epic endless runner.
              Battle bacteria, unlock all 8 ghouls, and claim your place on the leaderboard.
            </p>

            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal relative z-10 inline-flex items-center gap-2 px-8 py-3 font-oswald text-sm tracking-wider uppercase transition-all hover:scale-105"
              style={{
                background: '#f97316',
                color: '#1a1a1a',
                clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
              }}
            >
              <Gamepad2 className="w-4 h-4" />
              Play Now
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER / CTA ===== */}
      <section ref={ctaRef} className="relative py-24 md:py-40 px-4 md:px-8 border-t border-[#f97316]/10">
        <div className="max-w-lg mx-auto text-center">
          <div className="reveal mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#f97316]" />
              <span className="text-[10px] font-oswald tracking-[0.3em] uppercase text-[#f97316]">
                Sign On
              </span>
              <div className="w-8 h-px bg-[#f97316]" />
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-[#e2e8f0] mb-4">
              {config.cta.headline}
            </h2>
            <p className="text-[#9ca3af] text-sm">
              {config.cta.subheadline}
            </p>
          </div>

          <div className="reveal flex flex-col sm:flex-row gap-3 mb-16">
            <input
              type="email"
              placeholder={config.cta.placeholderText}
              className="flex-1 px-5 py-3 text-sm text-[#e2e8f0] placeholder:text-[#6b7280] outline-none transition-all bg-transparent border border-[#374151] focus:border-[#f97316]"
            />
            <button
              className="px-8 py-3 font-oswald text-sm tracking-wider uppercase transition-all hover:scale-105"
              style={{
                background: '#f97316',
                color: '#1a1a1a',
                clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
              }}
            >
              {config.cta.buttonText}
            </button>
          </div>

          <div className="reveal flex items-center justify-center gap-4 mb-10">
            {[Twitter, Instagram, Youtube].map((Icon, i) => {
              const colors = ['#f97316', '#fbbf24', '#9ca3af'];
              return (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center transition-all hover:scale-110 border"
                  style={{
                    borderColor: `${colors[i]}30`,
                    background: 'rgba(26, 26, 26, 0.8)',
                  }}
                >
                  <Icon className="w-4 h-4" style={{ color: colors[i] }} />
                </a>
              );
            })}
          </div>

          <div className="reveal mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
            <a
              href={GHOULVERSE_LINK?.domain || 'https://www.ghoulverse.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9ca3af] hover:text-[#f97316] transition-colors flex items-center gap-1 tracking-wider"
            >
              <Ghost className="w-3 h-3" />
              Explore the GHOULVERSE
            </a>
            <span className="text-[#374151] hidden sm:inline">|</span>
            <a
              href={config.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9ca3af] hover:text-[#fbbf24] transition-colors flex items-center gap-1 tracking-wider"
            >
              <Gamepad2 className="w-3 h-3" />
              Play GHOULVERSE
            </a>
          </div>

          <p className="reveal text-[#374151] text-xs tracking-wider">
            &copy; 2025 <span className="font-oswald text-[#f97316]/60">{config.name}</span> — All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
